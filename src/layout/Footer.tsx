// import { SiteConfig } from "@/lib/site-config";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      rounded={"full"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-card">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Footer content to be handled</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter size={"1.5rem"} />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube size={"1.5rem"} />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram size={"1.5rem"} />
          </SocialButton>
        </Stack>
      </Container>
    </footer>
  );
};
