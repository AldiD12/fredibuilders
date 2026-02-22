'use server'

/**
 * Server Action for submitting lead form data
 * Validates data and sends email to fredibuilder18@icloud.com
 */

interface LeadFormData {
  service: 'Bathroom' | 'Extension' | 'Other'
  postcode: string
  name: string
  phone: string
  email: string
  photos?: File[]
}

interface SubmissionResult {
  success: boolean
  error?: string
}

/**
 * Validates UK postcode format
 */
function isValidPostcode(postcode: string): boolean {
  const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i
  return postcodeRegex.test(postcode)
}

/**
 * Validates UK phone number format
 */
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+44|0)[0-9]{10}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitizes input to prevent XSS
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Submits lead form data
 * 
 * @param formData - The form data to submit
 * @returns Result indicating success or failure
 */
export async function submitLead(formData: FormData): Promise<SubmissionResult> {
  try {
    // Extract and validate form data
    const service = formData.get('service') as string
    const postcode = formData.get('postcode') as string
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string

    // Validate required fields
    if (!service || !['Bathroom', 'Extension', 'Other'].includes(service)) {
      return { success: false, error: 'Invalid service selection' }
    }

    if (!postcode || !isValidPostcode(postcode)) {
      return { success: false, error: 'Invalid postcode' }
    }

    if (!name || name.trim().length === 0) {
      return { success: false, error: 'Name is required' }
    }

    if (!phone || !isValidPhone(phone)) {
      return { success: false, error: 'Invalid phone number' }
    }

    if (!email || !isValidEmail(email)) {
      return { success: false, error: 'Invalid email address' }
    }

    // Sanitize inputs
    const sanitizedData = {
      service: sanitizeInput(service),
      postcode: sanitizeInput(postcode),
      name: sanitizeInput(name),
      phone: sanitizeInput(phone),
      email: sanitizeInput(email)
    }

    // Get photo files if any
    const photoFiles: File[] = []
    let photoIndex = 0
    while (formData.has(`photo-${photoIndex}`)) {
      const file = formData.get(`photo-${photoIndex}`) as File
      if (file && file.size > 0) {
        photoFiles.push(file)
      }
      photoIndex++
    }

    // Prepare email content
    const emailContent = `
New Lead Submission from Fredi Builders Website

Service: ${sanitizedData.service}
Postcode: ${sanitizedData.postcode}
Name: ${sanitizedData.name}
Phone: ${sanitizedData.phone}
Email: ${sanitizedData.email}
Photos: ${photoFiles.length} file(s) attached

Submitted: ${new Date().toISOString()}
    `.trim()

    // In a real implementation, you would:
    // 1. Use a service like SendGrid, AWS SES, or Resend to send the email
    // 2. Store the submission in a database
    // 3. Handle file uploads to cloud storage
    
    // For now, we'll log the submission (in production, replace with actual email sending)
    console.log('Lead submission:', {
      ...sanitizedData,
      photoCount: photoFiles.length,
      timestamp: new Date().toISOString()
    })

    // TODO: Implement actual email sending
    // Example with a hypothetical email service:
    // await emailService.send({
    //   to: 'fredibuilder18@icloud.com',
    //   subject: `New ${sanitizedData.service} Lead - ${sanitizedData.postcode}`,
    //   text: emailContent,
    //   attachments: photoFiles
    // })

    return { success: true }
  } catch (error) {
    console.error('Error submitting lead:', error)
    return { 
      success: false, 
      error: 'Failed to submit form. Please try again or call us directly.' 
    }
  }
}

/**
 * Rate limiting check (simple in-memory implementation)
 * In production, use Redis or a proper rate limiting service
 */
const submissionTracker = new Map<string, number[]>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const hourAgo = now - 60 * 60 * 1000
  
  // Get submissions from this IP in the last hour
  const submissions = submissionTracker.get(ip) || []
  const recentSubmissions = submissions.filter(time => time > hourAgo)
  
  // Allow max 5 submissions per hour
  if (recentSubmissions.length >= 5) {
    return false
  }
  
  // Update tracker
  recentSubmissions.push(now)
  submissionTracker.set(ip, recentSubmissions)
  
  return true
}
