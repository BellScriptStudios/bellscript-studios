import Head from "next/head";
import styles from "@/styles/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
    const title = "Privacy Policy — BellScript Studios";
    const desc = "Read the privacy policy for BellScript Studios, detailing how we handle your data and protect your privacy.";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="canonical" href="https://bellscript.studio/privacy" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="website" />
            </Head>

            <main className={styles.page} role="main" aria-labelledby="privacy-policy-header">
                <header className={styles.header}>
                    <h1>Privacy Policy</h1>
                    <p className={styles.lead}>Last updated: {new Date().toLocaleDateString(undefined, {year:"numeric", month:"long", day:"numeric"})}</p>
                    <p className={styles.intro}>
                        BellScript Studios (“we,” “us,” or “our”) respects your privacy. This
                        policy explains what we collect, how we use it, and your choices.
                    </p>
                </header>

                <section className={styles.section} aria-labelledby="information-we-collect">
                    <h2>Information We Collect</h2>
                    <ul>
                        <li>
                        <strong>Contact details</strong> you submit (e.g., name, email, message)
                        via our contact form or when booking a call.
                        </li>
                        <li>
                        <strong>Usage data</strong> such as pages viewed, device type, and general
                        location (city/region) if analytics are enabled.
                        </li>
                        <li>
                        <strong>Booking data</strong> if you schedule via Calendly (subject to
                        Calendly’s privacy policy).
                        </li>
                    </ul>
                </section>

                <section className={styles.section} aria-labelledby="how-we-use-information">
                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>Respond to inquiries and provide requested services.</li>
                        <li>Schedule meetings and communicate about your project.</li>
                        <li>Improve our website, services, and user experience.</li>
                        <li>Maintain security, prevent abuse, and comply with legal obligations.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Cookies & Analytics</h2>
                    <p>
                        We may use privacy-respecting analytics (e.g., first-party or
                        aggregate tools) to understand website usage. Cookies or similar
                        technologies may be used for essential site functionality and
                        measurement. You can usually control cookies in your browser settings.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Sharing Your Information</h2>
                    <p>
                        We don’t sell your personal information. We may share limited data
                        with service providers that help us operate the site (e.g., hosting,
                        analytics, Calendly, Formspree). These providers process your data
                        only on our instructions and under appropriate safeguards. We may
                        also disclose information if required by law.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Data Retention</h2>
                    <p>
                        We keep personal information only as long as necessary to fulfill the
                        purposes described here or as required by law. You can request deletion
                        of your information (see “Your Rights” below).
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Security</h2>
                    <p>
                        We use reasonable administrative, technical, and organizational
                        measures to protect your information. No online service can be 100%
                        secure, but we work to safeguard your data.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Children’s Privacy</h2>
                    <p>
                        Our services are not directed to children under 13, and we do not
                        knowingly collect personal information from them.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Your Rights</h2>
                    <p>
                        Depending on your location, you may have rights to access, correct,
                        or delete your personal information, or object to/limit certain
                        processing. To exercise these rights, contact us using the details
                        below. We’ll respond in accordance with applicable law.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>International Transfers</h2>
                    <p>
                        If you access our site from outside the United States, your
                        information may be processed in the U.S. where data protection laws
                        may differ from those in your jurisdiction.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We’ll post the
                        new date at the top when changes are made.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Contact Us</h2>
                    <p>
                        If you have questions or requests, email us at{" "}
                        <a href="mailto:hello@bellscript.studio">hello@bellscript.studio</a>.
                    </p>
                </section>
            </main>
        </>
    )
}