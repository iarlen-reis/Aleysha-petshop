import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

import {
  Ruluko,
  Amatic_SC as Amatic,
  Crimson_Text as Crimson,
} from "next/font/google";

const ruluko = Ruluko({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ruluko",
});

const amaticSc = Amatic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-amatic",
});

const crimsonText = Crimson({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Aleysha Petshop",
  description:
    "Explore o melhor em produtos e serviços para seu pet no nosso petshop online. Encontre alimentos premium, brinquedos divertidos e tudo o que seu animal de estimação precisa para uma vida saudável e feliz. Além disso, agende facilmente serviços de banho e tosa para mantê-lo sempre bem cuidado. Faça seu pedido agora e proporcione ao seu pet a qualidade de vida que ele merece!!",
  keywords: [
    "petshop",
    "pet",
    "petshop online",
    "Aleysha Petshop",
    "Aleysha"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${ruluko.variable} ${amaticSc.variable} ${crimsonText.variable} bg-background min-h-screen`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
