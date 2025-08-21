import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <h3>BellScript Studios</h3>
              <p>Clarity. Craft. Custom-built for the future.</p>
            </div>

            <nav className={styles.footerNav} aria-label="Footer navigation">
                <Link href="/#about">Home</Link>
                <Link href="/#about">About</Link>
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
              <span>© {new Date().getFullYear()} BellScript Studios</span>
              <span>All Rights Reserved</span>
              <span>Made in Michigan</span>
            </div>
        </footer>
    );
}