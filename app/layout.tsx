import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"w-full flex flex-col bg-light-gray" + inter.className}>
        <Header />
        <main className="flex flex-col grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
