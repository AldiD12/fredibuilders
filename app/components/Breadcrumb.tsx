import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <ol className="container mx-auto flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <span className="material-icons-outlined text-gray-400 text-sm mx-2">
                chevron_right
              </span>
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px] md:max-w-none">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors truncate max-w-[150px] md:max-w-none"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
