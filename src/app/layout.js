import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const lora = Lora({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Movie Zone",
  description: "Movie app with next",
  icons: {
    icon: "/movieimage.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
