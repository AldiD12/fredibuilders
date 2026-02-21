interface AggregateRatingWidgetProps {
  ratingValue: number
  reviewCount: number
}

export default function AggregateRatingWidget({
  ratingValue,
  reviewCount
}: AggregateRatingWidgetProps) {
  const percentage = (ratingValue / 10) * 100

  return (
    <div className="inline-flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center gap-3">
        <div className="text-5xl font-bold text-teal-400">{ratingValue}</div>
        <div className="text-left">
          <div className="text-sm text-slate-300">out of 10</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-icons text-yellow-400 text-xl">
                star
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="text-slate-300">
        Based on <span className="font-semibold text-white">{reviewCount}+</span>{' '}
        verified Checkatrade reviews
      </div>
    </div>
  )
}
