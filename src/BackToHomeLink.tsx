import { ArrowLeft } from '@phosphor-icons/react'

export default function BackToHomeLink() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-[#EC3406]"
    >
      <ArrowLeft size={16} aria-hidden />
      Back to home
    </a>
  )
}
