import styles from "@/styles/ServicesSection.module.css";
import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/data/services"
import Link from "next/link"

export default function ServicesSection({
    id= "services",
    heading= "Services",
    intro= "A quick overview of what we offer. See the full list on the services page.",
    items = [],
}: {
    id?: string;
    heading?: string;
    intro?: string;
    items?: Service[];
}) {
    return (
         <section id={id} className={styles.section}>
            <h2>{heading}</h2>
            {intro && <p className={styles.intro}>{intro}</p>}

            <div className={styles.grid}>
                {items
                    .filter(s => s.active !== false)
                    .map((s) => <ServiceCard key={s.id} service={s} />)
                }
            </div>
            <div className={styles.footerCta}>
                <Link href="/services" className={styles.viewAll}>
                    View all Services
                </Link>
            </div>
         </section>
    );
}