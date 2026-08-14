import { NextResponse } from "next/server";

// Sends the contact form via Resend (https://resend.com).
// Requires two environment variables in Vercel:
//   RESEND_API_KEY — API key from the Resend dashboard
//   CONTACT_TO     — destination inbox (defaults to info@mercfund.com)
// Until RESEND_API_KEY is set, submissions return 503 and the form shows
// its error state with a direct-email fallback.

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new NextResponse("Invalid request", { status: 400 });
  }

  const { firstName = "", lastName = "", email = "", phone = "", role = "", subject = "", message = "" } = body;

  if (!firstName || !lastName || !email || !message) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new NextResponse("Form delivery is not configured", { status: 503 });
  }

  const to = process.env.CONTACT_TO || "info@mercfund.com";
  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    role && `Role: ${role}`,
    subject && `Subject: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Mercury Partners Website <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Website inquiry from ${firstName} ${lastName}${subject ? ` — ${subject}` : ""}`,
      text,
    }),
  });

  if (!res.ok) {
    return new NextResponse("Delivery failed", { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
