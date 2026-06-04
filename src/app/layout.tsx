import localFont from "next/font/local";
import dynamic from "next/dynamic";

import "./app.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ViewCanvas = dynamic(
  () => import("@/components/ViewCanvas").then((mod) => mod.default),
  { ssr: false },
);

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={alpino.variable}>
      <body className="overflow-x-hidden bg-[#1A0F08]">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
    </html>
  );
}
