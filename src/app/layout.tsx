import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gamma Ecommerce",
  description: "An ecommerce web app built with Next.js and Directus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-dark-blue text-dark-blue dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="min-h-screen flex flex-col max-w-[1250px] w-[90%] mx-auto ">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
