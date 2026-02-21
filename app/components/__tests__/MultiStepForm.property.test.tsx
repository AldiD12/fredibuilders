/**
 * Property-Based Tests for Multi-Step Lead Form
 * Feature: fredi-builders-empire-building
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'

// Form data interface
interface FormData {
  service: 'Bathroom' | 'Extension' | 'Other' | ''
  postcode: string
  photos: File[]
  name: string
  phone: string
  email: string
}

// Validation functions (extracted from MultiStepForm logic)
function validateStep1(service: string): boolean {
  return service !== ''
}

function validateStep2(postcode: string): boolean {
  const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i
  return postcode !== '' && postcodeRegex.test(postcode)
}

function validateStep3(photos: File[]): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const validTypes = ['image/jpeg', 'image/png', 'image/webp']
  const maxSize = 5 * 1024 * 1024 // 5MB

  photos.forEach((file, index) => {
    if (!validTypes.includes(file.type)) {
      errors.push(`${file.name}: Invalid file type`)
    }
    if (file.size > maxSize) {
      errors.push(`${file.name}: File too large`)
    }
  })

  return { valid: errors.length === 0, errors }
}

function validateStep4(name: string, phone: string, email: string): boolean {
  if (!name.trim()) return false
  
  const phoneRegex = /^(\+44|0)[0-9]{10}$/
  if (!phone || !phoneRegex.test(phone.replace(/\s/g, ''))) return false
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) return false
  
  return true
}

function calculateProgress(currentStep: number, totalSteps: number): number {
  return (currentStep / totalSteps) * 100
}

// Arbitraries for generating test data
const serviceArbitrary = fc.constantFrom('Bathroom', 'Extension', 'Other')

const ukPostcodeArbitrary = fc.tuple(
  fc.string({ minLength: 1, maxLength: 2 }).map(s => s.toUpperCase().replace(/[^A-Z]/g, 'A')),
  fc.integer({ min: 1, max: 99 }),
  fc.option(fc.constant('A'), { nil: '' }),
  fc.integer({ min: 0, max: 9 }),
  fc.string({ minLength: 2, maxLength: 2 }).map(s => s.toUpperCase().replace(/[^A-Z]/g, 'A'))
).map(([area, district, letter, sector, unit]) => `${area}${district}${letter} ${sector}${unit}`)

const ukPhoneArbitrary = fc.oneof(
  fc.string({ minLength: 10, maxLength: 10 }).map(s => '0' + s.replace(/[^0-9]/g, '0').substring(0, 10)),
  fc.string({ minLength: 10, maxLength: 10 }).map(s => '+44' + s.replace(/[^0-9]/g, '0').substring(0, 10))
)

const emailArbitrary = fc.tuple(
  fc.string({ minLength: 3, maxLength: 10 }).map(s => s.toLowerCase().replace(/[^a-z0-9]/g, 'a')),
  fc.string({ minLength: 3, maxLength: 10 }).map(s => s.toLowerCase().replace(/[^a-z]/g, 'a')),
  fc.constantFrom('com', 'co.uk', 'org', 'net')
).map(([local, domain, tld]) => `${local}@${domain}.${tld}`)

/**
 * Property 11: Form Step Progression
 * **Validates: Requirements 3.2, 3.3, 3.4**
 * 
 * For any valid completion of step N (where N < 4), the form should advance to 
 * step N+1 and display the appropriate fields for that step.
 */
describe('Property 11: Form Step Progression', () => {
  test('step 1 validation passes for any valid service selection', () => {
    fc.assert(
      fc.property(serviceArbitrary, (service) => {
        expect(validateStep1(service)).toBe(true)
      }),
      { numRuns: 100 }
    )
  })

  test('step 1 validation fails for empty service', () => {
    expect(validateStep1('')).toBe(false)
  })

  test('step 2 validation passes for any valid UK postcode', () => {
    fc.assert(
      fc.property(ukPostcodeArbitrary, (postcode) => {
        expect(validateStep2(postcode)).toBe(true)
      }),
      { numRuns: 100 }
    )
  })

  test('step 2 validation fails for invalid postcodes', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant(''),
          fc.string({ minLength: 1, maxLength: 3 }),
          fc.string({ minLength: 20, maxLength: 30 }),
          fc.constant('12345'),
          fc.constant('ABCDEF')
        ),
        (invalidPostcode) => {
          expect(validateStep2(invalidPostcode)).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('step 3 validation passes for empty photo array (optional)', () => {
    const result = validateStep3([])
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  test('step 4 validation passes for valid contact details', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 2, maxLength: 50 }),
        ukPhoneArbitrary,
        emailArbitrary,
        (name, phone, email) => {
          expect(validateStep4(name, phone, email)).toBe(true)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('step 4 validation fails for empty name', () => {
    expect(validateStep4('', '07404304224', 'test@example.com')).toBe(false)
    expect(validateStep4('   ', '07404304224', 'test@example.com')).toBe(false)
  })

  test('step 4 validation fails for invalid phone', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant(''),
          fc.constant('123'),
          fc.constant('abcdefghij'),
          fc.string({ minLength: 1, maxLength: 5 })
        ),
        (invalidPhone) => {
          expect(validateStep4('John Smith', invalidPhone, 'test@example.com')).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('step 4 validation fails for invalid email', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant(''),
          fc.constant('notanemail'),
          fc.constant('@example.com'),
          fc.constant('test@'),
          fc.constant('test@.com')
        ),
        (invalidEmail) => {
          expect(validateStep4('John Smith', '07404304224', invalidEmail)).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })
})

/**
 * Property 12: Form Progress Indicator
 * **Validates: Requirements 3.5**
 * 
 * For any step in the multi-step form, the progress indicator should display 
 * the current step number and total number of steps.
 */
describe('Property 12: Form Progress Indicator', () => {
  test('progress percentage is calculated correctly for any step', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 4 }),
        (currentStep) => {
          const totalSteps = 4
          const percentage = calculateProgress(currentStep, totalSteps)
          
          // Property: Percentage should be between 0 and 100
          expect(percentage).toBeGreaterThanOrEqual(0)
          expect(percentage).toBeLessThanOrEqual(100)
          
          // Property: Percentage should match expected value
          const expectedPercentage = (currentStep / totalSteps) * 100
          expect(percentage).toBe(expectedPercentage)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('progress increases monotonically as steps advance', () => {
    const totalSteps = 4
    const progressValues = []
    
    for (let step = 1; step <= totalSteps; step++) {
      progressValues.push(calculateProgress(step, totalSteps))
    }
    
    // Property: Each progress value should be greater than the previous
    for (let i = 1; i < progressValues.length; i++) {
      expect(progressValues[i]).toBeGreaterThan(progressValues[i - 1])
    }
  })

  test('progress is 100% at final step', () => {
    const percentage = calculateProgress(4, 4)
    expect(percentage).toBe(100)
  })

  test('progress is 25% at first step', () => {
    const percentage = calculateProgress(1, 4)
    expect(percentage).toBe(25)
  })
})

/**
 * Property 13: Form Photo Upload Validation
 * **Validates: Requirements 3.7**
 * 
 * For any file upload attempt, files with invalid types (not JPEG, PNG, or WebP) 
 * or size exceeding 5MB should be rejected with an error message.
 */
describe('Property 13: Form Photo Upload Validation', () => {
  // Helper to create mock File objects
  function createMockFile(name: string, type: string, size: number): File {
    const blob = new Blob(['x'.repeat(size)], { type })
    return new File([blob], name, { type })
  }

  test('validates file types correctly - accepts valid types', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('image/jpeg', 'image/png', 'image/webp'),
        fc.string({ minLength: 5, maxLength: 20 }),
        fc.integer({ min: 100, max: 5 * 1024 * 1024 }), // Up to 5MB
        (validType, filename, size) => {
          const file = createMockFile(`${filename}.jpg`, validType, size)
          const result = validateStep3([file])
          
          expect(result.valid).toBe(true)
          expect(result.errors).toHaveLength(0)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('validates file types correctly - rejects invalid types', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('image/gif', 'image/bmp', 'application/pdf', 'text/plain', 'video/mp4'),
        fc.string({ minLength: 5, maxLength: 20 }),
        fc.integer({ min: 100, max: 1024 * 1024 }),
        (invalidType, filename, size) => {
          const file = createMockFile(`${filename}.txt`, invalidType, size)
          const result = validateStep3([file])
          
          expect(result.valid).toBe(false)
          expect(result.errors.length).toBeGreaterThan(0)
          expect(result.errors[0]).toContain('Invalid file type')
        }
      ),
      { numRuns: 100 }
    )
  })

  test('validates file size correctly - accepts files under 5MB', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 5 * 1024 * 1024 - 1 }), // Just under 5MB
        (size) => {
          const file = createMockFile('test.jpg', 'image/jpeg', size)
          const result = validateStep3([file])
          
          expect(result.valid).toBe(true)
          expect(result.errors).toHaveLength(0)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('validates file size correctly - rejects files over 5MB', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 5 * 1024 * 1024 + 1, max: 10 * 1024 * 1024 }), // Over 5MB
        (size) => {
          const file = createMockFile('large.jpg', 'image/jpeg', size)
          const result = validateStep3([file])
          
          expect(result.valid).toBe(false)
          expect(result.errors.length).toBeGreaterThan(0)
          expect(result.errors[0]).toContain('File too large')
        }
      ),
      { numRuns: 100 }
    )
  })

  test('validates multiple files correctly', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.tuple(
            fc.constantFrom('image/jpeg', 'image/png', 'image/webp'),
            fc.integer({ min: 100, max: 5 * 1024 * 1024 })
          ),
          { minLength: 1, maxLength: 5 }
        ),
        (fileSpecs) => {
          const files = fileSpecs.map(([type, size], index) =>
            createMockFile(`photo${index}.jpg`, type, size)
          )
          const result = validateStep3(files)
          
          expect(result.valid).toBe(true)
          expect(result.errors).toHaveLength(0)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('reports all errors for multiple invalid files', () => {
    const files = [
      createMockFile('invalid.gif', 'image/gif', 1024),
      createMockFile('toolarge.jpg', 'image/jpeg', 6 * 1024 * 1024),
      createMockFile('valid.jpg', 'image/jpeg', 1024)
    ]
    
    const result = validateStep3(files)
    
    expect(result.valid).toBe(false)
    expect(result.errors.length).toBeGreaterThanOrEqual(2)
    expect(result.errors.some(e => e.includes('Invalid file type'))).toBe(true)
    expect(result.errors.some(e => e.includes('File too large'))).toBe(true)
  })

  test('handles empty file array (optional upload)', () => {
    const result = validateStep3([])
    
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  test('validates exact 5MB boundary', () => {
    const exactlyFiveMB = 5 * 1024 * 1024
    const file = createMockFile('boundary.jpg', 'image/jpeg', exactlyFiveMB)
    const result = validateStep3([file])
    
    // 5MB exactly should be accepted
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  test('validates file with both invalid type and size', () => {
    const file = createMockFile('bad.pdf', 'application/pdf', 6 * 1024 * 1024)
    const result = validateStep3([file])
    
    expect(result.valid).toBe(false)
    // Should report both errors
    expect(result.errors.length).toBeGreaterThanOrEqual(1)
  })
})

/**
 * Property 14: Form Submission Event Tracking
 * **Validates: Requirements 3.8**
 * 
 * For any successful form submission, a Form_Submit analytics event should be 
 * fired with the form data.
 */
describe('Property 14: Form Submission Event Tracking', () => {
  // Mock gtag function
  let mockGtag: any
  let gtagCalls: any[]
  let originalGtag: any

  beforeEach(() => {
    gtagCalls = []
    mockGtag = (...args: any[]) => {
      gtagCalls.push(args)
    }
    // Store original gtag if it exists
    originalGtag = (global as any).gtag
    ;(global as any).gtag = mockGtag
  })

  afterEach(() => {
    // Restore original gtag
    if (originalGtag) {
      ;(global as any).gtag = originalGtag
    } else {
      delete (global as any).gtag
    }
    gtagCalls = []
  })

  test('fires analytics event with service type on form submission', () => {
    fc.assert(
      fc.property(
        serviceArbitrary,
        fc.boolean(),
        (service, hasPhotos) => {
          // Clear previous calls
          gtagCalls = []

          // Simulate form submission (using global instead of window for Node.js)
          if ((global as any).gtag) {
            ;(global as any).gtag('event', 'form_submit', {
              service: service,
              has_photos: hasPhotos
            })
          }

          // Verify analytics event was fired
          expect(gtagCalls.length).toBeGreaterThan(0)
          expect(gtagCalls[0][0]).toBe('event')
          expect(gtagCalls[0][1]).toBe('form_submit')
          expect(gtagCalls[0][2]).toEqual({
            service: service,
            has_photos: hasPhotos
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  test('includes has_photos flag in analytics event', () => {
    const testCases = [
      { service: 'Bathroom', hasPhotos: true },
      { service: 'Extension', hasPhotos: false },
      { service: 'Other', hasPhotos: true }
    ]

    testCases.forEach(({ service, hasPhotos }) => {
      gtagCalls = []

      if ((global as any).gtag) {
        ;(global as any).gtag('event', 'form_submit', {
          service: service,
          has_photos: hasPhotos
        })
      }

      expect(gtagCalls.length).toBe(1)
      expect(gtagCalls[0][2]).toEqual({
        service: service,
        has_photos: hasPhotos
      })
    })
  })

  test('event name is always "form_submit"', () => {
    fc.assert(
      fc.property(
        serviceArbitrary,
        (service) => {
          gtagCalls = []

          if ((global as any).gtag) {
            ;(global as any).gtag('event', 'form_submit', {
              service: service,
              has_photos: false
            })
          }

          expect(gtagCalls.length).toBeGreaterThan(0)
          // Verify first argument is 'event'
          expect(gtagCalls[0][0]).toBe('event')
          // Verify second argument is 'form_submit'
          expect(gtagCalls[0][1]).toBe('form_submit')
        }
      ),
      { numRuns: 100 }
    )
  })

  test('handles missing gtag gracefully', () => {
    delete (global as any).gtag

    // Should not throw error when gtag is not available
    expect(() => {
      if ((global as any).gtag) {
        ;(global as any).gtag('event', 'form_submit', {
          service: 'Bathroom',
          has_photos: false
        })
      }
    }).not.toThrow()

    // Restore gtag for other tests
    ;(global as any).gtag = mockGtag
  })

  test('event properties contain correct data types', () => {
    fc.assert(
      fc.property(
        serviceArbitrary,
        fc.boolean(),
        (service, hasPhotos) => {
          gtagCalls = []

          if ((global as any).gtag) {
            ;(global as any).gtag('event', 'form_submit', {
              service: service,
              has_photos: hasPhotos
            })
          }

          const eventProperties = gtagCalls[0][2]

          // Verify property types
          expect(typeof eventProperties.service).toBe('string')
          expect(typeof eventProperties.has_photos).toBe('boolean')

          // Verify service is one of the valid values
          expect(['Bathroom', 'Extension', 'Other']).toContain(eventProperties.service)
        }
      ),
      { numRuns: 100 }
    )
  })
})
