import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const leadData = {
      service: formData.get('service'),
      postcode: formData.get('postcode'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      photos: [] as string[],
      timestamp: new Date().toISOString()
    }

    // Collect photo filenames
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('photo-') && value instanceof File) {
        leadData.photos.push(value.name)
      }
    }

    // TODO: Implement email sending logic
    // For now, just log the submission
    console.log('Lead submission received:', leadData)

    // In production, you would:
    // 1. Send email to fredibuilder18@icloud.com
    // 2. Store in database
    // 3. Send confirmation email to customer
    // 4. Integrate with CRM

    return NextResponse.json(
      { success: true, message: 'Quote request received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
