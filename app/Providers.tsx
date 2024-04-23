"use client";

import theme from "@/src/ui/chakra-ui/global-chakra.theme";
// import { ToastProvider } from "@/components/ui/toast";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
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
