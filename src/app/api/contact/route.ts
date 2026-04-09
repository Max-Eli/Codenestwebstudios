import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO_EMAIL ?? "codenestwebstudios@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, type, message, phone, smsConsent, source } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const isPopup = source === "popup";

    const html = isPopup
      ? `
        <h2>New Estimate Request (Homepage Popup)</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>SMS Consent:</strong> ${smsConsent ? "✅ Opted in" : "❌ Not opted in"}</p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${type ? `<p><strong>Project type:</strong> ${type}</p>` : ""}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>SMS Consent:</strong> ${smsConsent ? "✅ Opted in" : "❌ Not opted in"}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${(message ?? "").replace(/\n/g, "<br/>")}</p>
      `;

    await resend.emails.send({
      from: "Codenest Web Studios <hello@codenestwebstudios.com>",
      to: TO,
      replyTo: email,
      subject: isPopup
        ? `New estimate request from ${name}`
        : `New contact form submission from ${name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
