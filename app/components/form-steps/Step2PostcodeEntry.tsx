interface Step2Props {
  value: string
  onChange: (value: string) => void
  error?: string
}

export default function Step2PostcodeEntry({ value, onChange, error }: Step2Props) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
        Where is your project?
      </h2>
      <p className="text-slate-600 mb-6">
        Enter your postcode so we can provide an accurate quote
      </p>

      <div className="max-w-md">
        <label htmlFor="postcode" className="block text-sm font-medium text-slate-700 mb-2">
          Postcode
        </label>
        <input
          type="text"
          id="postcode"
          value={value}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          placeholder="e.g., SW16 1AB"
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            error ? 'border-red-500' : 'border-slate-300'
          }`}
        />
        {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}

        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            <span className="material-icons-outlined text-teal-600 text-base align-middle mr-1">
              info
            </span>
            We serve South London and Surrey. If you're outside our area, we'll let you know.
          </p>
        </div>
      </div>
    </div>
  )
}
