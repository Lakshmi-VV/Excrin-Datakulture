import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Icons } from "@/components/Icons";

export const metadata = {
  title: "Datakulture",
  description: "datakulture site using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png?v=320a7f5ca70de7a53882206397c0bc58"
          type="image/png"
        />
      </head>
      <body>
        <Header />
        <div className="container mobile__logo">
          <Icons icon="datakulture_logo" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
