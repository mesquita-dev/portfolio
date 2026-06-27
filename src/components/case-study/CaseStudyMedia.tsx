import { GENETICA_BACKGROUND_URL } from '../../constants/site.ts'
import type { CaseStudyMediaItem } from './types.ts'

const mediaBoxClassName =
  'flex h-[480px] w-full items-center justify-center overflow-hidden'

const phoneScreenshotClassName =
  'block h-auto max-h-[380px] w-auto max-w-[65%] object-contain'

type CaseStudyMediaProps = {
  item: CaseStudyMediaItem
}

export default function CaseStudyMedia({ item }: CaseStudyMediaProps) {
  if (item.type === 'placeholder') {
    return (
      <div className={`${mediaBoxClassName} bg-[#F2F2F2]`}>
        <p className="m-0 text-gray-400">
          {item.message ?? 'Case study soon'}
        </p>
      </div>
    )
  }

  if (item.type === 'screen-image') {
    return (
      <div className={`${mediaBoxClassName} bg-[#F2F2F2]`}>
        <img
          src={item.src}
          alt={item.alt}
          className={`h-full w-full object-${item.variant}${item.variant === 'contain' ? ' p-4' : ''}`}
        />
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
        <video
          className={`${phoneScreenshotClassName} rounded-xl`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={item.label}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt ?? ''}
          className={phoneScreenshotClassName}
        />
      )}
    </div>
  )
}
