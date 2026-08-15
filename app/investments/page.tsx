import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import StatBand from "@/components/StatBand";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "Representative transactions across healthcare and business services — a track record built on founder-first partnership and long-term operational growth.",
};

const companies = [
  {
    name: "DirectMed",
    img: "/images/directmed.jpg",
    desc: "Leading provider of imaging parts for MRI and CT systems. Scaled through organic growth and strategic acquisitions into a lower middle-market leader.",
  },
  {
    name: "LBN Medical",
    img: "/images/lbn-medical.jpg",
    desc: "Diagnostic imaging systems and parts provider serving hospitals and independent imaging centers across the U.S. and international markets.",
  },
  {
    name: "Medical Systems Tech",
    img: "/images/medical-systems-tech.jpg",
    desc: "Component-level repair and testing for imaging parts — providing highly technical repair capabilities that complement the broader portfolio.",
  },
  {
    name: "Richardson Healthcare",
    img: "/images/richardson.jpg",
    desc: "Toshiba imaging parts and training services combined with Siemens CT X-ray tube distribution — a complementary strategic add-on.",
  },
  {
    name: "ScanMed",
    img: "/images/scanmed.jpg",
    desc: "Specialized MRI coil design, manufacture, and repair services. A niche technical business serving hospital systems and imaging centers nationwide.",
  },
  {
    name: "Technical Prospects",
    img: "/images/technical-prospects.jpg",
    desc: "Comprehensive parts, training, and service provider for Siemens imaging systems with deep OEM relationships and technical expertise.",
  },
  {
    name: "Titanium Medical Imaging",
    img: "/images/titanium.jpg",
    desc: "Specialized parts and service provider for Toshiba imaging systems, serving independent service organizations and hospitals nationally.",
  },
];

const sectors = [
  {
    title: "Healthcare Services",
    items: [
      "Healthcare diagnostics and monitoring",
      "Outsourced healthcare services",
      "Tech-enabled healthcare solutions",
      "Medical products and distribution",
      "Repair and maintenance services",
    ],
  },
  {
    title: "Business Services",
    items: [
      "Technology-enabled services",
      "Information and data services",
      "Facilities management",
      "Testing and inspection",
      "Logistics and distribution",
    ],
  },
];

export default function Investments() {
  return (
    <>
      <section className="page-hero page-hero--dark pad-global">
        <div className="container"><div className="page-hero__inner">
          <span className="eyebrow">Track Record</span>
          <h1 className="h1">
            Representative <em>Transactions</em>
          </h1>
          <p className="lede muted">
            Proven experience partnering with lower middle-market leaders across healthcare and
            business services.
          </p>
        </div></div>
      </section>

      <section className="section-sm pad-global scheme-cool">
        <div className="container">
          <StatBand
            bare
            stats={[
              { num: "22", label: "Investments" },
              { num: "25+", label: "Years Investing" },
              { num: "70%+", label: "Healthcare & Business Services" },
              { num: "LMM", label: "Focused Strategy" },
            ]}
          />
        </div>
      </section>

      <section className="section pad-global">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio"
            title={<>A Track Record Built Across <em>Diverse Businesses</em></>}
            lede="Each investment reflects our commitment to founder-first partnership and long-term operational growth."
          />
          <div className="portfolio-grid">
            {companies.map((c) => (
              <article key={c.name} className="pf-card">
                <div className="pf-card__img">
                  <Image src={c.img} alt={c.name} width={640} height={400} />
                </div>
                <div className="pf-card__body">
                  <h3 className="pf-card__title">{c.name}</h3>
                  <p className="pf-card__desc">{c.desc}</p>
                  <div className="pf-card__tags">
                    <span className="tag">Healthcare Services</span>
                    <span className="tag">Buyout</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-global scheme-cool">
        <div className="container">
          <SectionHeader
            eyebrow="Industry Focus"
            title={<>Sectors Where We <em>Add Value</em></>}
          />
          <div className="card-grid card-grid--2">
            {sectors.map((s) => (
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

      <CtaBand
        lede="Start a conversation about your business and long-term goals."
        label="Start a Conversation"
      />
    </>
  );
}
