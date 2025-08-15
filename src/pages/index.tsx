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

  const setThemeColorMeta = () => {
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }

    const headerBg = getComputedStyle(document.documentElement).getPropertyValue('--header-bg').trim();
    
    meta.setAttribute('content', headerBg);

  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = mql.matches;
    const dark = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    setIsDarkMode(dark)
    setThemeColorMeta();

    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const d = e.matches;
        document.documentElement.setAttribute("data-theme", d ? "dark" : "light");
        setIsDarkMode(d);
        setThemeColorMeta();
      }
    };
    mql.addEventListener?.("change", onChange)
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    const themeStr = nextTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeStr);
    localStorage.setItem("theme", themeStr);
    setThemeColorMeta();
  };
    
  return (
    <>
      <Head>
        <title>BellScript Studios - Full-Stack Web Development</title>

        <link rel="canonical" href="https://bellscript.studio/" />

        {/* SEO meta*/}
        <meta 
          name="description"
          content="BellScript Studios builds modern, accessible, and fast web applications. 
          Based in Michigan, we specialize in full-stack development and custom digital solutions"
        />
        <meta name="keywords" content="web development, full-stack, React, Next.js, Michigan, Detroit, BellScript Studios, Python, SQL, website design, United States" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="BellScript Studios" />
        <meta property="og:description" content="Modern, accessible, and fast full-stack web development studio based in Michigan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bellscript.studio/" />
        { /* <meta property="og:" content="https://bellscript.studio/images/og-image.png" /> */ }

        {/* Twitter Card
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BellScript Studios" />
        <meta name="twitter:description" content="Modern, accessible, and fast full-stack web development studio based in Michigan." />
        <meta name="twitter:image" content="https://bellscript.studio/images/og-image.png" /> */}

        { /* Core favicons */ }
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        { /* iOS home screen */ }
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        { /* Android / PWA */ }
        <link rel="manifest" href="/site.webmanifest" />

        { /* Safari pinned tab (monochrome SVG) */ }
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00BFA6" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BellScript Studios",
            "url": "https://bellscript.studio/",
            "logo": "https://bellscript.studio/images/og-image.png",
            "sameAs": [
              "https://github.com/BellScriptStudios",
              "mailto:hello@bellscript.studio"
            ],
            "description": "Full-stack web development studio in Michigan."
          })
        }} />
      </Head>

      {/* Fixed header with scroll effect */}
      <header
        className={`${styles.stickyheader} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
        aria-label="Site header"
      >
        <div 
          className={styles.headerBrand}
          role="button"
          tabIndex={0}
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onKeyDown={(e) =>  {
            if (e.key == "Enter" || e.key === " ") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/images/bs-logo.png"
            alt="BellScript Studios logo"
            width={40}
            height={40}
            className={styles.logo}
            priority={false}
          />
          <span className={styles.brandName}> BellScript Studios</span>
        </div>

        <button
          type="button"
          aria-label="Contact Us Button"
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

        <section id="our-work" className={styles.projects}>
          <h2>Our Work</h2>
          
          { /* The Morning Bell Co. Website */}
          <div className={styles.projectCard}>
            <div className={styles.projectThumbWrap}>
              <a 
                href="/images/tmb-co-logo.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/tmb-temp-logo.png"
                  alt="The Morning Bell Co. Thumbnail"
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
                  <g transform="translate(0,-0.5)">
                  {/* Umbrella Canopy */}
                  <path d="M6 10
                          Q8 6, 12 6
                          Q16 6, 18 10" 
                        className={styles.iconAccent}/>

                  {/* Umbrella Scallops */}
                  <path d="M6 11 q1 2 2 0
                          q1 2 2 0
                          q1 2 2 0
                          q1 2 2 0
                          q1 2 2 0
                          q1 2 2 0" 
                        className={styles.iconAccent}/>
                  {/* Umbrella Handle */}
                    <path d="M12 11 v4 
                            a3 3 0 0 1 -3 3 
                            a2 2 0 0 0 2 -2" className={styles.iconLine} />
                  </g>
                </svg>
                <h3>The Morning Bell Co.</h3>
              </div>

              <p>
                The Morning Bell Co. — Our own parent brand website built to 
                unify and showcase all ventures under our company umbrella.
              </p>
              <h5> Key Features: </h5>
                <p> •	Clean, corporate-polished UI consistent with sub-brand styles </p>
                <p> •	Responsive, mobile-first design for optimal accessibility </p>
                <p> •	Portfolio showcase linking directly to each brand site</p>
                <p> •	Optimized for speed, SEO, and cross-browser compatibility</p>

              <a
                href="https://www.themorningbell.co"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="View themorningbell.co website"
              >
                Coming Soon
              </a>
            </div>
          </div>
          
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
                SmartSpend is a command-line interface (CLI) application 
                designed to make expense tracking simple and efficient.
              </p>

              <h5>Features:</h5>
              	<p> •	Multi-user account support for personalized data tracking </p>
                <p> •	Full CRUD operations to add, edit, and delete expense entries </p>
                <p> •	Budget-setting tools with category-based organization </p>
                <p> • CSV export for seamless data backup and analysis </p>
                <p> •	Clean, intuitive terminal interface for fast navigation </p>

              <h5>Outcome:</h5>
              <p>
                Delivered a fully functional, lightweight financial tracking solution 
                that allows users to manage expenses without complex software.
                The project showcases skills in Python development, 
                data handling, and user-centric design in a non-GUI environment.
              </p>

              <a
                href="https://github.com/MTinsley00/CLI_Expense_Tracker.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="View SmartSpend CLI Expense Tracker project on GitHub"
              >
                Explore the Project →
              </a>
            </div>
          </div>
          
          {/* Candle Phase Project */}
          <div className={styles.projectCard}>
            <div className={styles.projectThumbWrap}>
              <a 
                href="/images/candle-phase-bs-thumbnail.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/candle-phase-bs-thumbnail.png"
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
                <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true" >

                  { /* Outer Frame */ }
                  <rect x="3" y="4" width="18" height="14" rx="2" ry="2" className={styles.iconFrame}/>

                  { /* Awning Top Bar */ }
                  <path d="M4 5 h16 v2.5 H4 z" className={styles.iconAccentThree} />

                  { /* Awning Scallops */ }                  
                  <path d="M4 7 q2 2 4 0 q2 2 4 0 q2 2 4 0 q2 2 4 0" className={styles.iconAccentThree} />
                  
                  { /* Door */ }  
                  <rect x="10.5" y="12" width="3" height="6" rx="0.5" className={styles.iconLineThree} /> 
                  { /* Window */ }  
                  <rect x="6" y="12" width="3" height="3" rx="0.5" className={styles.iconLineThree} /> 
                </svg>
                <h3>Candle Phase</h3>
              </div>

              <p> Something Beautiful is on the Horizon </p>
              <p> We’re pouring, curing, and crafting the perfect collection just for you. </p>
              <p> From healing to hustle, love to glow-up — your phase is about to be lit. </p>

              <a
                href="/images/candle-phase-bs-thumbnail.png"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label=""
              >
                Coming Soon
              </a>
              <p><i>Light your phase. Live your story.</i></p>
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

            <nav className={styles.footerNav} aria-label="Footer navigation">
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
              >About</a>

              <a
                href="#our-work"
                onClick={(e) => { e.preventDefault(); document.querySelector("#our-work")?.scrollIntoView({ behavior: "smooth" }); }}
              >Our Work</a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >Contact Us</a>

              <a href="mailto:hello@bellscript.studio" aria-label="Email BellScript Studios">Email</a>
              <a href="https://github.com/BellScriptStudios" target="_blank" rel="noopener noreferrer" aria-label="Visit BellScript Studios on GitHub">GitHub</a>
            </nav>

            <div className={styles.footerMeta}>
              <span>© {new Date().getFullYear()} BellScript Studios</span>
              <span>All Rights Reserved</span>
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