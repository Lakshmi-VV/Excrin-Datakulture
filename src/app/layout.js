import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Datakulture",
  description: "datakulture site using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
