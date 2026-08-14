import type { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {lede && <p className="lede muted">{lede}</p>}
    </div>
  );
}
