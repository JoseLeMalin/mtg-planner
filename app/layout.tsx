import { Container, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren, ReactNode, Suspense } from "react";
import RootLoading from "./loading";
import { Providers } from "./Providers";

// Global CSS
import "./globals.css";
import { Header } from "@/src/layout/Header";
import { Footer } from "@/src/layout/Footer";

type TRootLayout = {
  modal: ReactNode;
} & PropsWithChildren;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTG Planner",
  description: "Party Planner",
};

export default function RootLayout({ modal, children }: TRootLayout) {
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
            <Suspense fallback={<RootLoading />}>
              <Flex
                // flex
                flexDir={"column"}
                align={{ base: "center", md: "center" }}
                justifyContent={{ base: "center", md: "space-between" }}
                alignContent={{ base: "center", md: "center" }}
                wrap={"wrap"}
                // Display
                m={"auto"}
                h={"full"}
                w={"full"}
                maxW={"7xl"}
                bg={"gray"}
                p={2}
                my={0}
              >
                {children}
              </Flex>
            </Suspense>
            <Footer />
          </Providers>
          <div>{modal}</div>
        </Container>
        {/* <Container
              display="flex"
              flexDirection={"column"}
              justifyContent={{ base: "center", md: "space-between" }}
              alignContent={{ base: "center", md: "center" }}
              h={"100%"}
              maxW={"7xl"}
              p={8}
              bg={"grey"}
              // centerContent
              // direction={{ base: "column", md: "row" }}
              // justify={{ base: "center", md: "space-between" }}
              // align={{ base: "center", md: "center" }}
            > */}
        {/* </Container> */}
      </body>
    </html>
  );
}
