interface Step4Props {
  name: string
  phone: string
  email: string
  onNameChange: (value: string) => void
  onPhoneChange: (value: string) => void
  onEmailChange: (value: string) => void
  errors: { [key: string]: string }
}

export default function Step4ContactDetails({
  name,
  phone,
  email,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  errors
}: Step4Props) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
        Your contact details
      </h2>
      <p className="text-slate-600 mb-6">
        We'll use these details to send you your fixed-price quote
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="John Smith"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-red-600 text-sm" role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="07468 451511"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              errors.phone ? 'border-red-500' : 'border-slate-300'
            }`}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-red-600 text-sm" role="alert">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-red-600 text-sm" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
        <div className="flex gap-3">
          <span className="material-icons-outlined text-teal-600 flex-shrink-0">
            lock
          </span>
          <div>
            <p className="text-sm font-medium text-teal-900 mb-1">
              Your information is secure
            </p>
            <p className="text-sm text-teal-700">
              We'll only use your details to provide your quote. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
