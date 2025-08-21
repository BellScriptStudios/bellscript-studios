import styles from "@/styles/ProjectPage.module.css"

import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
    const active = PROJECTS.filter(p => p.active !== false);

    return (
        <main className={styles.page}>
            <ProjectSection
            id="projects"
            heading="Projects"
            intro="Selected builds and brand work from our studio."
            items={active}
            />
        </main>
    )
}