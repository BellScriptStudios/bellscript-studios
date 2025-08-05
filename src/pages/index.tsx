import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>BellScript Studios</title>
        <meta name="description" content="Full-stack web development studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>BellScript Studios</h1>
          <p>Custom web solutions, build with clarity and craft.</p>
          <a href="#contact" className={styles.cta}>Work with us</a>
        </header>

        <section className={styles.projects}>
          <h2>Our Work</h2>
          <p>Comming Soon: A collection of our recent builds and creative experiments</p>
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
        </footer>
      </main>
    </>
  );
}