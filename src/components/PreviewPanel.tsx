import { memo } from 'react'
import WorkPreviewStack from './WorkPreviewStack.tsx'

export type PreviewType = 'work' | 'about' | null

const previewImageClassName =
  'block aspect-[2/3] w-full object-contain object-center'

type PreviewPanelProps = {
  activePreview: PreviewType
}

function PreviewPanel({ activePreview }: PreviewPanelProps) {
  const isVisible = activePreview !== null
  const isWorkPreview = activePreview === 'work'

  return (
    <div
      className={`relative col-start-2 col-span-1 min-h-0 w-full self-stretch transition-opacity duration-300 ${
        isWorkPreview ? 'overflow-visible' : 'overflow-hidden'
      } ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div
        className={`absolute inset-x-0 bottom-0 top-0 min-h-0 ${
          isWorkPreview ? 'overflow-visible' : ''
        }`}
      >
        {isWorkPreview ? <WorkPreviewStack /> : null}

        {activePreview === 'about' ? (
          <div className="flex h-full min-h-0 flex-col justify-end">
            <img
              src="/about/me.png"
              alt="Lucas Mesquita"
              className={previewImageClassName}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default memo(PreviewPanel)
