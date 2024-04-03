import { ThemeToggle } from "@/src//components/theme/ThemeProvider";
import { getAuthSession } from "@/src/lib/auth";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import { ButtonAuthSignIn } from "../components/ButtonSignIn";
import { ButtonLogout } from "../components/ButtonLogout";
import { useLogoutNextAuth } from "../hooks/useLogoutNextAuth";

interface Props {
  children: React.ReactNode;
}

// const { isOpen, onOpen, onClose } = useDisclosure()

export async function Header() {
  const session = await getAuthSession();
  console.log("session?.user", session?.user);

  return (
    <header>
      <Container
        as={Stack}
        minH={"1xl"}
        maxW={"full"}
        py={4}
        spacing={4}
        border={"2px"}
        bgColor={"wheat"}
      >
        <Flex h={8} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href={"/"}>Logo</Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box>
                <Link href={"/slider"}>slider </Link>
              </Box>
              <ThemeToggle />

              {!session?.user ? (
                <>
                  <ButtonAuthSignIn />
                </>
              ) : (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>
                      <Link href={"/admin"}>Your Account</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
              <ButtonLogout> Logout</ButtonLogout>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
