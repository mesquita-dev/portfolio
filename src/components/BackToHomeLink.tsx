import InternalLink from './InternalLink.tsx'
import { ACCENT_HOVER_CLASS } from '../constants/site.ts'

export default function BackToHomeLink() {
  return (
    <InternalLink
      href="/"
      className={`hit-area-40 inline-flex items-center gap-2 pl-0.5 text-gray-400 press-scale ${ACCENT_HOVER_CLASS}`}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 256 256"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M224,128a8,8,0,0,1-8,8H59.31l66.35,66.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
      </svg>
      Back to home
    </InternalLink>
  )
}
