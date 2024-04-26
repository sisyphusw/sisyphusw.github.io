import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger>
            <div
                className={cn(
                    buttonVariants({
                        variant: "ghost",
                    }),
                    "w-9 px-0"
                )}
            >
                <Menu />
            </div>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-[300px]">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}