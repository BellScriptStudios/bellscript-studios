import Script from "next/script"
import Head from "next/head"
import styles from "@/styles/ContactPage.module.css"

export default function ContactPage() {
    const title = "Work with us — BellScript Studios";
    const desc = "Tell us about your project or book a call. We build fast, modern, accessible sites and apps."

    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="canonical" href="https://bellscript.studio/contact" />
            <meta property="og:title" content="Work with us" />
            <meta property="og:description" content={desc} />
            <meta property="og:type" content="website" />
        </Head>

        <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
        />

        <main className={styles.page} role="main" aria-labelledby="contact-header">
            <header className={styles.header}>
                <h1 id="contact-h1" className={styles.h1}>Work with us</h1>
                <p className={styles.lead}>
                    Pefer email? Use the form. Ready to chat? Pick a time right on this page.
                </p>
            </header>

            <section className={styles.grid} aria-label="Contact and booking">
                <article className={styles.card} role="region" aria-labelledby="contact-form-heading">
                    <h2 id="contact-form-heading" className={styles.h2}>Send a message</h2>

                    <form
                        action="https://formspree.io/f/xyzpnbed"
                        method="POST"
                        className={styles.form}
                    >
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name"
                            name="name"
                            type="text"
                            required 
                            autoComplete="name"
                            autoCapitalize="words"
                        />

                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                        />

                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            rows={5}
                            required>
                        </textarea>

                        <button type="submit" className={styles.submit}>Send Message</button>
                    </form>
                </article>

                <article 
                    className={`${styles.card} ${styles.calCard}`}
                    role="region"
                    aria-labelledby="booking-heading"
                >
                    <h2
                        id="booking-heading"
                        className={styles.h2}>
                            Book a call
                    </h2>

                    <div 
                        className={`calendly-inline-widget ${styles.calEmbed}`}
                        data-url="https://calendly.com/dev-bellscript/30min" 
                        style={{ minWidth:320, height:700 }}
                        data-color="#00BFA6"
                        aria-label="Calendly booking widget"
                    />
                </article>
            </section>
        </main>
        </>
    );
}