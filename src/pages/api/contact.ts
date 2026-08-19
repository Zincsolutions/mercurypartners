import type { APIRoute } from "astro";

export const prerender = false;

// Sends the contact form via Resend (https://resend.com).
// Requires two environment variables in Netlify:
//   RESEND_API_KEY — API key from the Resend dashboard
//   CONTACT_TO     — destination inbox (defaults to info@mercfund.com)
// Until RESEND_API_KEY is set, submissions return 503 and the form shows
// its error state with a direct-email fallback.

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid request", { status: 400 });
  }

  const { firstName = "", lastName = "", email = "", phone = "", role = "", subject = "", message = "" } = body;

  if (!firstName || !lastName || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response("Form delivery is not configured", { status: 503 });
  }

  const to = import.meta.env.CONTACT_TO ?? process.env.CONTACT_TO ?? "info@mercfund.com";
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
    return new Response("Delivery failed", { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
