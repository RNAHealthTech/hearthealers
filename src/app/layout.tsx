import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Merriweather } from 'next/font/google'

const raleway = Raleway({
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap'
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hearthealers.in'),
  title: {
    default: "Best Heart Doctors Near You | HeartHealers",
    template: "%s | HeartHealers"
  },
  description: "Find the best heart doctors near you at HeartHealers. Expert cardiac care for congenital and acquired heart diseases in Delhi NCR. Book Appointment or Call us now.",
  keywords: ["heart doctor", "cardiologist", "cardiac surgeon", "Delhi NCR", "heart surgery", "pediatric cardiologist"],
  authors: [{ name: "HeartHealers" }],
  creator: "RNA HealthTech",
  publisher: "HeartHealers",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Heart Doctors Near You | HeartHealers",
    description: "Expert cardiac care for congenital and acquired heart diseases. Leading specialists in Delhi NCR.",
    url: 'https://hearthealers.in',
    siteName: 'HeartHealers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Heart Doctors Near You | HeartHealers",
    description: "Expert cardiac care for congenital and acquired heart diseases. Leading specialists in Delhi NCR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${merriweather.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
