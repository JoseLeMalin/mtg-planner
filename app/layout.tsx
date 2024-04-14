import { Footer } from "@/src/layout/Footer";
import { Header } from "@/src/layout/Header";
import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import RootLoading from "./loading";
import { Providers } from "./Providers";

// Global CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTG Planner",
  description: "Party Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${inter.className} bg-background h-full font-sans antialiased`}
      >
        <Container className={"main-container"}>
          <Providers>
            <Header />
            <Container
              display="flex"
              h={"100%"}
              maxW={"7xl"}
              p={8}
              bg={"grey"}
              flexDirection={"column"}
              justifyContent={{ base: "center", md: "space-between" }}
              alignContent={{ base: "center", md: "center" }}
              // centerContent
              // direction={{ base: "column", md: "row" }}
              // justify={{ base: "center", md: "space-between" }}
              // align={{ base: "center", md: "center" }}
            >
              <Suspense fallback={<RootLoading />}>{children}</Suspense>
            </Container>
            <Footer />
          </Providers>
        </Container>
      </body>
    </html>
  );
}
