"use client"

import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useEffect, useRef } from "react";


export default function Sidebar() {

    return (
        <Sheet>
            <SheetTrigger>
                <Menu size={24} strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent
                side={"left"}
                onInteractOutside={event => event.preventDefault()}
                className="w-[300px]"
            >
                <SheetHeader>
                    <SheetClose><Menu size={24} strokeWidth={1.5} /></SheetClose>
                    <SheetTitle className=''>title</SheetTitle>
                    <SheetDescription>
                        <div>description</div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}