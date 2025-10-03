import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
                <Image
                  src="/images/bs-ccc-black.png"
                  alt="BellScript Studios logo"
                  width={250}
                  height={100}
                  className={styles.footerLogoLight}
                  priority={false}
                />
                <Image
                  src="/images/bs-ccc-white.png"
                  alt="BellScript Studios logo"
                  width={250}
                  height={100}
                  className={styles.footerLogoDark}
                  priority={false}
                />
            </div>

            <nav className={styles.footerNav} aria-label="Footer navigation">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Our work</Link>
                <Link href="/contact">Contact us</Link>
                <a 
                    href="mailto:hello@bellscript.studio" 
                    aria-label="Email BellScript Studios">
                    Email
                </a>
                
                <a 
                href="https://github.com/BellScriptStudios" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit BellScript Studios on GitHub">
                    GitHub
                </a>

            </nav>
            </div>
            <div className={styles.footerMeta}>
              <span>© {new Date().getFullYear()} The Morning Bell Co. LLC</span>
              <span>All Rights Reserved</span>
              <span>Made in Michigan</span>
            </div>
            <div className={styles.footerTag}>
              <span>BellScript Studios — A division of The Morning Bell Co. LLC</span>
              <span>
                Visit <a target="_blank" href="https://www.themorningbell.co">The Morning Bell Co.</a>
              </span>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
        </footer>
    );
}