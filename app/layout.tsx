import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Header } from "@/src/layout/Header";
import { Footer } from "@/src/layout/Footer";
import { Suspense } from "react";
import { Box, Container, Flex, Spacer, Stack } from "@chakra-ui/react";
import RootLoading from "./loading";
import Script from "next/script";
import { css } from "@emotion/react";

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
              maxW={"6xl"}
              p={8}
              h={"100%"}
              pos={"sticky"}
              bg={"pink"}
              centerContent
              display="flex"
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
