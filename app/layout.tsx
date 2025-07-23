import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alessandra - Profissional em Gestão Comercial e RH",
  description:
    "Profissional pós-graduada em Psicologia Organizacional com mais de 35 anos de experiência na área comercial e gestão de recursos humanos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
