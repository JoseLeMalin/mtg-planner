"use client";

import { Button } from "@chakra-ui/react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { PropsWithChildren } from "react";
import { useLogoutNextAuth } from "src/hooks/useLogoutNextAuth";

export function ButtonLogout({ children }: PropsWithChildren) {
  const { isPending, mutate } = useLogoutNextAuth();

  const handleLogout = () => {
    console.log("reach here lkogout ");

    signOut();
    // mutate();
  };
  return (
    <>
      <Button onClick={handleLogout} variant={"link"}>
        <div className="space-x-6">
          <LogOut size={12} />
        </div>
        <div>{children}</div>
      </Button>
    </>
  );
}
