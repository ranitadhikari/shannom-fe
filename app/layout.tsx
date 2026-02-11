import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export const metadata = {
  title: "Shannom | AI for Government",
  description: "AI engineered for public sector scale and citizen impact.",
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
