import React from "react";
import Link from "next/link";
import { Ghost, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navsheet = () => {
  return (
    <Sheet>
      <div className="mx-8">
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
      </div>
      <SheetContent side="left">
        <div className="flex flex-col items-center justify-center h-full gap-y-8">
          <Link href="#">
            <Button variant={"ghost"}>Home</Button>
          </Link>
          <Link href="#">
            <Button variant={"ghost"}>About Me</Button>
          </Link>
          <Link href="#">
            <Button variant={"ghost"}>Achievements</Button>
          </Link>
          <Link href="#">
            <Button variant={"ghost"}>Projects</Button>
          </Link>
          <Link href="#">
            <Button variant={"ghost"}>Contact</Button>
          </Link>
          <Link href="#">
            <Button variant={"outline"}>Resume</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navsheet;
