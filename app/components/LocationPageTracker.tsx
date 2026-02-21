'use client'

import { useEffect } from 'react'
import { trackLocationView } from '@/app/lib/analytics'

interface LocationPageTrackerProps {
  locationName: string
}

export default function LocationPageTracker({ locationName }: LocationPageTrackerProps) {
  useEffect(() => {
    trackLocationView(locationName)
  }, [locationName])

  return null
}
