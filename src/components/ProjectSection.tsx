import styles from "@/styles/ProjectSection.module.css"
import ProjectCard from "@/components/ProjectCard"
import type { Project } from "@/data/projects"

type Props = {
    id?: string;
    heading?: string;
    intro?: string;
    items: Project[];
};

export default function ProjectSection({
    id = "our-work",
    heading = "Our Work",
    intro,
    items,
}: Props) {
    return (
        <section id={id} className={styles.section}>
            <h2>{heading}</h2>
            {intro && <p className={styles.intro}>{intro}</p>}

            <div className={styles.stack}>
                {items.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    );
}