'use server'

import { Resend } from 'resend'

/**
 * Server Action for submitting lead form data
 * Validates data and sends email to fredibuilder18@icloud.com
 */

const resend = new Resend(process.env.RESEND_API_KEY)

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
    const emailSubject = `🔔 New ${sanitizedData.service} Lead - ${sanitizedData.postcode}`
    
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1e40af; }
    .value { margin-top: 5px; }
    .footer { background: #f3f4f6; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280; }
    .cta { background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🔔 New Lead from Fredi Builders</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Service Requested:</div>
        <div class="value">${sanitizedData.service}</div>
      </div>
      <div class="field">
        <div class="label">Postcode:</div>
        <div class="value">${sanitizedData.postcode}</div>
      </div>
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${sanitizedData.name}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Photos Attached:</div>
        <div class="value">${photoFiles.length} file(s)</div>
      </div>
      <div class="field">
        <div class="label">Submitted:</div>
        <div class="value">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</div>
      </div>
      <a href="tel:${sanitizedData.phone}" class="cta">📞 Call ${sanitizedData.name}</a>
    </div>
    <div class="footer">
      <p>This lead was submitted via fredibuilders.co.uk</p>
      <p>Estimated lead value: £500-£1,000</p>
    </div>
  </div>
</body>
</html>
    `.trim()

    const emailText = `
New Lead Submission from Fredi Builders Website

Service: ${sanitizedData.service}
Postcode: ${sanitizedData.postcode}
Name: ${sanitizedData.name}
Phone: ${sanitizedData.phone}
Email: ${sanitizedData.email}
Photos: ${photoFiles.length} file(s) attached

Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}

Call now: ${sanitizedData.phone}
    `.trim()

    // Convert photos to base64 attachments for Resend
    const attachments = await Promise.all(
      photoFiles.map(async (file, index) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        return {
          filename: `photo-${index + 1}-${file.name}`,
          content: buffer,
        }
      })
    )

    // Send email via Resend to both Fredi and you (for testing/backup)
    const { data, error } = await resend.emails.send({
      from: 'Fredi Builders <leads@fredibuilders.co.uk>',
      to: ['fredibuilder18@icloud.com', 'demlekaaldi1@gmail.com'],
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
      attachments: attachments.length > 0 ? attachments : undefined,
      replyTo: sanitizedData.email,
    })

    if (error) {
      console.error('Resend error:', error)
      return { 
        success: false, 
        error: 'Failed to send email. Please call us directly at 07468 451511.' 
      }
    }

    // Log successful submission
    console.log('Lead submitted successfully:', {
      emailId: data?.id,
      service: sanitizedData.service,
      postcode: sanitizedData.postcode,
      photoCount: photoFiles.length,
      timestamp: new Date().toISOString()
    })

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
