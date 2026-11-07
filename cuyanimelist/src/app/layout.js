import Navbar from "../components/Navbar";
import "./globals.css";
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Cuy-AnimeList",
  description: "A simple anime list web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-warna-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
