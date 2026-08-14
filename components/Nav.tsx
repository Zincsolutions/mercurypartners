"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/founder-legacy", label: "Founder Legacy" },
  { href: "/investments", label: "Investments" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`nav pad-global${open ? " nav--open" : ""}`}>
      <div className="nav__inner">
        <Link href="/" className="nav__logo" aria-label="Mercury Partners home" onClick={() => setOpen(false)}>
          <Image src="/images/logo-blue.png" alt="Mercury Partners" width={208} height={38} priority />
        </Link>
        <nav className={`nav__links${open ? " nav__links--open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav__link${pathname === l.href ? " nav__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
