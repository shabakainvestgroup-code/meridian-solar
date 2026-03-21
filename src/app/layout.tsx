import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Meridian Solar – Installation Panneaux Solaires Marrakech",
    template: "%s | Meridian Solar",
  },
  description:
    "Expert en installation de panneaux solaires à Marrakech. Économisez jusqu'à 90% sur votre facture d'électricité. Devis gratuit et installation professionnelle.",
  keywords: [
    "panneaux solaires Marrakech",
    "énergie solaire Maroc",
    "installation solaire",
    "photovoltaïque Marrakech",
    "Meridian Solar",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://meridiansolar.ma",
    siteName: "Meridian Solar",
    title: "Meridian Solar – Installation Panneaux Solaires Marrakech",
    description:
      "Expert en installation de panneaux solaires à Marrakech. Économisez jusqu'à 90% sur votre facture d'électricité.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
