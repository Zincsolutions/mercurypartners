import Link from "next/link";

export default function CtaBand({
  lede = "We're here to discuss how Mercury can support your business transition.",
  label = "Let's Talk",
}: {
  lede?: string;
  label?: string;
}) {
  return (
    <section className="cta-band pad-global section">
      <div className="container cta-band__inner">
        <div>
          <h2 className="h3">
            Ready to explore a <em>partnership?</em>
          </h2>
          <p className="lede muted">{lede}</p>
        </div>
        <Link href="/contact" className="btn">
          {label}
        </Link>
      </div>
    </section>
  );
}
