"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";


export function ThemeToggle() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(Sun, Moon);

  return (
    <IconButton
      size="md"
      rounded="full"
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
}


// next-theme
/* export function ThemeToggleBis() {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} */