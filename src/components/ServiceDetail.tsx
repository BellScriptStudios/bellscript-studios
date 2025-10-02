import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/ServiceDetail.module.css";
import { Service } from "@/data/services";

export default function ServiceDetail({ service }: { service: Service }) {
    
    const {
        id,
        title,
        priceFrom,
        timeline,
        long,
        blurb,
        includes,
        bullets,
        outcome,
        plans,
     } = service;

    const SITE_URL = "https://bellscript.studio";
    const pageUrl = `${SITE_URL}/services/${id}`;
    const pageTitle = `${title} — BellScript Studios`;

    const rawDesc = (long || blurb || "").replace(/\s+/g, " ").trim();
    const pageDesc = rawDesc.length > 155 ? `${rawDesc.slice(0, 152)}...` : rawDesc || "Service by BellScript Studios";

    const hasIncludes = Array.isArray(includes) && includes.length > 0;
    const hasBullets = Array.isArray(bullets) && bullets.length > 0;
    const hasOutcomeList = Array.isArray(outcome) && outcome.length > 0;
    const hasOutcomeText = typeof outcome === "string" && outcome.trim().length > 0;

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        description: pageDesc,
        brand: "BellScript Studios",
        provider: { "@type": "Organization", name: "BellScript Studios", url: SITE_URL },
        url: pageUrl,
        areaServed: "US",
        offers: priceFrom
            ? {
                "@type": "Offer",
                priceSpecification: {
                    priceCurrency: "USD",
                    price: priceFrom.replace(/[^0-9.]/g, ""),
                },
                url: pageUrl,
            }
        : undefined,
    }

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDesc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="BellScript Studios" />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
                />
            </Head>
            <main className={styles.main} role="main" aria-labelledby="service-title">
                <div 
                    className={styles.detailBody}
                    aria-labelledby="service-title"
                >
                    <header className={styles.header}>
                        <h1 id="service-title">{title}</h1>
                        {priceFrom && (
                            <p className={styles.meta}>
                                <strong>Starting at:</strong> {priceFrom}
                            </p>
                        )}

                        {plans?.length ? (
                            <section className={styles.section} aria-labelledby="plans-heading">
                                <div className={styles.plans}>
                                    {plans.map((plan) => (
                                        <div
                                        key={plan.id}
                                        className={`${styles.plans} ${
                                            plan.featured ? styles.featured : ""
                                        }`}
                                        >
                                            <h3>{plan.name}</h3>
                                            <p className={styles.price}>{plan.price}</p>
                                            <ul className={styles.perks}>
                                                {plan.perks.map((perk, i) => (
                                                    <li key={i}>{perk}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null }

                        {timeline && (
                            <p className={styles.meta}>
                                <strong>Timeline:</strong> {timeline}
                            </p>
                        )}

                        {(long || blurb) && <p className={styles.lead}>{long ?? blurb}</p>}
                    </header>

                    <section className={styles.columns}>
                        {hasIncludes && (
                            <article 
                                className={styles.card}
                                role="region"
                                aria-labelledby="includes-heading"
                            >
                                <h2 className={styles.h2}>What&apos;s included</h2>
                                <ul className={styles.list}>
                                    {includes!.map((x,i)=> (
                                        <li key={i}>{x}</li>
                                    ))}
                                </ul>
                            </article>
                        )}

                        {hasOutcomeList && (
                            <article 
                                className={styles.card}
                                role="region"
                                aria-labelledby="outcomes-heading"
                            >
                                <h2 className={styles.h2}>Outcomes</h2>
                                <ul className={styles.list}>
                                    {((outcome as string[])!).map((x, i) => (
                                        <li key={i}>{x}</li>
                                    ))}
                                </ul>
                            </article>
                        )}

                        {hasOutcomeText && (
                            <article 
                                className={styles.card}
                                role="region"
                                aria-labelledby="outcome-heading"    
                            >
                                <h2 className={styles.h2}>Outcome</h2>
                                <p className={styles.outcomeText}>{outcome as string}</p>
                            </article>
                        )}

                        {hasBullets && (
                            <article 
                                className={styles.card}
                                role="region"
                                aria-labelledby="highlights-heading"
                            >
                                <h2 className={styles.h2}>Highlights</h2>
                                <ul className={styles.list}>
                                    {bullets!.map((x,i) => (
                                        <li key={i}>{x}</li>
                                    ))}
                                </ul>
                            </article>
                        )}
                    </section>
                    <div className={styles.bottomCta}>
                        <Link
                            href="/contact"
                            className={styles.primaryCta}
                            aria-label="Contact BellScript Studios"
                        >
                            Start a project →
                        </Link>
                    </div>
                    <nav className={styles.backNav}>
                        <Link href="/services" aria-label="Return to all services" className={styles.backLink}>
                            ← Back to Services
                        </Link>
                    </nav>
                </div>
            </main>
        </>
    );
}
