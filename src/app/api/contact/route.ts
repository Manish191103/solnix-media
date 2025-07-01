import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate the required fields
    if (!email || !email.includes('@')) {
      return new NextResponse('Please provide a valid email address', {
        status: 400,
      });
    }

    if (!name) {
      return new NextResponse('Please provide your name', { status: 400 });
    }

    if (!subject) {
      return new NextResponse('Please provide a subject', { status: 400 });
    }

    if (!message) {
      return new NextResponse('Please provide a message', { status: 400 });
    }

    // In a real-world scenario, you would:
    // 1. Send email notification to admin
    // 2. Store the contact request in a database
    // 3. Send confirmation email to the user (Formspree handles this)

    // Forward submission to Formspree
    const formspreeEndpoint = 'https://formspree.io/f/xrbkjwqe'; // User provided endpoint

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body), // Send the original parsed body
    });

    if (response.ok) {
      // Formspree submission was successful
      console.log('Contact form successfully submitted to Formspree.');
      return NextResponse.json({
        success: true,
        message: 'Contact form submitted successfully!',
      });
    } else {
      // Formspree submission failed
      const errorData = await response.json().catch(() => ({})); // Try to get error from Formspree
      console.error('Formspree submission error:', response.status, errorData);
      return new NextResponse(
        `Error submitting to Formspree: ${errorData.error || response.statusText}`,
        { status: response.status }
      );
    }
  } catch (error: any) { // Added type any for error
    console.error('Contact form processing error:', error);
    return new NextResponse('Error processing contact form', { status: 500 });
  }
}
