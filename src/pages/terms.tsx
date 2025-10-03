import Head from "next/head"
import styles from "@/styles/TOS.module.css"

export default function TOSPage() {
    const title = "Terms of Service — BellScript Studios"
    const desc = "Read the Terms of Service for BellScript Studios, outlining the rules and regulations for using our website and services."

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="canonical" href="https://bellscript.studio/terms" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="website" />
            </Head>

            <main className={styles.page} role="main" aria-labelledby="terms-of-service-header">
                <header className={styles.header}>
                    <h1>Terms of Service</h1>
                    <p className={styles.lead}>Last updated: October 2, 2025</p>

                    <p className={styles.intro}>
                        These Terms of Service (“Terms”) govern your use of the BellScript
                        Studios website and services. By using our site, you agree to these
                        Terms. If you do not agree, please do not use our site.
                    </p>
                </header>

                <section className={styles.section}>
                    <h2>1. Use of Our Site</h2>
                    <p>
                        You may use our site and services only for lawful purposes and in
                        accordance with these Terms. You agree not to misuse or interfere
                        with our site’s security, availability, or integrity.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Intellectual Property</h2>
                    <p>
                        All content on this site (including text, images, logos, and code)
                        is owned by BellScript Studios or its licensors. You may not copy,
                        reproduce, distribute, or create derivative works without prior
                        written permission.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Services & Engagements</h2>
                    <p>
                        If you hire BellScript Studios for web development, design, or other
                        services, a separate contract will govern the scope of work,
                        deliverables, and payment terms. These Terms apply only to your use
                        of this website.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. Third-Party Links</h2>
                    <p>
                        Our site may contain links to third-party websites or services. We
                        are not responsible for the content, policies, or practices of these
                        third parties.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Disclaimers</h2>
                    <p>
                        The site and its content are provided “as is” without warranties of
                        any kind, express or implied. We do not guarantee uninterrupted or
                        error-free access, nor that the site will always be secure or free
                        from defects.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, BellScript Studios is not
                        liable for any indirect, incidental, or consequential damages
                        arising from your use of our site or services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Governing Law</h2>
                    <p>
                        These Terms are governed by and construed in accordance with the
                        laws of the State of Michigan, United States, without regard to
                        conflict of law principles.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>8. Changes to These Terms</h2>
                    <p>
                        We may update these Terms from time to time. Any updates will be
                        posted on this page with a new effective date. By continuing to use
                        our site after changes, you accept the updated Terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have questions about these Terms, contact us at{" "}
                        <a href="mailto:hello@bellscript.studio">hello@bellscript.studio</a>.
                    </p>
                </section>
            </main>
        </> 
    )
}