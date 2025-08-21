export type PlanTier = {
    id: string;
    name: string;
    price: string;
    perks: string[];
    featured?: boolean;
};

export type Service = {
    id: string;
    title: string;
    blurb: string;
    long?: string;
    bullets?: string[];
    includes?: string[];
    outcome?: string | string[];
    timeline?: string;
    priceFrom?: string;
    href?: string;
    icon?: "web" | "backend"| "seo" | "cart" | "event" | "tool" | "resume";
    featured?: boolean;
    active?: boolean;
    plans?: PlanTier[];
};

export type ServiceCategory = {
    id: string;
    title: string;
    items: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        id: "signature-packages",
        title: "Signature Packages (Core Offerings)",
        items: [
            {
                id:"website-in-a-week",
                title: "Website-in-a-Week",
                blurb: "A modern 1–3 page website launched in 5 business days.",
                long: "A modern 1–3 page website, styled to your brand, launched in just 5 business days. Perfect for getting online quickly with a polished presence.",
                bullets: ["Design + build", "Copy polish", "Launch support"],
                includes: [
                    "Brand starter (colors/typography)",
                    "Contact form",
                    "Copy polish",
                    "Responsive design",
                    "Analytics setup",
                    "Deployment on Render"
                ],
                outcome: [
                    "Get online in just 5 days",
                    "Launch with confidence and polish",
                    "Attract clients with a modern site"
                ],
                timeline: "5 business days",
                priceFrom: "Starting at $2,000",
                href: "/services#website-in-a-week",
                icon: "web",
                featured: true,
                active: true,
            },
            {
                id:"local-business-bundle",
                title: "Local Business Bundle",
                blurb: "Everything a local business needs to be found and trusted online",
                long: "A professional 4-page website designed to act as your digital front door, with booking/contact features to bring in new customers.",
                bullets: ["Google Business Profile", "Local SEO basics", "Contact/Booking"],
                includes: [
                    "Pages: Home, Services, About, Contact",
                    "Booking/Contact integration",
                    "Google Business Profile setup help",
                    "Accessibility & performance pass",
                ],
                outcome: [
                    "Act as your business’s digital front door",
                    "Boost visibility with local SEO",
                    "Turn visitors into real bookings"
                ],
                timeline: "2 weeks",
                priceFrom: "Starting at $3,500",
                href: "/services#local-business-bundle",
                icon: "seo",
                featured: true,
                active: true,
            },
            {
                id:"comment-app-mvp",
                title: "Comment App MVP",
                blurb: " A lean MVP for a comment/discussion experience.",
                long: "A lightweight but functional app with accounts, comments, likes, and moderation—everything you need for a Minimum Viable Product",
                bullets: ["Auth & roles", "Posts/comments/likes", "Admin portal"],
                includes: [
                    "User authentication & roles",
                    "Posts, comments, likes",
                    "Admin portal",
                    "Basic analytics dashboard",
                    "Responsive design",
                ],
                outcome: [
                    "Validate your community idea fast",
                    "Gain early adopters with a real product",
                    "Collect feedback before scaling"
                ],
                timeline: "4 weeks",
                priceFrom: "Starting at $6.000",
                href: "/services#comment-app-mvp",
                icon: "backend",
                featured: false,
                active: true,
            },
            {
                id:"ecommerce-lite",
                title: "E-commerce Lite",
                blurb: "Launch a simple storefront with the essentials.",
                long: "Sell products quickly and securely with a streamlined online store powered by Stripe.",
                bullets: ["Product pages", "Cart/Checkout", "Stripe checkout"],
                includes: [
                    "Product pages",
                    "Shopping cart",
                    "Stripe checkout",
                    "Order dashboard",
                    "Tax/shipping integration",
                    "SEO‑friendly responsive design",
                ],
                outcome: [
                    "Start selling securely online",
                    "Deliver a smooth checkout experience",
                    "Grow with an SEO-friendly storefront"
                ],
                timeline: "2-4 weeks",
                priceFrom: "Starting at $4,000",
                href: "/services#ecommerce-lite",
                icon: "cart",
                featured: true,
                active: true,
            },
        ],
    },
    {
        id: "celebration-sites",
        title: "Celebration Sites (Specialty Niche)",
        items: [
            {
                id:"wedding-website",
                title: "Wedding Website",
                blurb: "Your story, schedule, and RSVP in one beautiful place.",
                long: "Share your love story, manage RSVPs, and keep guests informed with an elegant, mobile‑friendly wedding site.",
                bullets: ["RSVP form", "Schedule & venue", "Gallery"],
                includes: [
                    "1–3 pages (Home, Story, RSVP/Details)",
                    "RSVP form",
                    "Photo gallery",
                    "Registry links",
                    "Venue details + map",
                    "QR code for invites",
                ],
                outcome: "A beautiful, stress-free way to keep wedding guests informed and excited.",
                timeline: "1-2 weeks",
                priceFrom: "Starting at $1,500",
                href: "/services#wedding-website",
                icon: "event",
                featured: true,
                active: true,
            },
            {
                id:"event-website",
                title: "Event Website",
                blurb: "Promote and manage any event with clarity.",
                long: "A central hub for your event with schedules, registration, and key info.",
                bullets: ["Agenda", "Tickets/RSVP", "Maps & Logistics"],
                includes: [
                    "1–3 pages (Overview, Schedule, RSVP/Registration)",
                    "Speaker lineup or honoree section",
                    "RSVP/ticketing integration",
                    "Maps",
                    "Photo/video gallery",
                ],
                outcome: "Give your event a central hub that drives registrations and builds anticipation.",
                timeline: "1-2 weeks",
                priceFrom: "Starting at $1,800",
                href: "/services#event-website",
                icon: "event",
                featured: false,
                active: true,
            },
            {
                id:"birthday-website",
                title: "Birthday Website",
                blurb: "A fun, sharable page with details and RSVPs.",
                long: "A personalized event site for details, RSVPs, and memories.",
                bullets: ["Invite & RSVP", "Photos", "Wishlist/registry (optional)"],
                includes: [
                    "1–2 pages (Party Details + RSVP)",
                    "RSVP form",
                    "Photo gallery/slideshow",
                    "Venue details",
                    "Optional wishlist or registry links",
                    "Themed design",    
                ],
                outcome: "Make your party unforgettable with RSVPs, details, and memories in one place.",
                timeline: "5 business days",
                priceFrom: "Starting at $1,200",
                href: "/services#birthday-website",
                icon: "event",
                featured: false,
                active: true,
            },
        ],
    },
    {
        id: "professional-personal-sites",
        title: "Professional & Personal Sites",
        items: [
            {
                id:"resume-website",
                title: "Resume Website",
                blurb: "A clean personal site that stands out more than a PDF.",
                long: "A clean personal site that stands out more than a PDF resume. Showcase your skills, projects, and contact info in a modern way.",
                bullets: ["About/Portfolio/Contact", "Responsive", "SSL/domain"],
                includes: [
                    "1–2 pages (About, Portfolio, Contact)",
                    "LinkedIn/social links",
                    "Responsive design",
                    "Contact form",
                    "Domain + SSL setup",
                ],
                outcome: "Stand out with a personal site that impresses more than a PDF resume.",
                timeline: "5 business days",
                priceFrom: "Starting at $900",
                href: "/services#resume-website",
                icon: "resume",
                featured: true,
                active: true,
            },
        ],
    },
    {
        id: "fix-and-care",
        title: "Fix & Care (Support & Optimization)",
        items: [
            {
                id:"fix-and-refresh-package",
                title: "Fix & Refresh Package",
                blurb: "Audit + fixes to breathe new life into your site.",
                long: "A full audit and set of fixes to breathe new life into your existing website without starting over.",
                bullets: [" Fixes", "Audit", "Performance/SSL"],
                includes: [
                    "Site audit",
                    "Broken link/layout fixes",
                    "Responsive cleanup",
                    "Performance optimization",
                    "SSL/security updates",
                    "2 rounds of revisions",
                ],
                outcome: [
                    "Fix bugs and broken layouts",
                    "Polish UI/UX for modern standards",
                    "Boost site performance and security"
                ],
                timeline: "3-7 business days",
                priceFrom: "Starting at $900",
                href: "/services#fix-and-refresh-package",
                icon: "tool",
                featured: true,
                active: true,
            },
            {
                id:"optimization-pass",
                title: "Optimization Pass",
                blurb: "One‑time tune‑up for speed and accessibility.",
                long: "A one‑time tune‑up to boost performance scores and improve accessibility.",
                bullets: ["Performance audit", "Accessibility review", "90+ Lighthouse"],
                includes: [
                    "Performance audit",
                    "Accessibility review",
                    "Fixes to reach 90+ Lighthouse",
                    "Mobile optimization",
                ],
                outcome: [
                    "Reach 90+ Lighthouse performance scores",
                    "Improve accessibility and mobile speed",
                    "Give users a smoother browsing experience"
                ],
                timeline: "3-7 business days",
                priceFrom: "Flat fee of $900",
                href: "/services#optimization-pass",
                icon: "seo",
                featured: false,
                active: true,
            },
            {
                id:"site-care-plans",
                title: "Site Care Plans",
                blurb: "Monthly maintenance, updates, and small edits.",
                long: "Monthly maintenance, updates, and small edits—so your site stays secure and up to date.",
                outcome: [
                    "Peace of mind with ongoing updates",
                    "Proactive security and backups",
                    "Priority support when you need it"
                ],
                plans: [
                    {
                        id: "basic",
                        name: "Basic",
                        price: "$149/mo",
                        perks: [
                            "Backups",
                            "Uptime checks",
                            "Security updates",
                            "1 hour changes",
                        ],
                        featured: true,
                    },
                    {
                        id: "growth",
                        name: "Growth",
                        price: "$349/mo",
                        perks: [
                            "Everything in Basic",
                            "3 hours changes",
                            "Quarterly performance/SEO",
                        ],
                        featured: true,
                    },
                    {
                        id: "pro",
                        name: "Pro",
                        price: "$699/mo",
                        perks: [
                            "Everything in Growth",
                            "8 hours changes",
                            "Priority support",
                            "Monthly UX review",
                        ],
                        featured: true,
                    },
                ],
                href: "/services#site-care-plans",
                icon: "tool",
                featured: false,
                active: true,
            },
        ],
    },
    {
        id: "design-and-integrations",
        title: "Design and Integrations",
        items: [
            {
                id: "brand-starter-kit",
                title: "Brand Starter Kit",
                blurb: "A lightweight visual identity to guide design.",
                long: "A lightweight branding system to guide your website or app design.",
                bullets: ["Logo/marks", "Colors & type", "UI screens"],
                includes: [
                    "Moodboard",
                    "Color palette",
                    "Typography",
                    "Component starter library",
                    "3–5 high‑fidelity UI screens",
                ],
                outcome: "A clear, lightweight visual identity to guide your website or app design.",
                timeline: "1-2 weeks",
                priceFrom: "Starting at $1,200",
                href: "/services/brand-starter-kit",
                icon: "web",
                featured: false,
                active: true,
            },
            {
                id:"integrations-and-automation",
                title: "Integrations & Automation",
                blurb: "Connect tools and automate your workflow..",
                long: "Streamline processes with integrations between your apps and services.",
                bullets: ["Stripe/Notion/Airtable", "Dashboards", "Zapier/Make"],
                includes: [
                    "Stripe, Notion, Airtable, Google Sheets",
                    "Zapier/Make",
                    "Webhooks",
                    "Dashboards",
                    "Custom email notifications",
                ],
                outcome: [
                    "Save time with automated workflows",
                    "Connect your tools seamlessly",
                    "Track everything with custom dashboards"
                ],
                timeline: "2-10 days",
                priceFrom: "Starting at $660 per integration",
                href: "/services#integrations-and-automation",
                icon: "backend",
                featured: false,
                active: true,
            },
        ],
    },
];

export const FEATURED_SERVICES: Service[] = SERVICE_CATEGORIES
    .flatMap((c) => c.items)
    .filter((s) => s.featured && s.active !== false);