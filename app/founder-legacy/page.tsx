import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Founder Legacy",
  description:
    "We invest in businesses the way founders built them — for the long haul. Mercury preserves culture, values, people, and relationships.",
};

const reasons = [
  {
    num: "I",
    title: "No Forced Exit",
    body: "We are not bound by fund timelines or outside investors, allowing decisions driven by long-term value — not deadlines.",
  },
  {
    num: "II",
    title: "Collaborative Growth",
    body: "We work alongside management teams, providing strategic support without disrupting the operations that got you here.",
  },
  {
    num: "III",
    title: "Aligned Ownership",
    body: "We invest in control positions while preserving leadership continuity and the founder intent that defines the company.",
  },
  {
    num: "IV",
    title: "Proven Judgment",
    body: "Over 25 years of investing and operating experience informs every decision we make — through all cycles and conditions.",
  },
];

const strategy = [
  {
    title: "Permanent Capital Structure",
    body: "No institutional fund pressure means our investment horizon is defined by business value, not fund lifecycles. We build for decades, not years.",
  },
  {
    title: "Business Building, Not Engineering",
    body: "We believe operational excellence and strategic growth — not short-term financial maneuvers — create lasting value for founders, employees, and investors alike.",
  },
  {
    title: "Control with Continuity",
    body: "Control investments aligned with founder continuity. We maintain strategic direction while empowering the management teams who built the business.",
  },
  {
    title: "Deep Partnership",
    body: "We provide strategic guidance, capital resources, operational insight, and access to a broad professional network — as genuine partners, not just capital providers.",
  },
];

const faqs = [
  {
    q: "Why should founders choose Mercury over other buyers?",
    a: "Mercury offers long-term ownership, strategic partnership, and continuity — without the pressure to sell or restructure for a quick exit. Our aligned ownership structure means your legacy is protected.",
  },
  {
    q: "How does Mercury's long-term focus benefit the business?",
    a: "It allows leadership teams to invest in people, systems, and growth strategies that create durable value rather than short-term financial results. Long-term thinking attracts the best talent and deepest customer relationships.",
  },
  {
    q: "How does Mercury help companies grow?",
    a: "Mercury partners with management teams to provide strategic guidance, capital resources, operational insight, and access to a broad professional network — from day one of ownership through the long term.",
  },
  {
    q: "Why is Mercury a safe choice for founders and advisors?",
    a: "Mercury combines certainty of close, long-term capital, proven experience, and a partnership mindset that aligns with founders' goals for the future. Our track record demonstrates the ability to close transactions and support growth.",
  },
];

export default function FounderLegacy() {
  return (
    <>
      <section className="page-hero page-hero--dark pad-global">
        <div className="container"><div className="page-hero__inner">
          <span className="eyebrow">Why Mercury</span>
          <h1 className="h1">
            A Different Kind of <em>Investment Firm</em>
          </h1>
          <p className="lede muted">
            We invest in businesses the way founders built them — for the long haul.
          </p>
        </div></div>
      </section>

      <section className="section pad-global scheme-cool">
        <div className="container split">
          <div>
            <span className="eyebrow">Legacy First</span>
            <h2 className="h2">
              What you built <em>endures</em>
            </h2>
            <p className="lede muted">
              Mercury&apos;s first mandate is preserving a company&apos;s culture, values, people,
              and relationships. We believe the founder&apos;s vision and the bonds built over years
              matter more than quarterly returns.
            </p>
            <p className="text-regular muted" style={{ marginBottom: "1.5rem" }}>
              A transition is more than a transaction. It affects employees, customers, culture, and
              legacy. Mercury approaches each investment with that responsibility in mind, working
              collaboratively with leadership to support long-term success while maintaining
              continuity.
            </p>
            <ul className="checklist">
              <li>Founder vision remains at the center</li>
              <li>People and relationships are protected</li>
              <li>Culture becomes the foundation for growth</li>
            </ul>
          </div>
          <div className="split__img">
            <Image
              src="/images/couch-meeting.jpg"
              alt="Mercury Partners meeting with a founder"
              width={800}
              height={680}
            />
          </div>
        </div>
      </section>

      <section className="section pad-global">
        <div className="container">
          <SectionHeader
            eyebrow="Why Founders Choose Mercury"
            title={<>Partnership That <em>Protects What Matters</em></>}
            lede="Founders choose Mercury because we respect the business they've built — and help strengthen it for the future."
          />
          <div className="numeral-grid">
            {reasons.map((r) => (
              <div key={r.num} className="numeral-item">
                <div className="numeral-item__num">{r.num}</div>
                <h3 className="numeral-item__title">{r.title}</h3>
                <p className="numeral-item__body">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global on-navy">
        <div className="container">
          <SectionHeader
            eyebrow="Strategy"
            title={<>Aligned for <em>the Long Run</em></>}
            lede="Mercury Partners invests for the long term, partnering with founders and management teams to support growth while preserving what already works. Our permanent capital structure enables us to build enduring businesses without exit pressure or short-term mandates."
          />
          <div className="card-grid card-grid--2">
            {strategy.map((s) => (
              <div key={s.title} className="card card--hover">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global scheme-grey">
        <div className="container faq-layout">
          <SectionHeader eyebrow="For Founders &amp; Advisors" title={<>Common <em>Questions</em></>} />
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
