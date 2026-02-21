import Link from 'next/link'

interface ReviewsLinkProps {
  context?: 'button' | 'inline'
  className?: string
}

/**
 * ReviewsLink Component
 * Generates contextual link to /reviews page with review count and rating
 * Requirement 5.4: Deep links from all pages to Reviews Wall
 */
export default function ReviewsLink({
  context = 'inline',
  className = ''
}: ReviewsLinkProps) {
  const reviewCount = 104
  const rating = 9.6

  if (context === 'button') {
    return (
      <Link
        href="/reviews"
        className={`inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors ${className}`}
      >
        <span className="material-icons-outlined text-xl">star</span>
        <span>
          Read Our {reviewCount}+ Reviews ({rating}/10)
        </span>
      </Link>
    )
  }

  return (
    <Link
      href="/reviews"
      className={`inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium transition-colors ${className}`}
    >
      <span className="material-icons-outlined text-base">star</span>
      <span>See what our {reviewCount}+ customers say</span>
      <span className="material-icons-outlined text-base">arrow_forward</span>
    </Link>
  )
}
