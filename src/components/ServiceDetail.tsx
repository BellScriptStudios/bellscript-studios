import Link from "next/link";
import styles from "@/styles/ServiceDetail.module.css";
import { Service } from "@/data/services";

export default function ServiceDetail({ service }: { service: Service }) {
    const {
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

    const hasIncludes = Array.isArray(includes) && includes.length > 0;
    const hasBullets = Array.isArray(bullets) && bullets.length > 0;
    const hasOutcomeList = Array.isArray(outcome) && outcome.length > 0;
    const hasOutcomeText = typeof outcome === "string" && outcome.trim().length > 0;

    return (
        <div 
            className={styles.detailBody}
            aria-labelledby="service-title"
        >
            <header className={styles.header}>
                <h1 className={styles.h1}>{title}</h1>
                {priceFrom && (
                    <p className={styles.meta}>
                        <strong>Starting at:</strong> {priceFrom}
                    </p>
                )}

                {plans?.length ? (
                    <section className={styles.section}>
                        <h2 className={styles.h2}>Plans</h2>
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
            <nav className={styles.backNav}>
                <Link href="/services" aria-label="Return to all services" className={styles.backLink}>
                    ← Back to Services
                </Link>
            </nav>
        </div>
    );
}
