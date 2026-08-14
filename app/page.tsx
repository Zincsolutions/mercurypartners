import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Mercury Partners | Permanent Capital for Founder-Owned Businesses",
  description:
    "Mercury Partners acquires and operates founder-owned businesses across the lower middle market with permanent capital, founder respect, and operational growth.",
};

const principles = [
  {
    num: "01",
    title: "Permanent Capital",
    body: "No fund timelines. No forced exits. We own businesses indefinitely, allowing decisions driven by long-term value—not deadlines.",
  },
  {
    num: "02",
    title: "Founder Respect",
    body: "Every founder has built something worth protecting. We honor the vision, culture, and relationships that define each business.",
  },
  {
    num: "03",
    title: "Operational Growth",
    body: "We work alongside management to accelerate value creation through strategic guidance, capital resources, and operational insight.",
  },
];

const steps = [
  {
    num: "I",
    title: "Identify",
    body: "We seek U.S.-based founder-owned businesses with $10–50M in revenue operating in healthcare services and business services with proven points of differentiation.",
  },
  {
    num: "II",
    title: "Acquire",
    body: "Mercury's approach is to provide a seamless and thoughtful ownership transition that respects the founder's vision and legacy above all else.",
  },
  {
    num: "III",
    title: "Build",
    body: "We work to accelerate value creation by leveraging 25+ years of experience investing in and managing lower middle-market businesses.",
  },
  {
    num: "IV",
    title: "Partner",
    body: "Long-term aligned ownership with management teams. We collaborate without disrupting operations, preserving what works while strengthening what can improve.",
  },
];

const faqs = [
  {
    q: "What does Mercury Partners do?",
    a: "Mercury Partners is an investment company that invests in, acquires, and operates founder-owned businesses. The firm focuses on long-term ownership and works directly with management to grow and strengthen businesses after acquisition.",
  },
  {
    q: "How is Mercury different from traditional private equity?",
    a: "Unlike traditional private equity firms, Mercury Partners is not backed by institutional funds and is not required to sell businesses within a fixed timeframe. Mercury is privately funded and able to own and operate companies indefinitely, prioritizing founder legacy, culture, and long-term growth.",
  },
  {
    q: "What types of businesses does Mercury invest in?",
    a: "Mercury Partners invests in U.S.-based, founder-owned businesses with $10 to $50 million in annual revenue. The firm primarily focuses on companies in business services and healthcare services with strong differentiation and stable end markets.",
  },
  {
    q: "Does Mercury take an active role after acquisition?",
    a: "Yes. Mercury Partners works with the CEO and management to define a clear strategy, improve operational efficiencies, and ensure execution across key functional areas to support sustainable growth.",
  },
  {
    q: "Why is Mercury the right choice for founders and advisors?",
    a: "Mercury combines certainty of close, long-term capital, proven experience, and a partnership mindset that aligns with founders' goals for the future. Our permanent capital structure, hands-on operating experience, and founder-first approach make Mercury the ideal partner for a business transition.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero pad-global">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Lower Middle Market Partners</span>
            <h1 className="h1">
              We invest in and grow <em>founder-owned businesses.</em>
            </h1>
            <p className="lede muted">
              Mercury Partners is an investment company focused on acquiring and operating
              founder-owned businesses. Over 25 years of principal investing and CEO experience
              dedicated to the lower middle-market.
            </p>
            <div className="btn-group">
              <Link href="/contact" className="btn">START A CONVERSATION</Link>
              <Link href="/about" className="btn btn--secondary">ABOUT US</Link>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat__num">25+</div><div className="hero-stat__label">Years of Experience</div></div>
              <div><div className="hero-stat__num">22</div><div className="hero-stat__label">Investments</div></div>
              <div><div className="hero-stat__num">$10–50M</div><div className="hero-stat__label">Revenue Target</div></div>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <div className="hero__img-main">
              <Image src="/images/architecture.jpg" alt="" fill sizes="(max-width: 860px) 90vw, 35vw" style={{ objectFit: "cover", objectPosition: "12% 35%" }} priority />
            </div>
            <div className="hero__img-small">
              <Image src="/images/radiologist.jpg" alt="" fill sizes="22vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section pad-global scheme-cool">
        <div className="container">
          <SectionHeader
            eyebrow="Our Approach"
            title={<>The Principles That <em>Guide Our Investments</em></>}
            lede="Permanent ownership. Founder respect. Operational growth. Mercury acquires and operates lower middle market businesses with a commitment to preserving what makes them great."
          />
          <div className="card-grid card-grid--3">
            {principles.map((p) => (
              <div key={p.num} className="card card--hover">
                <div className="card__num">{p.num}</div>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global on-navy">
        <div className="container">
          <SectionHeader
            eyebrow="How We Invest"
            title={<>Investing to grow while <em>maintaining your legacy</em></>}
            lede="Mercury Partners is a long-term investor and operator who will protect the founder's legacy and build on the company's success by preserving brand and culture while working to accelerate growth and optimize operations."
          />
          <div className="numeral-grid">
            {steps.map((s) => (
              <div key={s.num} className="numeral-item" style={{ borderTopColor: "var(--border-on-navy)" }}>
                <div className="numeral-item__num" style={{ color: "var(--sky)" }}>{s.num}</div>
                <h3 className="numeral-item__title">{s.title}</h3>
                <p className="numeral-item__body" style={{ color: "var(--navy-tint)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global">
        <div className="container">
          <figure className="quote">
            <span className="quote__mark" aria-hidden="true">“</span>
            <blockquote className="quote__text">
              Mercury Partners was the logical partner to provide resources and team building
              capabilities to drive DirectMed&apos;s expansion. They also had deep respect for the
              culture we built and what made us successful.
            </blockquote>
            <figcaption className="quote__attr">
              Bill Erbes <span className="quote__role">· President and Co-Founder, DirectMed</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section pad-global scheme-grey">
        <div className="container faq-layout">
          <SectionHeader
            eyebrow="Common Questions"
            title={<>Frequently Asked <em>Questions</em></>}
          />
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
