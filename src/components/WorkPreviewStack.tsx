import { memo } from 'react'
import LazyVideo from './LazyVideo.tsx'
import {
  WORK_ADMENTUM_MEDIA,
  WORK_GENETICA_MEDIA,
  WORK_PETSY_MEDIA,
} from '../constants/workProjects.ts'

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
          src={WORK_ADMENTUM_MEDIA.previewImageSrc}
          alt={WORK_ADMENTUM_MEDIA.previewImageAlt}
          className={admentumPreviewImageClassName}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div
        className={workPreviewBlockClassName}
        style={{ backgroundColor: WORK_PETSY_MEDIA.backgroundColor }}
      >
        <LazyVideo
          src={WORK_PETSY_MEDIA.videoSrc}
          className={petsyPreviewPhoneClassName}
          aria-label={WORK_PETSY_MEDIA.ariaLabel}
        />
      </div>

      <div
        className={`${workPreviewBlockClassName} bg-cover bg-center`}
        style={{ backgroundImage: `url(${WORK_GENETICA_MEDIA.backgroundUrl})` }}
      >
        <img
          src={WORK_GENETICA_MEDIA.phoneImageSrc}
          alt={WORK_GENETICA_MEDIA.phoneImageAlt}
          className={geneticaPreviewPhoneClassName}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

export default memo(WorkPreviewStack)
