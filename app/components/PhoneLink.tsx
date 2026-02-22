'use client'

import { trackCallClick } from '@/app/lib/analytics'

interface PhoneLinkProps {
  context: string
  className?: string
  children: React.ReactNode
}

export default function PhoneLink({ context, className, children }: PhoneLinkProps) {
  return (
    <a
      href="tel:+447468451511"
      onClick={() => trackCallClick(context)}
      className={className}
      aria-label="Call Fredi Builders on 07468 451511"
    >
      {children}
    </a>
  )
}
