"use client";

import theme from "@/src/ui/chakra-ui/global-chakra.theme";
import { Auth0Provider } from "@auth0/auth0-react";
// import { ToastProvider } from "@/components/ui/toast";
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
      <Auth0Provider
        /* {...providerConfig} */
        domain="dev-x33lha03otvcuenn.us.auth0.com"
        clientId="TZfcQIZXg9jwUWGMz32OFaKNXxMIbUPn"
        onRedirectCallback={redirect("/")}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ChakraProvider theme={theme}>
          <ColorModeProvider>
            <SessionProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </SessionProvider>
          </ColorModeProvider>
        </ChakraProvider>
      </Auth0Provider>
      {/*       </ThemeProvider> */}
    </>
  );
};
