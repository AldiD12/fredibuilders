'use client'

import { useState } from 'react'
import { trackCallClick } from '@/app/lib/analytics'
import FormProgressIndicator from '@/app/components/FormProgressIndicator'
import Step1ServiceSelection from '@/app/components/form-steps/Step1ServiceSelection'
import Step2PostcodeEntry from '@/app/components/form-steps/Step2PostcodeEntry'
import Step3PhotoUpload from '@/app/components/form-steps/Step3PhotoUpload'
import Step4ContactDetails from '@/app/components/form-steps/Step4ContactDetails'

export interface FormData {
  service: 'Bathroom' | 'Extension' | 'Other' | ''
  postcode: string
  photos: File[]
  name: string
  phone: string
  email: string
}

interface FormErrors {
  [key: string]: string
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    service: '',
    postcode: '',
    photos: [],
    name: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const totalSteps = 4

  const updateFormData = (field: keyof FormData, value: string | File[] | ('Bathroom' | 'Extension' | 'Other')) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.service) {
        newErrors.service = 'Please select a service'
      }
    } else if (step === 2) {
      const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i
      if (!formData.postcode) {
        newErrors.postcode = 'Please enter your postcode'
      } else if (!postcodeRegex.test(formData.postcode)) {
        newErrors.postcode = 'Please enter a valid UK postcode'
      }
    } else if (step === 3) {
      // Photos are optional, but validate if provided
      if (formData.photos.length > 0) {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp']
        const maxSize = 5 * 1024 * 1024 // 5MB

        formData.photos.forEach((file, index) => {
          if (!validTypes.includes(file.type)) {
            newErrors[`photo-${index}`] = `${file.name}: Invalid file type. Use JPEG, PNG, or WebP`
          }
          if (file.size > maxSize) {
            newErrors[`photo-${index}`] = `${file.name}: File too large. Max 5MB`
          }
        })
      }
    } else if (step === 4) {
      if (!formData.name.trim()) {
        newErrors.name = 'Please enter your name'
      }
      const phoneRegex = /^(\+44|0)[0-9]{10}$/
      if (!formData.phone) {
        newErrors.phone = 'Please enter your phone number'
      } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid UK phone number'
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email) {
        newErrors.email = 'Please enter your email'
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)

    try {
      // Track form submission event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'form_submit', {
          service: formData.service,
          has_photos: formData.photos.length > 0
        })
      }

      // Submit form data using server action
      const formDataToSend = new FormData()
      formDataToSend.append('service', formData.service)
      formDataToSend.append('postcode', formData.postcode)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('email', formData.email)
      formData.photos.forEach((photo, index) => {
        formDataToSend.append(`photo-${index}`, photo)
      })

      const { submitLead } = await import('@/app/actions/submitLead')
      const result = await submitLead(formDataToSend)

      if (result.success) {
        setSubmitSuccess(true)
      } else {
        throw new Error(result.error || 'Submission failed')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again or call us directly.'
      setErrors({ submit: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-teal-50 border-2 border-teal-500 rounded-lg p-8">
          <span className="material-icons-outlined text-teal-600 text-6xl mb-4">
            check_circle
          </span>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            We've received your request and will contact you within 24 hours with your
            fixed-price quote.
          </p>
          <p className="text-slate-600">
            Need to speak to us sooner?{' '}
            <a 
              href="tel:+447468451511" 
              onClick={() => trackCallClick('form')}
              className="text-teal-600 font-semibold hover:underline"
            >
              Call 07468 451511
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <FormProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        {currentStep === 1 && (
          <Step1ServiceSelection
            value={formData.service}
            onChange={(value: 'Bathroom' | 'Extension' | 'Other') => updateFormData('service', value)}
            error={errors.service}
          />
        )}

        {currentStep === 2 && (
          <Step2PostcodeEntry
            value={formData.postcode}
            onChange={(value: string) => updateFormData('postcode', value)}
            error={errors.postcode}
          />
        )}

        {currentStep === 3 && (
          <Step3PhotoUpload
            photos={formData.photos}
            onChange={(files: File[]) => updateFormData('photos', files)}
            errors={errors}
          />
        )}

        {currentStep === 4 && (
          <Step4ContactDetails
            name={formData.name}
            phone={formData.phone}
            email={formData.email}
            onNameChange={(value: string) => updateFormData('name', value)}
            onPhoneChange={(value: string) => updateFormData('phone', value)}
            onEmailChange={(value: string) => updateFormData('email', value)}
            errors={errors}
          />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 transition-colors"
            >
              Back
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="ml-auto px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="ml-auto px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Quote'}
            </button>
          )}
        </div>

        {errors.submit && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {errors.submit}
          </div>
        )}
      </div>
    </div>
  )
}
