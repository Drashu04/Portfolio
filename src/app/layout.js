import { Berkshire_Swash, Varela_Round } from "next/font/google"
import Script from "next/script"
import Header from "@/components/Header"

// Configure fonts properly using next/font
const berkshireSwash = Berkshire_Swash({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-berkshire-swash",
})

const varelaRound = Varela_Round({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-varela-round",
})

// Note: Winky Sans is not available in Google Fonts through next/font
// We'll need to include it via CSS

export const metadata = {
    title: "Drashti kachhadiya Portfolio",
    description: "Full-Stack Developer specializing in Next.js and Node.js",
    icons: {
        icon: [
            { url: "./assets/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "./assets/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "./assets/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "./assets/images/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "./assets/images/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            { rel: "android-icon", url: "./assets/images/favicon/android-icon-36x36.png", sizes: "36x36", type: "image/png" },
            { rel: "android-icon", url: "./assets/images/favicon/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
            { rel: "android-icon", url: "./assets/images/favicon/android-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { rel: "android-icon", url: "./assets/images/favicon/android-icon-96x96.png", sizes: "96x96", type: "image/png" },
            {
                rel: "android-icon",
                url: "./assets/images/favicon/android-icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
            },
            {
                rel: "android-icon",
                url: "./assets/images/favicon/android-icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            { rel: "manifest", url: "./assets/images/favicon/manifest.json" },
        ],
    },
    themeColor: "#ffffff",
    manifest: "./assets/images/favicon/manifest.json",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${berkshireSwash.variable} ${varelaRound.variable}`}>
            <head>
                {/* Preconnect to Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Include Winky Sans font which is not available in next/font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                {/* Load Bootstrap CSS */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

                {/* Load Font Awesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

                {/* Load custom CSS */}
                <link rel="stylesheet" href="./assets/css/header.css" />
                <link rel="stylesheet" href="./assets/css/cust.css" />

                <Header />
                {children}
                {/* <Footer /> */}

                {/* Load Bootstrap JS properly with next/script */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
