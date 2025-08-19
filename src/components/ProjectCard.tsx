import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";
import type { Project } from "@/data/projects";

function Icon({ kind }: { kind?: Project["icon"] }) {
    if (kind === "cli") {
        return (
            <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" className={styles.iconFrame}/>
                <path d="M7 10l3 2-3 2" className={styles.iconAccent}/>
                <path d="M12 14h5" className={styles.iconLine}/>
            </svg>
        );
    }

    if (kind === "shop") {
        return (
            <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true" >
                { /* Outer Frame */ }
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" className={styles.iconFrame}/>
                { /* Awning Top Bar */ }
                <path d="M4 5 h16 v2.5 H4 z" className={styles.iconAccentThree} />
                { /* Awning Scallops */ }                  
                <path d="M4 7 q2 2 4 0 q2 2 4 0 q2 2 4 0 q2 2 4 0" className={styles.iconAccentThree} />
                { /* Door */ }  
                <rect x="10.5" y="12" width="3" height="6" rx="0.5" className={styles.iconLineThree} /> 
                { /* Window */ }  
                <rect x="6" y="12" width="3" height="3" rx="0.5" className={styles.iconLineThree} /> 
            </svg>
        );
    }

    return (
        <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true">
            <g transform="translate(0,-0.5)">
            {/* Umbrella Canopy */}
            <path d="M6 10
                    Q8 6, 12 6
                    Q16 6, 18 10" 
                className={styles.iconAccent}/>

            {/* Umbrella Scallops */}
            <path d="M6 11 q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0" 
                className={styles.iconAccent}/>
            {/* Umbrella Handle */}
            <path d="M12 11 v4 
                    a3 3 0 0 1 -3 3 
                    a2 2 0 0 0 2 -2" 
                className={styles.iconLine} />
            </g>
        </svg>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const { title, blurb, features, link, image, status, icon} = project;

    return (
        <article className={styles.projectCard}>
            {image ? (
                <div className={styles.projectThumbWrap}>
                    <a href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${title} image`}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width ?? 300}
                            height={image.height ?? 200}
                            className={styles.thumbnailImage}
                            priority={false}
                        />
                    </a>
                </div>
            ) : null}

            <div className={styles.projectDetails}>
                <div className={styles.projectHeader}>
                    <Icon kind={icon} />
                    <h3 className={styles.projectTitle}>{title}</h3>
                </div>

                <p className={styles.projectBlurb}>{blurb}</p>

                {features?.length ? (
                    <>
                        <h5>Key Features</h5>
                        <ul className={styles.features}> {features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                    </>
                ) : null}
                <div className={styles.ctaSlot}>
                    {status === "coming-soon" ? (
                        <span className={`${styles.badge} ${styles.ctaPill}`} aria-label="Coming Soon">
                            Coming Soon
                        </span>
                    ) : (
                        link && (
                            <a
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`${styles.projectLink} ${styles.ctaPill}`}
                                aria-label={link.ariaLabel || `Open ${title}`}
                            >
                                {link.label || "View Project"}
                            </a>
                        )
                    )}
                </div>
            </div>
        </article>
    );
}