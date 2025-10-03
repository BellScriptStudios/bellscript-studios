export type Project = {
    id: string;
    title: string;
    blurb: string;
    features?: string[];
    link?: { 
        href: string;
        label: string;
        ariaLabel?: string
    };
    image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number
    };
    status?: "live" | "coming-soon";
    icon?: "umbrella" | "cli" | "shop";
    featured?: boolean;
    active?: boolean;
}

export const PROJECTS: Project[] = [
    {
        id: "tmb",
        title: "The Morning Bell Co.",
        blurb:
            "Our own parent brand website built to unify and showcase all ventures under our company umbrella.",
        features: [
            "Corporate-polished UI consistent with sub-brand styles",
            "Responsive, mobile-first design for optimal accessibility",
            "Portfolio showcase linking directly to each brand site",
            "Optimized for speed, SEO, and cross-browser compatibility",
        ],
        link: { href: "https://www.themorningbell.co", 
                label: "Explore the Project →" },
        image: { 
            src: "/images/tmb-logo.png",
            alt: "The Morning Bell Co. thumbnail",
            width: 300, height: 200 },
        status: "live",
        icon: "umbrella",
        featured: true,
        active: true,
    },

    {
        id: "smartspend",
        title: "SmartSpend — CLI Expense Tracker",
        blurb:
            "SmartSpend is a command-line interface (CLI) application designed to make expense tracking simple and efficient.",
        
        features: [
            "Multi-user account support for personalized data tracking",
            "Full CRUD operations to add, edit, and delete expense entries",
            "Budget-setting tools with category-based organization",
            "CSV export for seamless data backup and analysis",
            "Clean, intuitive terminal interface for fast navigation",
        ],

        link: { 
            href: "https://github.com/MTinsley00/CLI_Expense_Tracker.git",
            label: "Explore the Project →",
            ariaLabel: "View SmartSpend CLI Expense Tracker project on GitHub",
        },
        image: { src: "/images/smartspend-thumb.png", alt: "SmartSpend CLI thumbnail", width: 300, height: 200 },
        status: "live",
        icon: "cli",
        featured: true,
        active: true,
    },

    {
        id: "candle-phase",
        title: "Candle Phase",
        blurb:
            "Something Beautiful is on the Horizon — We’re pouring, curing, and crafting the perfect collection just for you. From healing to hustle, love to glow-up — your phase is about to be lit.",
        features: [
            "Polished web brand",
            "Modern storefront base",
            "Mobile-first experience",
        ],
        link: { href: "https://www.candlephase.com", label: "Coming Soon" },
        image: { src: "/images/candle-phase-bs-thumbnail.png", alt: "Candle Phase thumbnail", width: 300, height: 200 },
        status: "coming-soon",
        icon: "shop",
        featured: true,
        active: true,
    },
];

export const FEATURED_PROJECTS: Project[] = PROJECTS
    .filter((p) => p.featured && p.active !== false);