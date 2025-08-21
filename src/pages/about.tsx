import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/AboutPage.module.css"

export default function AboutPage() {
    return (
        <>
        <Head>
            <title>About — BellScript Studios</title>
            <meta 
                name="description"
                content="The story, approach and values behind BellScript Studios. Modern accessible, and fast web development based in Michigan."
            />
            <link rel="canonical" href="https://bellscript.studio/about" />
        </Head>

        <main className={styles.page} role="main" aria-labelledby="about-h1">
            <header className={styles.hero}>
                <h1 id="about-h1" className={styles.h1}>About BellScript Studios</h1>
                <p className={styles.lead}>
                    We build clear, fast, and accessible web experiences — 
                    with a studio ethos that values craft, communication, 
                    and measurable outcomes.
                </p>
            </header>

            <section className={styles.band} aria-label="Mission and quick facts">
                <div className={styles.mission}>
                    <h2 className={styles.h2}>Our Mission</h2>
                    <p>
                        Help founders and small teams launch with confidence—combining thoughtful design,
                        robust engineering, and an obsession with performance and accessibility.
                    </p>
                </div>

                <ul className={styles.stats} aria-label="Quick facts">
                    <li><span className={styles.statNum}>95+</span><span>Core Web Vitals scores</span></li>
                    <li><span className={styles.statNum}>5d</span><span>Website-in-a-week delivery</span></li>
                    <li><span className={styles.statNum}>100%</span><span>Responsive & a11y-first</span></li>
                </ul>
            </section>

            <section className={styles.values} aria-labelledby="values-h2">
                <h2 id="values-h2">Values we build by</h2>
                <div className={styles.valueGrid}>
                    <article>
                        <h3>Clarity</h3>
                        <p>Simple interfaces, clear copy, and honest timeline.</p>
                    </article>
                    <article>
                        <h3>Craft</h3>
                        <p>Clean, testable code and high‑polish UI details.</p>
                    </article>
                    <article>
                        <h3>Care</h3>
                        <p>Accessibility, performance, and long‑term maintainability.</p>
                    </article>
                    <article>
                        <h3>Partnership</h3>
                        <p>Transparent communication and shared outcomes.</p>
                    </article>
                </div>
            </section>

            <section className={styles.process} aria-labelledby="process-h2">
                <h2 id="process-h2" className={styles.h2}>How we work</h2>
                <ul className={styles.steps}>
                    <li><strong>Discover</strong>— goals, users, scope, constraints.</li>
                    <li><strong>Design</strong>— structure, flows, components, content.</li>
                    <li><strong>Build</strong>— modern stack, accessible by default.</li>
                    <li><strong>Optimize</strong>— CWV, SEO meta/OG, analytics.</li>
                    <li><strong>Launch</strong>— deploy, monitor, iterate.</li>
                </ul>
            </section>

            <section className={styles.stack} aria-labelledby="stack-h2">
                <h2 id="stack-h2">Tech we love</h2>
                <ul className={styles.pills}>
                    <li>Python</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>CSS Modules</li>
                    <li>Stripe</li>
                    <li>PostgreSQL</li>
                    <li>Render</li>
                </ul>
                <p className={styles.stackNote}>
                    We choose tools that are stable, fast, and fit your use-case no trend chasing.
                </p>
            </section>

            <section className={styles.timeline} aria-labelledby="timeline-h2">
                <h2 id="timeline-h2">A short timeline</h2>
                <ul>
                    <li>
                        <time dateTime="2024">2024</time>
                        <span>Studio concept and early client work</span>
                    </li>
                    <li>
                        <time dateTime="2025">May 2025</time>
                        <span>Signature packages launched</span>
                    </li>
                    <li>
                        <time dateTime="2025">August 2025</time>
                        <span>Expanded services & care plans</span>
                    </li>
                </ul>
            </section>

            <section className={styles.faq} aria-labelledby="faq-h2">
                <h2 id="faq-h2"className={styles.h2}>FAQ</h2>
                <details>
                    <summary>How fast can we start?</summary>
                    <p>Typically 1-2 weeks. Website‑in‑a‑Week can start sooner based on availability.</p>
                </details>
                <details>
                    <summary>Do you offer payment plans?</summary>
                    <p>Yes, our Site Care Plans cover updates, security, and small tweaks.</p>
                </details>
                <details>
                    <summary>Do you maintain sites after launch?</summary>
                    <p>Yes, milestone-based for most packages.</p>
                </details>
            </section>

            <section className={styles.ctaBand} aria-label="Work with us">
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
                    <p className={styles.ctaText}>Tell us about it or book a quick call.</p>
                    <div className={styles.ctaRow}>
                        <Link href="/contact" className={styles.ctaPrimary}>Contact us</Link>
                        <Link href="/contact#booking" className={styles.ctaSecondary}>Book a call</Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}