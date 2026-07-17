import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Toaster } from "sonner";
import SITE_CONFIG from "./SITE_CONFIG";
import { layoutSchema } from "@/schema/layoutSchema";
import { GoogleAnalytics } from "@next/third-parties/google";
import FloatingButtons from "./components/FixedButtons";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },

  description: SITE_CONFIG.description,

  keywords: SITE_CONFIG.keywords,

  applicationName: SITE_CONFIG.shortName,

  authors: [
    {
      name: SITE_CONFIG.name,
    },
  ],

  creator: SITE_CONFIG.name,

  publisher: SITE_CONFIG.name,

  category: "Healthcare",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: SITE_CONFIG.locale,

    url: SITE_CONFIG.url,

    siteName: SITE_CONFIG.name,

    title: SITE_CONFIG.name,

    description: SITE_CONFIG.description,

    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_CONFIG.name,

    description: SITE_CONFIG.description,

    images: [SITE_CONFIG.ogImage],
  },

  icons: {
    icon: SITE_CONFIG.favicon,

    shortcut: SITE_CONFIG.favicon,

    apple: SITE_CONFIG.favicon,
  },

  verification: {
    google: SITE_CONFIG.verification.google,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <FloatingButtons></FloatingButtons>
        {children}
        <Footer></Footer>
         <Toaster
    position="bottom-right"
    richColors
    closeButton
    expand={false}
    visibleToasts={4}
    duration={4000}
    toastOptions={{
      className:
        "!rounded-2xl !border !border-slate-200 !bg-white !text-slate-900 !shadow-2xl",
      descriptionClassName: "!text-slate-500",
    }}
  />
  {layoutSchema.map((schema, index) => (
  <script
    key={index}
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
))}
<GoogleAnalytics gaId="G-0FM959VHJX" />
  </body>
    </html>
  );
}
