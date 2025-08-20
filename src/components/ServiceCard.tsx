import Link from "next/link";
import styles from "@/styles/ServiceCard.module.css";
import type { Service } from "@/data/services";

function Icon({ kind }: { kind?: Service["icon"] }) {
    if (kind === "backend") {
        return (
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="14" rx="2" className={styles.iconFrame} />
                <path d="M7 8h10M7 12h10M7 16h6" className={styles.iconLine} />
            </svg>
        );
    }
    if (kind === "seo") {
        return (
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6" className={styles.iconFrame} />
                <path d="M15.5 15.5 L20 20" className={styles.iconLine} />
            </svg>
        );
    }
    if (kind === "cart") {
        return (
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 4h2l2 12h11l2-8H6" className={styles.iconLine} />
                <circle cx="9" cy="18" r="1.25" className={styles.iconFrame} />
                <circle cx="17" cy="18" r="1.25" className={styles.iconFrame} />
            </svg>
        );
    }
    if (kind === "event") {
        return (
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" className={styles.iconFrame} />
                <path d="M3 9h18M8 3v4M16 3v4" className={styles.iconLine} />
            </svg>
        );
    }
    if (kind === "tool") {
        return (
            <svg 
                className={styles.icon}
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                   d="M22 6.1a7 7 0 0 1-9.9 7.9l-6.3 6.3a2 2 0 0 1-2.8-2.8l6.3-6.3a7 7 0 0 1 7.9-9.9l-3 3a2 2 0 0 0 2.8 2.8l3-3z"
                className={styles.iconLine}
                />
            </svg>
        );
    }
    if (kind === "resume") {
        return (
            <svg 
                className={styles.icon}
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" className={styles.iconFrame} />
                <circle cx="12" cy="10" r="2" className={styles.iconLine} />
                <path d="M8 16h8M8 19h5" className={styles.iconLine} /> 
            </svg>
        );
    }
    // Default web
    return (
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="12" rx="2" className={styles.iconFrame} />
            <path d="M3 9h18" className={styles.iconLine} />
        </svg>
    );
}

export default function ServiceCard({ service }: {service: Service }) {
    const { id, title, blurb, bullets, icon } = service;
    const href = `/services/${id}`;

    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <Icon kind={icon} />
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.blurb}>{blurb}</p>

            {bullets?.length ? (
                <ul className={styles.bullets}>
                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
            ) : null}

            <div className={styles.ctaRow}>
                <Link
                    href={href} 
                    className={styles.link}
                    aria-label={`Learn more about ${service.title}`}>
                        Learn More →
                </Link>
            </div>
        </article>
    );
}