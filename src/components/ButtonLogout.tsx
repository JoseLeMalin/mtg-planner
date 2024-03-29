"use client";

import { LogOut } from "lucide-react";
import { useLogoutNextAuth } from "src/hooks/useLogoutNextAuth";
import { Button, Divider } from "@chakra-ui/react";
import { Fragment, PropsWithChildren } from "react";

export function ButtonLogout({ children }: PropsWithChildren) {
  const { isPending, mutate } = useLogoutNextAuth();

  const handleLogout = () => {
    mutate();
  };
  return (
    <>
      <div className="space-x-6">
        <LogOut size={12} onClick={handleLogout} />
      </div>
      <div>{children}</div>
    </>
  );
}
