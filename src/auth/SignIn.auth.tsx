"use client";

import { signIn } from "next-auth/react";

import { useMutation } from "@tanstack/react-query";
import { Loader, LogIn } from "lucide-react";
import { Button } from "@chakra-ui/react";

export const SignInButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn(),
  });

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        mutation.mutate();
      }}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? (
        <Loader className="mr-2" size={12} />
      ) : (
        <LogIn className="mr-2" size={12} />
      )}
      Login
    </Button>
  );
};
