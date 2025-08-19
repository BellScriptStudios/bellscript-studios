import type { Metadata, Viewport } from "next";
import "./styles/globals.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "BellScript Studios — Full-Stack Web Development",
    description:
        "BellScript Studios builds modern, accessible, and fast web applications. Based in Michigan, we specialize in full-stack development and custom digital solutions",
    openGraph: {
        type: "website",
        url: "https://bellscript.studio/",
        title: "BellScript Studios",
        description: "Modern, accessible, and fast full-stack web development studio based in Michigan.",
        images: [{ url: "https://bellscript.studio/images/og-image.png" }],
    },
    other: {
        robots: "index, follow",
    },
    icons: {
        icon: [
            { url: "/favicon.ico"},
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
        ],
        apple: [{ url: "apple-touch-icon.png" }],
        other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00BFA6" }],
    },
    manifest: "/site.webmanifest",

    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "BellScript Studios"
    },
    alternates: { canonical: "https://bellscript.studio/" },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#ffffff",    
};

export default function RootLayout({ children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}