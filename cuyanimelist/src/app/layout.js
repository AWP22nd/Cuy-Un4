import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "Cuy-AnimeList",
  description: "A simple anime list web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Test</div>
        {children}
      </body>
      
    </html>
  );
}
