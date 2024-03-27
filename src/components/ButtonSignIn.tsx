"use client";

import { Button } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export const ButtonAuthSignIn = () => {
  return (
    <>
      <Button onClick={() => signIn()}>SignIn</Button>
    </>
  );
};
