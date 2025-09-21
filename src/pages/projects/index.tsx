import Head from "next/head";
import styles from "@/styles/ProjectPage.module.css"
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
    const active = PROJECTS.filter(p => p.active !== false);

    const title = "Projects — BellScript Studios";
    const desc = 
        "Explore projects from BellScript Studios. Real examples of websites, apps, and software solutions crafted for individuals and businesses.";

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="canonical" href="https://bellscript.studio/projects" />
                <meta property="og:title" content="Explore projects from BellScript Studios. Real examples of websites, apps, and software solutions crafted for individuals and businesses." />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="website" />
            </Head>  

            <main className={styles.page} role="main" aria-labelledby="projects-h1">
                <header className={styles.hero}>
                    <h1 id="projects-h1">Our Projects</h1>
                    <p className={styles.lead}>Selected builds and brand work from our studio.</p>
                </header>

                <div className={styles.stack}>
                    {active.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </main>
        </>
    )
}