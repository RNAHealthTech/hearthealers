import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Merriweather } from 'next/font/google'

const raleway = Raleway({
  subsets: ["latin"],
  weight: ['400', '700']
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather'
});
 
export const metadata: Metadata = {
  title: "Best Heart Doctors Near You",
  description: "Find the best heart doctors near you at www.hearthealers.in | Book Appointment or Call us now on +91-xxxxxxxxxx",
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
