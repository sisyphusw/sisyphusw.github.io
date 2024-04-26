
import { FaGithub } from "react-icons/fa";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Github() {
    return (
        <Link
            href={"https://github.com/sisyphusw/sisyphusw.github.io"}
            target="_blank"
            rel="noreferrer"
        >
            <div
                className={cn(
                    buttonVariants({
                        variant: "ghost",
                    }),
                    "w-9 px-0"
                )}
            >
                <FaGithub size={24} />
                <span className="sr-only">Github</span>
            </div>
        </Link>
    );
}

