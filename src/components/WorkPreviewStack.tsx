import { memo } from 'react'
import { GENETICA_BACKGROUND_URL } from '../constants/site.ts'

const workPreviewBlockClassName =
  'flex h-[calc((100%-1rem)/2)] min-h-0 w-full shrink-0 items-center justify-center overflow-hidden'

const admentumPreviewBlockClassName =
  'absolute inset-x-0 bottom-[calc(100%+1rem)] flex h-[calc((100%-1rem)/2)] items-center justify-center overflow-visible bg-black'

const geneticaPreviewPhoneClassName =
  'block h-auto max-h-[90%] w-auto max-w-[75%] object-contain'

const petsyPreviewPhoneClassName =
  'block h-auto max-h-[90%] w-auto max-w-[75%] rounded-xl object-contain'

const admentumPreviewImageClassName =
  'block h-auto w-full max-w-full object-contain object-center'

function WorkPreviewStack() {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-col justify-end gap-4 overflow-visible">
      <div className={admentumPreviewBlockClassName}>
        <img
          src="/admentum/admentum1.jpg"
          alt="Admentum"
          className={admentumPreviewImageClassName}
        />
      </div>

      <div className={`${workPreviewBlockClassName} bg-[#89D4FF]`}>
        <video
          className={petsyPreviewPhoneClassName}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Petsy"
        >
          <source src="/works/petsy.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className={`${workPreviewBlockClassName} bg-cover bg-center`}
        style={{ backgroundImage: `url(${GENETICA_BACKGROUND_URL})` }}
      >
        <img
          src="/genetica/Start.png"
          alt="Genetica Mais"
          className={geneticaPreviewPhoneClassName}
        />
      </div>
    </div>
  )
}

export default memo(WorkPreviewStack)
