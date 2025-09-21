import styles from "@/styles/Home.module.css";
import Head from "next/head";

import ProjectSection from "@/components/ProjectSection";
import { FEATURED_PROJECTS } from "@/data/projects";

import ServicesSection from "@/components/ServicesSection";
import { FEATURED_SERVICES } from "@/data/services"

export default function Home() {
  const title = "BellScript Studios — Website & Software Development";
  const desc = "BellScript Studios builds clean, modern websites and custom software solutions for resumes, weddings, events, businesses, and startups.";

  return (
    <>    
      { /* Main content */ }
      <Head>
        <title>{title}</title>
        <link rel="canonical" href="https://bellscript.studio/" />
        <meta property="og:title" content="BellScript Studios builds modern websites and custom software solutions for resumes, weddings, events, and businesses." />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
      </Head>

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

        <section id="projects" className={styles.projects}>
          <ProjectSection
            id="our-work"
            heading="Featured Work"
            intro="Our featured projects showcase the clean design and thoughtful details that define every BellScript Studios build."
            items={FEATURED_PROJECTS}
            showViewAll={true}
            viewAllHref="/projects"
            viewAllLabel="View all projects"
          />
        </section>

        <section id="services" className={styles.services}>
          <ServicesSection
            id="services"
            heading="Featured Services"
            intro="From career milestones to life’s biggest moments, our featured services bring your ideas to life with clean, modern websites."
            items={FEATURED_SERVICES}
          />
        </section>
      </main>
    </>
    );
  }