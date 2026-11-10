import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const ASSETS = path.join(
  process.env.HOME,
  '.cursor/projects/Users-lucasmesquita-Desktop-portfolio/assets',
)
const OUT = path.join(ROOT, 'public/works/heroes')

const WIDTH = 2400
const HEIGHT = 1350

async function softShadow({ width, height, radius, blur = 48, opacity = 0.28 }) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="b" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="${blur}" />
        </filter>
      </defs>
      <rect
        x="${blur * 1.2}"
        y="${blur * 1.5}"
        width="${width - blur * 2.4}"
        height="${height - blur * 2.2}"
        rx="${radius}"
        ry="${radius}"
        fill="rgba(0,0,0,${opacity})"
        filter="url(#b)"
      />
    </svg>
  `
  return sharp(Buffer.from(svg)).png().toBuffer()
}

async function phoneDevice(screenPath, { screenWidth = 560 } = {}) {
  const screen = sharp(screenPath)
  const meta = await screen.metadata()
  const screenHeight = Math.round((screenWidth / meta.width) * meta.height)

  const bezel = 18
  const topChin = 28
  const bottomChin = 34
  const radius = 56
  const deviceWidth = screenWidth + bezel * 2
  const deviceHeight = screenHeight + topChin + bottomChin

  const roundedScreen = await sharp(screenPath)
    .resize(screenWidth, screenHeight, { fit: 'fill' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${screenWidth}" height="${screenHeight}">
            <rect width="100%" height="100%" rx="36" ry="36" fill="white"/>
          </svg>
        `),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer()

  const frame = Buffer.from(`
    <svg width="${deviceWidth}" height="${deviceHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" rx="${radius}" ry="${radius}" fill="#111111"/>
      <rect
        x="${(deviceWidth - 120) / 2}"
        y="11"
        width="120"
        height="8"
        rx="4"
        fill="#1c1c1c"
      />
    </svg>
  `)

  const device = await sharp(frame)
    .composite([
      {
        input: roundedScreen,
        left: bezel,
        top: topChin,
      },
    ])
    .png()
    .toBuffer()

  return { device, width: deviceWidth, height: deviceHeight }
}

async function laptopDevice(screenPath, { screenWidth = 1480 } = {}) {
  const screen = sharp(screenPath)
  const meta = await screen.metadata()
  const screenHeight = Math.round((screenWidth / meta.width) * meta.height)

  const bezelX = 18
  const bezelTop = 16
  const bezelBottom = 18
  const lidWidth = screenWidth + bezelX * 2
  const lidHeight = screenHeight + bezelTop + bezelBottom
  const baseHeight = 28
  const baseWidth = Math.round(lidWidth * 1.08)
  const totalWidth = baseWidth
  const totalHeight = lidHeight + baseHeight
  const lidLeft = Math.round((baseWidth - lidWidth) / 2)

  const screenBuf = await sharp(screenPath)
    .resize(screenWidth, screenHeight, { fit: 'fill' })
    .png()
    .toBuffer()

  const chassis = Buffer.from(`
    <svg width="${totalWidth}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${lidLeft}" y="0" width="${lidWidth}" height="${lidHeight}" rx="18" ry="18" fill="#1a1a1a"/>
      <rect x="${lidLeft + 6}" y="6" width="${lidWidth - 12}" height="${lidHeight - 12}" rx="10" ry="10" fill="#0b0b0b"/>
      <rect x="0" y="${lidHeight}" width="${baseWidth}" height="${baseHeight}" rx="6" ry="6" fill="#2a2a2a"/>
      <rect x="${baseWidth * 0.35}" y="${lidHeight + 8}" width="${baseWidth * 0.3}" height="6" rx="3" fill="#3a3a3a"/>
    </svg>
  `)

  const device = await sharp(chassis)
    .composite([
      {
        input: screenBuf,
        left: lidLeft + bezelX,
        top: bezelTop,
      },
    ])
    .png()
    .toBuffer()

  return { device, width: totalWidth, height: totalHeight }
}

async function composeHero({
  background,
  output,
  buildDevice,
  maxWidthRatio = 0.62,
  maxHeightRatio = 0.78,
}) {
  const bg = await sharp(background)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
    .png()
    .toBuffer()

  let { device, width, height } = await buildDevice()

  const maxW = Math.round(WIDTH * maxWidthRatio)
  const maxH = Math.round(HEIGHT * maxHeightRatio)
  const scale = Math.min(1, maxW / width, maxH / height)

  if (scale < 1) {
    width = Math.round(width * scale)
    height = Math.round(height * scale)
    device = await sharp(device).resize(width, height).png().toBuffer()
  }

  const shadowPad = Math.round(Math.max(width, height) * 0.18)
  const shadow = await softShadow({
    width: width + shadowPad,
    height: height + shadowPad,
    radius: Math.round(40 * scale),
    blur: Math.round(36 * scale),
    opacity: 0.3,
  })

  const left = Math.round((WIDTH - width) / 2)
  const top = Math.round((HEIGHT - height) / 2) - Math.round(12 * scale)

  await sharp(bg)
    .composite([
      {
        input: shadow,
        left: Math.max(0, left - Math.round(shadowPad / 2)),
        top: Math.max(0, top - Math.round(shadowPad / 2) + Math.round(16 * scale)),
      },
      {
        input: device,
        left,
        top,
      },
    ])
    .webp({ quality: 88 })
    .toFile(output)

  console.log('wrote', path.relative(ROOT, output), `${width}x${height}`)
}

await mkdir(OUT, { recursive: true })

await copyFile(
  path.join(ASSETS, 'bg-genetica.png'),
  path.join(OUT, 'bg-genetica.png'),
)
await copyFile(
  path.join(ASSETS, 'bg-admentum.png'),
  path.join(OUT, 'bg-admentum.png'),
)
await copyFile(
  path.join(ASSETS, 'bg-granto.png'),
  path.join(OUT, 'bg-granto.png'),
)
await copyFile(
  path.join(ASSETS, 'bg-petsy.png'),
  path.join(OUT, 'bg-petsy.png'),
)

await composeHero({
  background: path.join(OUT, 'bg-genetica.png'),
  output: path.join(OUT, 'genetica.webp'),
  buildDevice: () =>
    phoneDevice(path.join(ROOT, 'public/genetica/Start.png'), {
      screenWidth: 560,
    }),
})

await composeHero({
  background: path.join(OUT, 'bg-admentum.png'),
  output: path.join(OUT, 'admentum.webp'),
  buildDevice: () =>
    laptopDevice(path.join(ROOT, 'public/admentum/AdvHome.webp'), {
      screenWidth: 1480,
    }),
})

await composeHero({
  background: path.join(OUT, 'bg-granto.png'),
  output: path.join(OUT, 'granto-one.webp'),
  buildDevice: () =>
    laptopDevice(
      path.join(ROOT, 'public/granto-one/interna-oportunidade.webp'),
      { screenWidth: 1480 },
    ),
})

await composeHero({
  background: path.join(OUT, 'bg-petsy.png'),
  output: path.join(OUT, 'petsy.webp'),
  buildDevice: () =>
    phoneDevice(path.join(OUT, 'petsy-frame.png'), {
      screenWidth: 520,
    }),
})
