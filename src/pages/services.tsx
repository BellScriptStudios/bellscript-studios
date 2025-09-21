import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/ServicesPage.module.css"
import ServiceCard from "@/components/ServiceCard";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function ServicesPage() {
    const title = "Services — BellScript Studios";
    const desc = "Explore all services from BellScript Studios — signature packages, celebration sites, fixes & care, and integrations.";

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="canonical" href="https://bellscript.studio/services" />
                <meta property="og:title" content="Explore BellScript Studios&apos; web and software development services, from personal websites to custom business solutions." />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="website" />
            </Head>

            <main className={styles.main}>
                <header className={styles.pageHeader}>
                    <h1>Services</h1>
                    <p className={styles.lead}>
                        From quick launches to ongoing care, here&apos;s everything we offer. Click any card to learn more.
                    </p>
                </header>

                {SERVICE_CATEGORIES.map((cat) => {
                    const visibleItems = cat.items.filter((svc) => svc.active !== false);

                    if (visibleItems.length === 0) return null;
                    return (
                        <section
                            key={cat.id}
                            id={cat.id}
                            className={styles.category}
                            aria-labelledby={`${cat.id}-title`}
                        >
                            <h2 id={`${cat.id}-title`} className={styles.catTitle}>
                                {cat.title}
                            </h2>

                            <div className={styles.grid}>
                                {visibleItems.map((svc) => (
                                    <div key={svc.id} id={svc.id} className={styles.anchorWrap}>
                                        <ServiceCard service={svc} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                })}

                <div className={styles.bottomCta}>
                    <Link
                        href="/contact"
                        className={styles.primaryCta}
                        aria-label="Contact BellScript Studios"
                    >
                        Start a project →
                    </Link>
                </div>
            </main>
        </>
    )
}