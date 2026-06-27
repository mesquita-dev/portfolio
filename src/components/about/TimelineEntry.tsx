type TimelineEntryProps = {
  title: string
  org: string
  period: string
}

export default function TimelineEntry({
  title,
  org,
  period,
}: TimelineEntryProps) {
  return (
    <div className="flex flex-col">
      <h3 className="m-0">{title}</h3>
      <div className="flex justify-between gap-6">
        <p className="m-0 text-gray-400">{org}</p>
        <p className="m-0 text-gray-400">{period}</p>
      </div>
    </div>
  )
}
