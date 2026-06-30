type PhotoWithCaptionProps = {
  src: string
  alt: string
  caption: string
  loading?: 'lazy' | 'eager'
}

export default function PhotoWithCaption({
  src,
  alt,
  caption,
  loading = 'lazy',
}: PhotoWithCaptionProps) {
  return (
    <div className="flex flex-col gap-1">
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full"
        loading={loading}
        decoding="async"
      />
      <p className="m-0 text-xs text-gray-400">{caption}</p>
    </div>
  )
}
