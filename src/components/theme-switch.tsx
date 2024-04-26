"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { LuSun, LuMoon } from "react-icons/lu";
import { cn } from "@/lib/utils"

type Props = {
  className: string;
}


export function ThemeSwitch({ className }: Props) {
  const { theme, setTheme } = useTheme()

  return (
    <Button 
      variant="ghost" 
      className={cn("w-9 px-0", className)}
      onClick={() => {setTheme(theme=="dark"? "light":"dark")}}
    >
      <LuSun size={24} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LuMoon size={24} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
