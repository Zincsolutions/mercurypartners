import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer pad-global">
      <div className="container">
        <div className="footer__top">
          <Link href="/" className="footer__logo" aria-label="Mercury Partners home">
            <Image src="/images/logo-white.png" alt="Mercury Partners" width={219} height={40} />
          </Link>
          <nav className="footer__links" aria-label="Footer">
            <Link href="/about">About</Link>
            <Link href="/founder-legacy">Founder Legacy</Link>
            <Link href="/investments">Investments</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <span className="footer__tag">Permanent Capital for Growth</span>
        </div>
        <div className="divider" />
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Mercury Partners. All rights reserved.</span>
          <a href="mailto:info@mercfund.com">info@mercfund.com</a>
        </div>
      </div>
    </footer>
  );
}
