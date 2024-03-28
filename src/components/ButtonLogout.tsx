"use client";

import { LogOut } from "lucide-react";
import { useLogoutNextAuth } from "src/hooks/useLogoutNextAuth";
import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function ButtonLogout({ children }: PropsWithChildren) {
  const { isPending, mutate } = useLogoutNextAuth();

  const handleLogout = () => {
    mutate();
  };
  return (
    <>
      <LogOut className="mr-2" size={12} onClick={handleLogout} />
      {children}
    </>
  );
}
