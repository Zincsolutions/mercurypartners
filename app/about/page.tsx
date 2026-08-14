import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Over 25 years of principal investing and CEO experience dedicated to the lower middle market. Mercury Partners is built on aligned, long-term ownership.",
};

const pillars = [
  {
    title: "No Forced Sale Timelines",
    body: "Permanent capital means decisions are driven by long-term value creation, never by a fund's exit requirements.",
  },
  {
    title: "No Institutional Fund Pressure",
    body: "Mercury is privately funded, enabling full alignment with founder and management team interests above all.",
  },
  {
    title: "No Short-Term Thinking",
    body: "We invest in people, systems, and growth strategies built to last — not financial maneuvers optimized for a quick exit.",
  },
];

const strategy = [
  {
    title: "The Right Business",
    items: [
      "Loyal, diverse customer base",
      "Unique value proposition",
      "Attractive end markets with predictable growth",
      "Distinct differentiation vs. competitors",
    ],
  },
  {
    title: "Financial Criteria",
    items: [
      "Revenue: $10M – $50M",
      "EBITDA: $1M – $4M",
      "Transaction Size: $5M – $50M",
      "Geography: United States only",
    ],
  },
  {
    title: "Transaction Type",
    items: [
      "Majority or control ownership strongly preferred",
      "Acquisitions, MBOs & recapitalizations",
      "Select operational turnarounds",
      "Financial restructurings",
    ],
  },
  {
    title: "Industry Focus",
    items: ["Healthcare Services", "Business Services"],
  },
];

const faqs = [
  {
    q: "How long has Mercury Partners been in business?",
    a: "Mercury Partners has over 25 years of principal investing and executive leadership experience dedicated to the lower middle market.",
  },
  {
    q: "What experience does Mercury have in business services?",
    a: "Mercury has invested in and supported companies across technology-enabled services, information services, facilities management, testing and inspection, logistics, and distribution.",
  },
  {
    q: "What experience does Mercury have in healthcare services?",
    a: "Mercury has experience across healthcare diagnostics, monitoring, outsourced services, tech-enabled solutions, medical products and distribution, and repair and maintenance services.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero pad-global">
        <div className="container"><div className="page-hero__inner">
          <span className="eyebrow">About Mercury Partners</span>
          <h1 className="h1">
            Investing in <em>Partnership</em>
          </h1>
          <p className="lede muted">
            Over 25 years of principal investing and CEO experience dedicated to the lower middle
            market.
          </p>
        </div></div>
      </section>

      <section className="section-sm pad-global scheme-cool">
        <div className="container">
          <div className="card-grid card-grid--3">
            {pillars.map((p) => (
              <div key={p.title} className="card card--hover">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global">
        <div className="container split">
          <div className="split__img">
            <Image
              src="/images/brad-profile.jpg"
              alt="Brad de Koning, Founding Partner of Mercury Partners"
              width={800}
              height={680}
            />
          </div>
          <div>
            <span className="eyebrow">Leadership</span>
            <h2 className="h2">
              Guided by Experience and <em>Accountability</em>
            </h2>
            <p className="lede muted">
              Brad de Koning brings over 25 years of principal investing and executive leadership
              experience dedicated to the lower middle market. As Founding Partner of Mercury
              Partners, he leads the firm&apos;s investment strategy and works closely with
              management teams to support long-term growth, continuity, and value creation.
            </p>
            <p className="text-regular muted" style={{ marginBottom: "1rem" }}>
              Having served as the CEO of two companies and as a private equity managing director,
              Mr. de Koning brings a combination of deal-making expertise and hands-on operating
              experience. He has been through the founder transition process from both sides of the
              table — and understands the nuances that make each partnership unique.
            </p>
            <p className="text-regular muted" style={{ marginBottom: "1.5rem" }}>
              Mercury Partners is built on the belief that the best outcomes for founders,
              employees, and investors are achieved through aligned, long-term ownership — not
              financial engineering or exit timelines.
            </p>
            <p className="text-regular" style={{ marginBottom: "0.5rem" }}>
              <strong>Brad de Koning</strong> · Founding Partner
            </p>
            <ul className="checklist">
              <li>Over 25 years of principal investing and CEO experience</li>
              <li>Former CEO and private equity managing director</li>
              <li>Directly involved from investment through long-term partnership</li>
              <li>Deep expertise across healthcare and business services</li>
              <li>Track record across 22+ lower middle-market investments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section pad-global scheme-cool">
        <div className="container">
          <SectionHeader
            eyebrow="Investment Strategy"
            title={<>Disciplined Strategy for <em>Long-Term Partners</em></>}
            lede="Mercury focuses on founder-owned, lower middle-market companies that align with our long-term, partnership-driven approach. We seek businesses with strong fundamentals, durable markets, and leadership teams ready to grow with a permanent capital partner."
          />
          <div className="card-grid card-grid--4">
            {strategy.map((s) => (
              <div key={s.title} className="card">
                <h3 className="card__title">{s.title}</h3>
                <ul className="plainlist">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global scheme-grey">
        <div className="container faq-layout">
          <SectionHeader eyebrow="About the Firm" title={<>More <em>Questions</em></>} />
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
