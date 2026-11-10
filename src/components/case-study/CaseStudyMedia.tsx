import { GENETICA_BACKGROUND_URL } from '../../constants/site.ts'
import LazyVideo from '../LazyVideo.tsx'
import {
  laptopFrameClassName,
  laptopMediaWrapperClassName,
  laptopScreenClassName,
} from './laptopFrameClassNames.ts'
import type { CaseStudyMediaItem } from './types.ts'

const mediaBoxClassName =
  'flex h-[65svh] min-h-[28rem] max-h-[52rem] w-full items-center justify-center overflow-hidden bg-[#ececea]'

const phoneScreenshotClassName =
  'image-outline block h-auto max-h-[78%] w-auto max-w-[72%] rounded-[1.5rem] object-contain shadow-[0_24px_70px_rgba(0,0,0,.16)]'

const phoneScreenshotPairClassName =
  'image-outline block h-auto max-h-[76%] w-auto max-w-[calc(50%-12px)] rounded-[1.25rem] object-contain shadow-[0_20px_50px_rgba(0,0,0,.14)]'

const phoneScreenshotTripleClassName =
  'image-outline block h-auto max-h-[72%] w-auto max-w-[calc(33.333%-12px)] rounded-[1rem] object-contain shadow-[0_18px_40px_rgba(0,0,0,.12)]'

function getPhoneGroupImageClassName(imageCount: number) {
  if (imageCount >= 3) return phoneScreenshotTripleClassName
  return phoneScreenshotPairClassName
}

type CaseStudyMediaProps = {
  item: CaseStudyMediaItem
}

export default function CaseStudyMedia({ item }: CaseStudyMediaProps) {
  if (item.type === 'placeholder') {
    return (
      <div className={mediaBoxClassName}>
        <p className="m-0 text-gray-400">
          {item.message ?? 'Case study soon'}
        </p>
      </div>
    )
  }

  if (item.type === 'screen-image') {
    if (item.laptop) {
      return (
        <div className={mediaBoxClassName}>
          <div className={laptopMediaWrapperClassName}>
            <div className={laptopFrameClassName}>
              <img
                src={item.src}
                alt={item.alt}
                className={laptopScreenClassName}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={mediaBoxClassName}>
        <img
          src={item.src}
          alt={item.alt}
          className={
            item.variant === 'contain'
              ? 'image-outline h-full w-full object-contain p-[clamp(1rem,5vw,5rem)]'
              : 'image-outline h-full w-full object-cover'
          }
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  if (item.type === 'phone-image-group') {
    const backgroundStyle = item.backgroundColor
      ? { backgroundColor: item.backgroundColor }
      : { backgroundImage: `url(${GENETICA_BACKGROUND_URL})` }

    return (
      <div
        className={`${mediaBoxClassName} bg-cover bg-center`}
        style={backgroundStyle}
      >
        <div className="flex h-full w-full items-center justify-center gap-4 px-4">
          {item.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={getPhoneGroupImageClassName(item.images.length)}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    )
  }

  const backgroundStyle = item.backgroundColor
    ? { backgroundColor: item.backgroundColor }
    : { backgroundImage: `url(${GENETICA_BACKGROUND_URL})` }

  return (
    <div
      className={`${mediaBoxClassName}${item.backgroundColor ? '' : ' bg-cover bg-center'}`}
      style={backgroundStyle}
    >
      {item.type === 'phone-video' ? (
        <LazyVideo
          src={item.src}
          className={`${phoneScreenshotClassName} rounded-xl`}
          aria-label={item.label}
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt ?? ''}
          className={phoneScreenshotClassName}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}
