import styles from "@/styles/Home.module.css";
import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/projects";

import ServicesSection from "@/components/ServicesSection";
import { FEATURED_SERVICES } from "@/data/services"

export default function Home() {
  return (
    <>    
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

        <ProjectSection
          id="our-work"
          heading="Our Work"
          intro="A few recent builds and brand projects we’re excited about."
          items={PROJECTS}
        />

        <ServicesSection
          id="services"
          heading="Services"
          intro="A quick overview of what we offer."
          items={FEATURED_SERVICES}
        />
      </main>
    </>
    );
  }