import { ACCENT_HOVER_CLASS } from '../../constants/site.ts'

export default function CaseStudyBackToTop() {
  return (
    <div className="flex w-full justify-center font-bebas-neue">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`m-0 cursor-pointer border-0 bg-transparent p-0 font-bebas-neue text-7xl leading-[0.85] ${ACCENT_HOVER_CLASS}`}
        aria-label="Back to top"
      >
        Back to top
      </button>
    </div>
  )
}
