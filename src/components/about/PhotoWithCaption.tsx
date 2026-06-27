type PhotoWithCaptionProps = {
  src: string
  alt: string
  caption: string
}

export default function PhotoWithCaption({
  src,
  alt,
  caption,
}: PhotoWithCaptionProps) {
  return (
    <div className="flex flex-col gap-1">
      <img src={src} alt={alt} className="block h-auto w-full" />
      <p className="m-0 text-xs text-gray-400">{caption}</p>
    </div>
  )
}
