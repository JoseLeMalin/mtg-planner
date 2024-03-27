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

interface Props {
  children: React.ReactNode;
}

// const { isOpen, onOpen, onClose } = useDisclosure()

export async function Header() {
  const session = await getAuthSession();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <Container as={Stack} maxW={"6xl"} py={4} spacing={4}>
        <Flex h={8} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href={"/"}>Logo</Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ThemeToggle />

              {session ? (
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
                    <Button></Button>
                    <br />
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
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
