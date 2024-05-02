import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const navbartop = () => {
  return (
    <nav className="bg-primary/10 backdrop-blur fixed w-full flex justify-center py-4 z-50">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbartop;
