"use client";

import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export const ButtonAuthSignIn = () => {
  return (
    <>
      <Button
        id="comp-btn-signin"
        name="comp-btn-signin"
        onClick={() => signIn()}
      >
        SignIn
      </Button>
    </>
  );
};
