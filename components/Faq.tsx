"use client";

import { useState } from "react";

export type FaqEntry = { q: string; a: string };

export default function Faq({ items }: { items: FaqEntry[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={item.q} className={`faq__item${open ? " faq__item--open" : ""}`}>
            <button
              className="faq__q"
              aria-expanded={open}
              onClick={() => setOpenIdx(open ? null : i)}
            >
              {item.q}
              <span className="faq__icon" aria-hidden="true">+</span>
            </button>
            <div className="faq__a">
              <div className="faq__a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
