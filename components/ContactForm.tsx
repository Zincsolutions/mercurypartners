"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <p className="form-status form-status--ok" role="status">
        Thank you. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field field--wide">
        <label htmlFor="role">How would you describe yourself?</label>
        <select id="role" name="role" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Business owner</option>
          <option>Founder seeking exit</option>
          <option>Advisor or intermediary</option>
          <option>Investment professional</option>
          <option>Strategic partner</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field field--wide">
        <label htmlFor="subject">What is your inquiry about?</label>
        <input id="subject" name="subject" type="text" placeholder="Brief description of your inquiry" />
      </div>
      <div className="field field--wide">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your business, timeline, and goals..."
          required
        />
      </div>
      <div className="field field--wide field--check">
        <input id="privacy" name="privacy" type="checkbox" required />
        <label htmlFor="privacy">
          I agree to the privacy policy and consent to Mercury Partners contacting me regarding my
          inquiry.
        </label>
      </div>
      <div className="field field--wide">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" && (
          <p className="form-status form-status--err" role="alert">
            Something went wrong. Please try again, or email info@mercfund.com directly.
          </p>
        )}
      </div>
    </form>
  );
}
