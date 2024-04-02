"use client";

import { LogOut } from "lucide-react";
import { useLogoutNextAuth } from "src/hooks/useLogoutNextAuth";
import { Button, Divider } from "@chakra-ui/react";
import { Fragment, PropsWithChildren } from "react";
import { signOut } from "next-auth/react";

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
          <LogOut size={12}/>
        </div>
        <div>{children}</div>
      </Button>
    </>
  );
}
