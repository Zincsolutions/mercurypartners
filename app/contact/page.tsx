import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a confidential conversation about your business and long-term goals with Mercury Partners.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero pad-global">
        <div className="container page-hero__inner">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="h1">
            Let&apos;s <em>Talk</em>
          </h1>
          <p className="lede muted">
            Start a confidential conversation about your business and long-term goals.
          </p>
        </div>
      </section>

      <section className="section pad-global">
        <div className="container contact-grid">
          <div className="contact-info">
            <div>
              <div className="contact-info__label">Email</div>
              <a href="mailto:info@mercfund.com">info@mercfund.com</a>
            </div>
            <div>
              <div className="contact-info__label">Address</div>
              <p>
                12544 High Bluff Drive, Suite 200
                <br />
                San Diego, CA 92130
              </p>
            </div>
            <p className="contact-info__note">
              All inquiries are handled with complete confidentiality. Whether you are a founder
              exploring a transition, an advisor representing a client, or an investment
              professional, we welcome the conversation.
            </p>
          </div>
          <div className="contact-form">
            <p className="lede" style={{ marginBottom: "1.75rem" }}>
              Tell us about your business and what brings you here.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
