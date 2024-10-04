"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={handleOpen}
      >
        <CiMenuFries className="text-[32px] text-blue-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Jerin <span className="text-blue-700">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-start items-center gap-8">
          {links.map((link) => (
            <Link
              onClick={handleClose}
              href={link.path}
              key={link.name}
              className={`${
                link.path === pathname &&
                "text-blue-700 border-b-2 border-blue-700"
              }
                            text-xl capitalize hover:text-blue-700 transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/hireme">
            <Button>Hire Me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
