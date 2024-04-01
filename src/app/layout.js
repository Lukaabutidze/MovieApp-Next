import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

const lora = Lora({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Movie Zone",
  description: "Movie app with next",
  icons: {
    icon: "/movieimage.svg",
    width: "100%",
    height: "100%",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
