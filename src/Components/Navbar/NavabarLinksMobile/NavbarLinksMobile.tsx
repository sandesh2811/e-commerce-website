"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { Links } from "../NavbarLinks/NavbarLinks";
import Link from "next/link";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { mobileNavVariants } from "@/Animation/variants";

const NavbarLinksMobile = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const session = useSession();

  return (
    <div className="w-screen h-full relative z-10 flex justify-end items-center md:hidden">
      <div
        onClick={() => setActive(!isActive)}
        className="flex items-center justify-center cursor-pointer px-4"
      >
        <FiMenu size={25} />
      </div>

      <m.div
        key="navMenu"
        variants={mobileNavVariants}
        initial="initial"
        animate={isActive ? "enter" : "exit"}
        className="absolute top-0 flex flex-col h-screen w-full justify-center items-center bg-background"
      >
        <div className="w-full flex items-center justify-end">
          <FiX
            onClick={() => setActive(!isActive)}
            size={25}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col w-full items-end justify-center gap-3 h-[90vh] px-4">
          {Links.map((link) => {
            if (session.status === "authenticated" && link.name === "SignIn") {
              return (
                <Link
                  key="Signout"
                  href="/signout"
                  className="text-6xl mid:text-7xl  font-medium"
                  onClick={() => signOut({ callbackUrl: "/", redirect: true })}
                >
                  Signout
                </Link>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-6xl mid:text-7xl  font-medium"
                  onClick={() => setActive(!isActive)}
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </div>
      </m.div>
    </div>
  );
};

export default NavbarLinksMobile;
