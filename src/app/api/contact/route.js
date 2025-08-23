// app/api/contact/route.js (App Router)
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, phone, service, budget, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Name, email, and message are required fields" 
        }), 
        { status: 400 }
      );
    }

    console.log('Processing contact form submission from:', email);

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or any SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create HTML email template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">You have received a new inquiry</p>
        </div>
        
        <div style="background: white; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <!-- Contact Information -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">Contact Information</h2>
            
            <div style="display: grid; gap: 15px;">
              <div style="display: flex; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                <strong style="color: #667eea; min-width: 100px;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </div>
              
              <div style="display: flex; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                <strong style="color: #667eea; min-width: 100px;">Email:</strong>
                <a href="mailto:${email}" style="color: #333; text-decoration: none;">${email}</a>
              </div>
              
              ${company ? `
                <div style="display: flex; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                  <strong style="color: #667eea; min-width: 100px;">Company:</strong>
                  <span style="color: #333;">${company}</span>
                </div>
              ` : ''}
              
              ${phone ? `
                <div style="display: flex; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                  <strong style="color: #667eea; min-width: 100px;">Phone:</strong>
                  <a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Project Information -->
          ${(service || budget) ? `
            <div style="margin-bottom: 30px;">
              <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">Project Information</h2>
              
              <div style="display: grid; gap: 15px;">
                ${service ? `
                  <div style="display: flex; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                    <strong style="color: #667eea; min-width: 120px;">Service Needed:</strong>
                    <span style="color: #333;">${service}</span>
                  </div>
                ` : ''}
                
                ${budget ? `
                  <div style="display: flex; align-items: center; padding: 10px; background-color: #f8f9fa; border-radius: 6px;">
                    <strong style="color: #667eea; min-width: 120px;">Budget Range:</strong>
                    <span style="color: #333;">${budget}</span>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}

          <!-- Message -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">Project Details</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This message was sent from your contact form on ${new Date().toLocaleString()}
            </p>
            <div style="margin-top: 15px;">
              <a href="mailto:${email}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Create plain text version
    const textVersion = `
NEW CONTACT FORM SUBMISSION
============================

CONTACT INFORMATION:
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

${(service || budget) ? `
PROJECT INFORMATION:
${service ? `Service Needed: ${service}` : ''}
${budget ? `Budget Range: ${budget}` : ''}
` : ''}

PROJECT DETAILS:
${message}

----
This message was sent on ${new Date().toLocaleString()}
Reply to: ${email}
    `.trim();

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Use your email as sender
      replyTo: email, // Set reply-to as the customer's email
      to: process.env.EMAIL_USER,
      subject: `🔔 New Contact Form Submission from ${name}${company ? ` (${company})` : ''}`,
      text: textVersion,
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('Contact form email sent successfully to:', process.env.EMAIL_USER);

    // Optional: Send confirmation email to the customer
    const confirmationOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in our services! We've received your message and will get back to you within 24 hours.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="color: #333; margin: 0; font-weight: bold;">Your message:</p>
              <p style="color: #666; margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to check out our portfolio or follow us on social media.
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">
                Best regards,<br>
                <strong>Your Team</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send confirmation email (optional - uncomment if needed)
    // await transporter.sendMail(confirmationOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send email. Please try again later." 
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}