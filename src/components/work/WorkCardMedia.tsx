import { useState, type PointerEvent, type ReactNode } from 'react'

const workMediaHeightClassName =
  'h-[80vh] min-[1920px]:h-[58vh] min-[1920px]:max-h-[600px]'

const workCardMediaClassName =
  `relative flex ${workMediaHeightClassName} w-full overflow-hidden [&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-out group-hover:[&_img]:scale-[1.02] [&_video]:transition-transform [&_video]:duration-300 [&_video]:ease-out group-hover:[&_video]:scale-[1.02]`

const workCardMediaDisabledClassName =
  `relative flex ${workMediaHeightClassName} w-full overflow-hidden [&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-out group-hover:[&_img]:scale-[1.02]`

type WorkCardMediaProps = {
  href?: string
  disabled?: boolean
  children: ReactNode
}

export default function WorkCardMedia({
  href,
  disabled = false,
  children,
}: WorkCardMediaProps) {
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null)
  const isInteractive = Boolean(href || disabled)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()

    setPointer({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  function handlePointerLeave() {
    setPointer(null)
  }

  return (
    <div
      className={`${disabled ? workCardMediaDisabledClassName : workCardMediaClassName}${isInteractive ? ' pointer-fine:cursor-none' : ''}`}
      onPointerMove={isInteractive ? handlePointerMove : undefined}
      onPointerLeave={isInteractive ? handlePointerLeave : undefined}
    >
      {children}
      {isInteractive && pointer ? (
        <span
          aria-hidden
          className={
            disabled
              ? 'pointer-events-none absolute z-10 flex size-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-center text-xs leading-tight text-gray-500'
              : 'pointer-events-none absolute z-10 flex size-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EC3406] text-center text-xs leading-tight text-white'
          }
          style={{ left: pointer.x, top: pointer.y }}
        >
          {disabled ? 'case soon' : 'Read case'}
        </span>
      ) : null}
    </div>
  )
}

export const workProjectMediaBoxClassName =
  `flex ${workMediaHeightClassName} w-full items-center justify-center overflow-hidden`
