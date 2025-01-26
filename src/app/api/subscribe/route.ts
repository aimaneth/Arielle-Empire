import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import clientPromise from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    
    console.log('Attempting to connect to MongoDB...')
    const client = await clientPromise
    const db = client.db("arielle")
    console.log('MongoDB connected successfully')

    // Check if subscriber already exists
    console.log('Checking for existing subscriber:', email)
    const existingSubscriber = await Subscriber.findOne({ email })
    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        // Reactivate subscription
        existingSubscriber.status = 'active'
        await existingSubscriber.save()
        console.log('Reactivated subscription for:', email)
      } else {
        console.log('Email already subscribed:', email)
        return NextResponse.json({ 
          message: 'Email already subscribed'
        }, { status: 400 })
      }
    } else {
      // Create new subscriber
      console.log('Creating new subscriber:', email)
      await db.collection('subscribers').insertOne({
        email,
        createdAt: new Date()
      })
      console.log('New subscriber created successfully')
    }

    console.log('Setting up email transporter...')
    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send confirmation email to subscriber
    console.log('Sending welcome email to:', email)
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
    console.log('Welcome email sent successfully')

    // Send notification to admin
    console.log('Sending notification to admin')
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New Newsletter Subscription',
      text: `New subscriber: ${email}\nTimestamp: ${new Date().toLocaleString()}`,
    })
    console.log('Admin notification sent successfully')

    return NextResponse.json({ 
      message: 'Successfully subscribed to newsletter'
    }, { status: 200 })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
} 