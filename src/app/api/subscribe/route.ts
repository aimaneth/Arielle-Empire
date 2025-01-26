import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send confirmation email to subscriber
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to Grit Studio Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333EA;">Welcome to Grit Studio Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with our latest news, insights, and developments.</p>
          <p>You'll receive updates about:</p>
          <ul>
            <li>Latest projects and case studies</li>
            <li>Tech insights and best practices</li>
            <li>Company news and events</li>
            <li>Industry trends and innovations</li>
          </ul>
          <p>Best regards,<br>The Grit Studio Team</p>
        </div>
      `,
    })

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New Newsletter Subscription',
      text: `New subscriber: ${email}\nTimestamp: ${new Date().toLocaleString()}`,
    })

    // Log the subscription
    console.log(`New newsletter subscription: ${email} at ${new Date().toLocaleString()}`)

    return NextResponse.json({ 
      message: 'Successfully subscribed to newsletter'
    }, { status: 200 })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ 
      error: 'Failed to process subscription'
    }, { status: 500 })
  }
} 