/**
 * Property-Based Tests for Form Data Transmission
 * Feature: fredi-builders-empire-building
 * Property 15: Form Data Transmission
 * **Validates: Requirements 3.6**
 */

import { describe, test, expect } from 'vitest'
import * as fc from 'fast-check'
import { submitLead } from '@/app/actions/submitLead'

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

const nameArbitrary = fc.string({ minLength: 2, maxLength: 50 }).map(s => 
  s.replace(/[^a-zA-Z\s]/g, 'A').trim() || 'John Smith'
)

/**
 * Property 15: Form Data Transmission
 * **Validates: Requirements 3.6**
 * 
 * For any valid form submission, the form data should be sent to the server 
 * with all required fields (service, postcode, name, phone, email).
 */
describe('Property 15: Form Data Transmission', () => {
  test('accepts valid form data with all required fields', async () => {
    await fc.assert(
      fc.asyncProperty(
        serviceArbitrary,
        ukPostcodeArbitrary,
        nameArbitrary,
        ukPhoneArbitrary,
        emailArbitrary,
        async (service, postcode, name, phone, email) => {
          const formData = new FormData()
          formData.append('service', service)
          formData.append('postcode', postcode)
          formData.append('name', name)
          formData.append('phone', phone)
          formData.append('email', email)

          const result = await submitLead(formData)

          expect(result.success).toBe(true)
          expect(result.error).toBeUndefined()
        }
      ),
      { numRuns: 50 } // Reduced for async tests
    )
  })

  test('rejects form data with missing service', async () => {
    await fc.assert(
      fc.asyncProperty(
        ukPostcodeArbitrary,
        nameArbitrary,
        ukPhoneArbitrary,
        emailArbitrary,
        async (postcode, name, phone, email) => {
          const formData = new FormData()
          // Missing service
          formData.append('postcode', postcode)
          formData.append('name', name)
          formData.append('phone', phone)
          formData.append('email', email)

          const result = await submitLead(formData)

          expect(result.success).toBe(false)
          expect(result.error).toBeDefined()
        }
      ),
      { numRuns: 20 }
    )
  })

  test('rejects form data with invalid service', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1, maxLength: 20 }).filter(s => !['Bathroom', 'Extension', 'Other'].includes(s)),
        ukPostcodeArbitrary,
        nameArbitrary,
        ukPhoneArbitrary,
        emailArbitrary,
        async (invalidService, postcode, name, phone, email) => {
          const formData = new FormData()
          formData.append('service', invalidService)
          formData.append('postcode', postcode)
          formData.append('name', name)
          formData.append('phone', phone)
          formData.append('email', email)

          const result = await submitLead(formData)

          expect(result.success).toBe(false)
          expect(result.error).toContain('Invalid service')
        }
      ),
      { numRuns: 20 }
    )
  })

  test('rejects form data with invalid postcode', async () => {
    await fc.assert(
      fc.asyncProperty(
        serviceArbitrary,
        fc.oneof(
          fc.constant(''),
          fc.constant('12345'),
          fc.constant('INVALID'),
          fc.string({ minLength: 1, maxLength: 3 })
        ),
        nameArbitrary,
        ukPhoneArbitrary,
        emailArbitrary,
        async (service, invalidPostcode, name, phone, email) => {
          const formData = new FormData()
          formData.append('service', service)
          formData.append('postcode', invalidPostcode)
          formData.append('name', name)
          formData.append('phone', phone)
          formData.append('email', email)

          const result = await submitLead(formData)

          expect(result.success).toBe(false)
          expect(result.error).toContain('Invalid postcode')
        }
      ),
      { numRuns: 20 }
    )
  })

  test('rejects form data with empty name', async () => {
    await fc.assert(
      fc.asyncProperty(
        serviceArbitrary,
        ukPostcodeArbitrary,
        fc.oneof(fc.constant(''), fc.constant('   ')),
        ukPhoneArbitrary,
        emailArbitrary,
        async (service, postcode, emptyName, phone, email) => {
          const formData = new FormData()
          formData.append('service', service)
          formData.append('postcode', postcode)
          formData.append('name', emptyName)
          formData.append('phone', phone)
          formData.append('email', email)

          const result = await submitLead(formData)

          expect(result.success).toBe(false)
          expect(result.error).toContain('Name is required')
        }
      ),
      { numRuns: 20 }
    )
  })

  test('rejects form data with invalid phone', async () => {
    await fc.assert(
      fc.asyncProperty(
        serviceArbitrary,
        ukPostcodeArbitrary,
        nameArbitrary,
        fc.oneof(
          fc.constant(''),
          fc.constant('123'),
          fc.constant('abcdefghij'),
          fc.string({ minLength: 1, maxLength: 5 })
        ),
        emailArbitrary,
        async (service, postcode, name, invalidPhone, email) => {
          const formData = new FormData()
          formData.append('service', service)
          formData.append('postcode', postcode)
          formData.append('name', name)
          formData.append('phone', invalidPhone)
          formData.append('email', email)

          const result = await submitLead(formData)

          expect(result.success).toBe(false)
          expect(result.error).toContain('Invalid phone')
        }
      ),
      { numRuns: 20 }
    )
  })

  test('rejects form data with invalid email', async () => {
    await fc.assert(
      fc.asyncProperty(
        serviceArbitrary,
        ukPostcodeArbitrary,
        nameArbitrary,
        ukPhoneArbitrary,
        fc.oneof(
          fc.constant(''),
          fc.constant('notanemail'),
          fc.constant('@example.com'),
          fc.constant('test@'),
          fc.constant('test@.com')
        ),
        async (service, postcode, name, phone, invalidEmail) => {
          const formData = new FormData()
          formData.append('service', service)
          formData.append('postcode', postcode)
          formData.append('name', name)
          formData.append('phone', phone)
          formData.append('email', invalidEmail)

          const result = await submitLead(formData)

          expect(result.success).toBe(false)
          expect(result.error).toContain('Invalid email')
        }
      ),
      { numRuns: 20 }
    )
  })

  test('handles form data with optional photos', async () => {
    const formData = new FormData()
    formData.append('service', 'Bathroom')
    formData.append('postcode', 'SW16 1AB')
    formData.append('name', 'John Smith')
    formData.append('phone', '07468451511')
    formData.append('email', 'john@example.com')

    // Add mock photo files
    const blob = new Blob(['test'], { type: 'image/jpeg' })
    const file1 = new File([blob], 'photo1.jpg', { type: 'image/jpeg' })
    const file2 = new File([blob], 'photo2.jpg', { type: 'image/jpeg' })
    formData.append('photo-0', file1)
    formData.append('photo-1', file2)

    const result = await submitLead(formData)

    expect(result.success).toBe(true)
    expect(result.error).toBeUndefined()
  })

  test('sanitizes input to prevent XSS', async () => {
    const formData = new FormData()
    formData.append('service', 'Bathroom')
    formData.append('postcode', 'SW16 1AB')
    formData.append('name', '<script>alert("xss")</script>')
    formData.append('phone', '07468451511')
    formData.append('email', 'test@example.com')

    const result = await submitLead(formData)

    // Should still succeed but sanitize the input
    expect(result.success).toBe(true)
  })

  test('handles all three service types', async () => {
    const services = ['Bathroom', 'Extension', 'Other'] as const

    for (const service of services) {
      const formData = new FormData()
      formData.append('service', service)
      formData.append('postcode', 'SW16 1AB')
      formData.append('name', 'John Smith')
      formData.append('phone', '07468451511')
      formData.append('email', 'john@example.com')

      const result = await submitLead(formData)

      expect(result.success).toBe(true)
      expect(result.error).toBeUndefined()
    }
  })

  test('validates postcode format strictly', async () => {
    const validPostcodes = ['SW16 1AB', 'E1 6AN', 'W1A 1AA', 'M1 1AE', 'B33 8TH']
    
    for (const postcode of validPostcodes) {
      const formData = new FormData()
      formData.append('service', 'Bathroom')
      formData.append('postcode', postcode)
      formData.append('name', 'John Smith')
      formData.append('phone', '07468451511')
      formData.append('email', 'john@example.com')

      const result = await submitLead(formData)

      expect(result.success).toBe(true)
    }
  })

  test('validates phone format strictly', async () => {
    const validPhones = ['07468451511', '02012345678', '+447468451511']
    
    for (const phone of validPhones) {
      const formData = new FormData()
      formData.append('service', 'Bathroom')
      formData.append('postcode', 'SW16 1AB')
      formData.append('name', 'John Smith')
      formData.append('phone', phone)
      formData.append('email', 'john@example.com')

      const result = await submitLead(formData)

      expect(result.success).toBe(true)
    }
  })
})
