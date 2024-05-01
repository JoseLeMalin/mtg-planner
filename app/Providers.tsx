"use client";

import theme from "@/src/components/theme/ChakraTheme";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <SessionProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </SessionProvider>
        </ColorModeProvider>
      </ChakraProvider>
      {/*       </ThemeProvider> */}
    </>
  );
};
