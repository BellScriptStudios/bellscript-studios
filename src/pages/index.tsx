import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const pefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && pefersDark)) {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    const themeStr = nextTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeStr);
    localStorage.setItem("theme", themeStr);
  };
    
  return (
    <>
      <Head>
        <title>BellScript Studios</title>
        <link rel="icon" href="/favicon-512.svg" type="image/svg+xml" />
        <meta name="description" content="Full-stack web development studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      {/* Fixed header with scroll effect */}
      <header
        className={`${styles.stickyheader} ${scrolled ? styles.scrolled : ""}`}
      >
        <h1
        style={{cursor: "pointer"}}
        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}
        >
          BellScript Studios
        </h1>
        <button
          type="button"
          aria-label="Contact Us"
          className={`${styles.cta} ${scrolled ? styles.scrolled: ""}`}
          onClick={() => {
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Work with us
        </button>
      </header>
      
      { /* Main content */ }
      <main className={styles.main}>
        <section id="about" className={styles.about}>
          <h2>About Us</h2>
          <p>
            BellScript Studios is a creative web development studio based in Michigan.
            We specialize in building modern, responsive websites and applications that
            blend functionality with aesthetics.
          </p>
          <p>
            Whether you&apos;re launching a startup, refreshing your brand, or developing a custom tool,
            we bring clarity and craftsmanship to every project we touch.
          </p>
        </section>

        <section id="work" className={styles.projects}>
          <h2>Our Work</h2>
          
          { /* CLI Project */}
          <div className={styles.projectCard}>
            <div className={styles.projectThumbWrap}>
              <a 
                href="/images/smartspend-thumb.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/smartspend-thumb.png"
                  alt="SmartSpend CLI Expense Tracker Thumbnail"
                  width={300}
                  height={200}
                  className={styles.thumbnailImage}
                  priority={false}
                />
              </a>
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.projectHeader}>
                <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="14" rx="2" ry="2" className={styles.iconFrame}/>
                  <path d="M7 10l3 2-3 2" className={styles.iconAccent}/>
                  <path d="M12 14h5" className={styles.iconLine}/>
                </svg>
                <h3>SmartSpend - CLI Expense Tracker</h3>
              </div>

              <p>
                SmartSpend is a command-line interface (CLI) tool designed to help users track their expenses
                efficiently.
              </p>
              <p>
                Built in Python with a focus on simplicity and usability, it allows users to
                categorize expenses, set budgets, and generate reports directly from the terminal. Featuring multiuser 
                support, full CRUD, and CSV export functionality.
              </p>

              <a
                href="https://github.com/MTinsley00/CLI_Expense_Tracker.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project →
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>Contact Us</h2>
          <form
              action="https://formspree.io/f/xyzpnbed"
              method="POST"
              className={styles.form}
          >
            
            <p>Have a project in mind? Let&apos;s talk!</p>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>

            <button type="submit" className={styles.submit}>Send Message</button>
          </form>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <h3>BellScript Studios</h3>
              <p>Clarity. Craft. Custom-built for the future.</p>
            </div>
            <nav className={styles.footerNav} aria-label="Footer">
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
              >About</a>

              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
              >Our Work</a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >Contact Us</a>
              <a href="mailto:hello@bellscript.studio">Email</a>
              <a href="https://github.com/BellScriptStudios" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>

            <div className={styles.footerMeta}>
              <span>© {new Date().getFullYear()} BellScript Studios</span>
              <span>Made in Michigan</span>
            </div>
          </div>
        </footer>
      </main>
      {/* Floating theme toggle button */}
      <button
        type="button"
        aria-label="Toggle Theme"
        aria-pressed={isDarkMode}
        className={styles.themeToggle}
        onClick={toggleTheme}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </>
  );
}