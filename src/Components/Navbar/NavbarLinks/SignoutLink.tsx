"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignoutLink = () => {
  return (
    <Link
      key="Signout"
      href="#"
      className="text-lg"
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
    >
      Signout
    </Link>
  );
};

export default SignoutLink;
