import styles from "@/styles/ProjectSection.module.css"
import ProjectCard from "@/components/ProjectCard"
import type { Project } from "@/data/projects"
import Link from "next/link";

type Props = {
    id?: string;
    heading?: string;
    intro?: string;
    items: Project[];
    showViewAll?: boolean;
    viewAllHref?: string;
    viewAllLabel?: string;
};

export default function ProjectSection({
    id = "our-work",
    heading = "Our Work",
    intro,
    items,
    showViewAll = false,
    viewAllHref = "/projects",
    viewAllLabel = "View all projects",
}: Props) {
    return (
        <section id={id} className={styles.section}>
            <h2>{heading}</h2>
            {intro && <p className={styles.intro}>{intro}</p>}

            <div className={styles.stack}>
                {items.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>

            {showViewAll && (
                <div className={styles.footerCta}>
                    <Link href={viewAllHref} className={styles.viewAll}>
                        {viewAllLabel}
                    </Link>
                </div>
            )}
        </section>
    );
}