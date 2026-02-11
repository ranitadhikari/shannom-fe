import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export const metadata = {
  title: "Shannom | AI for Government Transformation",
  description: "AI engineered for public sector scale and citizen impact. Transforming governance through intelligent data systems and responsible ML deployment.",
  keywords: ["AI for Government", "Public Sector AI", "Governance Reform", "Digital India", "Fertilizer Subsidy AI", "Vikshit Bharat 2047"],
  openGraph: {
    title: "Shannom | AI for Government Transformation",
    description: "AI engineered for public sector scale and citizen impact.",
    url: "https://shannom.ai",
    siteName: "Shannom",
    images: [
      {
        url: "/assets/banner.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
