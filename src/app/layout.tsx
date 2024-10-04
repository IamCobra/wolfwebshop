import "./globals.css";
import Navbar from "./components/navbar";

import { ThemeProvider } from "next-themes";

export const metadata = {
  title: 'Berzloy Webshop',
  description: 'Exclusive Chechen-inspired clothing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="h-screen w-full">
        <ThemeProvider attribute="class">
          {/* Navbar */}
          <Navbar />
          {/* Main content */}
          <div className="overflow-y-scroll h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
