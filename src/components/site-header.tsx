import Link from "next/link";
import Sidebar from "./sidebar";
import { ThemeSwitch } from "./theme-switch";
import { Github } from "@/components/icons/github";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Bilibili } from "./icons/bilibili";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full py-4">
            <div className="flex items-center px-4 gap-2">
                <Sidebar />
                <ThemeSwitch className="ml-auto" />
                <Github />
                <Bilibili />
            </div>
        </header>
    );
}