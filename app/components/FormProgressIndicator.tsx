interface FormProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function FormProgressIndicator({
  currentStep,
  totalSteps
}: FormProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-teal-600">{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
