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

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} BellScript Studios · All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}