import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
  return (
    <>
      <Head>
        <title>BellScript Studios</title>
        <meta name="description" content="Full-stack web development studio" />
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
          className={styles.cta}
          onClick={() => {
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Work with us
        </button>
      </header>
      
      { /* Main content */ }
      <main className={styles.main}>
        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            BellScript Studios is a creative web development studio based in Michigan.
            We specialize in building modern, responsive websites and applications that
            blend functionality with aesthetics.
          </p>
          <p>
            Whether you're launching a startup, refreshing your brand, or developing a custom tool,
            we bring clarity and craftsmanship to every project we touch.
          </p>
        </section>

        <section className={styles.projects}>
          <h2>Our Work</h2>
          <p>Coming Soon: A collection of our recent builds and creative experiments.</p>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>Contact Us</h2>
          <form
              action="https://formspree.io/f/xyzpnbed"
              method="POST"
              className={styles.form}
          >
            
            <p>Have a project in mind? Let's talk!</p>

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
          <p>© {new Date().getFullYear()} BellScript Studios · All rights reserved.</p>
          <p>Clarity. Craft. Custom-built for the future.</p>
          <div className={styles.socials}>
            <a href="mailto:hello@bellscript.studio">hello@bellscript.studio</a> ·
            <a href="https://github.com/BellScriptStudios" target="_blank" rel="noopener noreferrer">GitHub</a> ·
          </div>
        </footer>
      </main>
    </>
  );
}