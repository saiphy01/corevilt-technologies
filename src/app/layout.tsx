import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SeoSchema } from "@/components/seo-schema";
import { COMPANY_INFO } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://corevilt.com"),
  title: {
    default: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    "Premier turnkey infrastructure and technology contractor. Specializing in HT/LT substations, commercial solar EPC, enterprise software, AI workflow automation, ELV life safety, and Tier-II/III server rooms.",
  keywords: [
    "Corevilt Technologies",
    "Turnkey Infrastructure Contractor",
    "Commercial Solar EPC",
    "HT LT Substation Contractor",
    "Enterprise Software ERP CRM",
    "AI Workflow Automation RPA",
    "ELV CCTV Life Safety Systems",
    "Server Room Precision Cooling",
    "Delhi NCR Infrastructure",
    "Bareilly Technology Contractor",
    "Government GeM Contractor",
  ],
  authors: [{ name: COMPANY_INFO.name, url: "https://corevilt.com" }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://corevilt.com",
    title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    description:
      "Bridging physical engineering and digital intelligence. Single-partner turnkey contractor for multi-crore infrastructure, power, and enterprise technology.",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 250,
        alt: `${COMPANY_INFO.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    description:
      "Premier turnkey infrastructure and technology contractor for physical engineering & digital intelligence.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <SeoSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#334155] antialiased">
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
