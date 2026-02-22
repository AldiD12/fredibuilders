interface Step1Props {
  value: string
  onChange: (value: 'Bathroom' | 'Extension' | 'Other') => void
  error?: string
}

export default function Step1ServiceSelection({ value, onChange, error }: Step1Props) {
  const services = [
    {
      value: 'Bathroom' as const,
      icon: 'bathtub',
      title: 'Bathroom Renovation',
      description: 'Full bathroom renovations, wet rooms, luxury tiling'
    },
    {
      value: 'Extension' as const,
      icon: 'home',
      title: 'Home Extension',
      description: 'Single-story extensions, structural work, RSJ beams'
    },
    {
      value: 'Other' as const,
      icon: 'construction',
      title: 'Other Building Work',
      description: 'General building, repairs, and renovations'
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
        What service do you need?
      </h2>
      <p className="text-slate-600 mb-6">
        Select the type of work you're looking for
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <button
            key={service.value}
            onClick={() => onChange(service.value)}
            className={`p-6 border-2 rounded-lg text-left transition-all ${
              value === service.value
                ? 'border-teal-600 bg-teal-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
            aria-label={`Select ${service.title}`}
            aria-pressed={value === service.value}
          >
            <span
              className={`material-icons-outlined text-4xl mb-3 block ${
                value === service.value ? 'text-teal-600' : 'text-slate-400'
              }`}
            >
              {service.icon}
            </span>
            <h3 className="font-semibold text-slate-900 mb-1">{service.title}</h3>
            <p className="text-sm text-slate-600">{service.description}</p>
          </button>
        ))}
      </div>

      {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
    </div>
  )
}
