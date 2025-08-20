"use client"

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const btnRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Close pop-up on outside click
    useEffect(() => {
        if (!menuOpen) return;
        const onDown = (e: MouseEvent) => {
            const t = e.target as Node;
            if (!menuRef.current || !btnRef.current) return;
            if (menuRef.current.contains(t) || btnRef.current.contains(t)) return;
            setMenuOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [menuOpen]);

    // --- scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const setThemeColorMeta = () => {
        let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
        if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        document.head.appendChild(meta);
        }
        const headerBg = getComputedStyle(document.documentElement).getPropertyValue('--header-bg').trim();
        meta.setAttribute('content', headerBg || "#ffffff");
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const prefersDark = mql.matches;
        const dark = savedTheme === "dark" || (!savedTheme && prefersDark);

        document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
        setIsDarkMode(dark)
        setThemeColorMeta();

        const onChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
            const d = e.matches;
            document.documentElement.setAttribute("data-theme", d ? "dark" : "light");
            setIsDarkMode(d);
            setThemeColorMeta();
        }
        };
        mql.addEventListener?.("change", onChange)
        return () => mql.removeEventListener?.("change", onChange);
    }, []);

    const toggleTheme = () => {
        const nextTheme = !isDarkMode;
        setIsDarkMode(nextTheme);
        const themeStr = nextTheme ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", themeStr);
        localStorage.setItem("theme", themeStr);
        setThemeColorMeta();
    };

    const jumpTo = (id: string) => {
        if (pathname === "/") {
            document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/${id}`);
        }
    };
    return (
            <header className={styles.stickyheader} role="banner" aria-label="Site header">
                <div className={`${styles.stickyHeaderInner} ${scrolled ? styles.scrolledInner : ""}`}>
                    <div 
                    className={styles.headerBrand}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    onKeyDown={(e) =>  {
                        if (e.key == "Enter" || e.key === " ") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    >
                    <Image
                        src="/images/bs-logo.png"
                        alt="BellScript Studios logo"
                        width={40}
                        height={40}
                        className={styles.logo}
                        priority={false}
                    />
                    <span className={styles.brandName}> BellScript Studios</span>
                    </div>

                    <nav className={styles.nav} aria-label="Primary navigation">
                        <button className={styles.link} onClick={() => jumpTo("#about")}>About</button>
                        <button className={styles.link} onClick={() => jumpTo("#our-work")}>Our Work</button>
                        <button className={styles.link} onClick={() => { window.location.href = "/services"}}>Services</button>
                    </nav>

                    {menuOpen && (
                        <div 
                        className={styles.mobileMenu}
                        id="mobile-menu"
                        ref={menuRef}
                        role="menu"
                        aria-label="Mobile navigation"
                        >
                            <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
                            <Link href="/#our-work" onClick={() => setMenuOpen(false)}>Our Work</Link>
                            <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
                            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                        </div>
                    )}
                    <div className={styles.actions}>
                        <button
                            ref={btnRef}
                            className={styles.hamburger}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Toggle Menu"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>

                        <button
                        type="button"
                        aria-label="Contact Us Button"
                        className={`${styles.cta} ${scrolled ? styles.scrolled: ""}`}
                        onClick={() => { 
                            window.location.href = "/contact"}}
                        >
                        Work with us
                        </button>
                        {/* Floating theme toggle button */}
                        <button
                            type="button"
                            aria-label="Toggle Theme"
                            aria-pressed={isDarkMode}
                            className={styles.themeToggle}
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? "☀️" : "🌙"}
                        </button>
                    </div>
                </div>
             </header>
    )
}