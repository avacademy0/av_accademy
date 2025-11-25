import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { 
            name, 
            email, 
            phone, 
            address, 
            course, 
            qualification, 
            experience, 
            portfolio, 
            message 
        } = body;

        
        if (!name || !email || !phone || !course) {
            return NextResponse.json(
                { error: 'Name, email, phone, and course are required.' },
                { status: 400 }
            );
        }

        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'avacademy1706@gmail.com', 
            replyTo: email, 
            subject: `New Student Enrollment: ${name} - ${course}`,
            text: `
        ============================================
        NEW STUDENT ENROLLMENT REQUEST
        ============================================
        
        Student Information:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address || 'Not provided'}
        
        Course Interest:
        ${course}
        
        Educational Background:
        ${qualification || 'Not provided'}
        
        Experience Level:
        ${experience || 'Not provided'}
        
        Portfolio/Links:
        ${portfolio || 'Not provided'}
        
        Additional Information:
        ${message || 'No additional information provided'}
        
        ============================================
        Please contact the student to proceed with enrollment.
        ============================================
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #2fdfc7; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="color: #000; margin: 0; font-size: 24px;">🎓 New Student Enrollment Request</h2>
          </div>
          
          <div style="background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #2fdfc7; padding-bottom: 8px;">
              Student Information
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #111827;">
                  <a href="mailto:${email}" style="color: #2fdfc7; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">
                  <a href="tel:${phone}" style="color: #2fdfc7; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ${address ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Address:</td>
                <td style="padding: 8px 0; color: #111827;">${address}</td>
              </tr>
              ` : ''}
            </table>

            <h3 style="color: #1f2937; margin-top: 24px; border-bottom: 2px solid #2fdfc7; padding-bottom: 8px;">
              Course & Background
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 140px;">Course:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; color: #2fdfc7; background-color: #f3f4f6; padding: 8px 12px; border-radius: 6px; display: inline-block;">
                  ${course}
                </td>
              </tr>
              ${qualification ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Qualification:</td>
                <td style="padding: 8px 0; color: #111827;">${qualification}</td>
              </tr>
              ` : ''}
              ${experience ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Experience:</td>
                <td style="padding: 8px 0; color: #111827;">${experience}</td>
              </tr>
              ` : ''}
              ${portfolio ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Portfolio:</td>
                <td style="padding: 8px 0; color: #111827;">
                  <a href="${portfolio}" target="_blank" style="color: #2fdfc7; text-decoration: none; word-break: break-all;">${portfolio}</a>
                </td>
              </tr>
              ` : ''}
            </table>

            ${message ? `
            <h3 style="color: #1f2937; margin-top: 24px; border-bottom: 2px solid #2fdfc7; padding-bottom: 8px;">
              Additional Information
            </h3>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; color: #374151; line-height: 1.6; white-space: pre-wrap;">
              ${message}
            </div>
            ` : ''}

            <div style="margin-top: 32px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Please contact the student to proceed with enrollment.
              </p>
              <div style="margin-top: 16px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #2fdfc7; color: #000; padding: 10px 24px; border-radius: 24px; text-decoration: none; font-weight: 600; margin-right: 8px;">
                  Reply to Student
                </a>
                <a href="tel:${phone}" style="display: inline-block; background-color: #1f2937; color: white; padding: 10px 24px; border-radius: 24px; text-decoration: none; font-weight: 600;">
                  Call Student
                </a>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
            <p>This email was sent from the AV Academy enrollment form.</p>
          </div>
        </div>
      `,
        };

        
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Enrollment request submitted successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending enrollment email:', error);
        return NextResponse.json(
            { error: 'Failed to submit enrollment request.' },
            { status: 500 }
        );
    }
}

