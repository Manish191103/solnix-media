import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate the required fields
    if (!email || !email.includes('@')) {
      return new NextResponse('Please provide a valid email address', { status: 400 });
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
    // 3. Send confirmation email to the user
    
    console.log('Contact form submission:', { name, email, phone, subject, message });
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return new NextResponse('Error processing contact form', { status: 500 });
  }
} 