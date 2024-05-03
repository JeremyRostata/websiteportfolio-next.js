import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navsheet from "./nav-sheet";
import { ModeToggle } from "./themetoggle";

const navbartop = () => {
  return (
    <div className="flex h-full items-center mx-4">
      <div className="md:hidden">
        <Navsheet />
      </div>
      <nav className="hidden md:block space-x-4">
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
      </nav>
      <div className="flex flex-1 justify-end">
        <ModeToggle />
      </div>
    </div>
  );
};

export default navbartop;
