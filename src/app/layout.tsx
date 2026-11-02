import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laxmi Prasad Dooda — Site Reliability & DevOps Engineer",
  description: "Site Reliability and DevOps engineering focused on AWS, Terraform, Kubernetes, CI/CD, automation and observability. Explore real-world engineering projects.",
  keywords: ["portfolio", "devops", "aws", "terraform", "site reliability engineer", "kubernetes", "docker", "cloud engineer", "laxmi prasad dooda"],
  authors: [{ name: "Laxmi Prasad Dooda" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Laxmi Prasad Dooda | DevOps & Cloud Engineer Portfolio",
    description: "Site Reliability / DevOps Engineer with 3.5 years of experience in AWS, Terraform, CI/CD automation, and cloud infrastructure management",
    type: "website",
    url: "https://aexplorer00.github.io/Portfolio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxmi Prasad Dooda | DevOps & Cloud Engineer Portfolio",
    description: "SRE / DevOps Engineer building repeatable infrastructure and reliable delivery systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
