import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Inter, Catamaran } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const catamaran = Catamaran({ subsets: ["latin"] });

export const metadata = {
  title: "Datakulture",
  description: "datakulture site using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${catamaran.className}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
