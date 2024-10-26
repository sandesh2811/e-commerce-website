import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import SignoutLink from "./SignoutLink";
import DashboardLink from "./DashboardLink";

export const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Cart",
    path: "/cart",
  },
  {
    name: "SignIn",
    path: "/signin",
  },
];

const NavbarLinks = async () => {
  const session = await getServerSession(options);
  return (
    <div className="hidden md:flex w-[70%] lg:w-[50%]  justify-between items-center h-full px-4">
      {Links.map((link) => {
        if (session && link.name === "SignIn") {
          if (session.user.role === "admin") {
            return (
              <>
                <DashboardLink />
                <SignoutLink />
              </>
            );
          } else {
            return <SignoutLink />;
          }
        } else {
          return (
            <Link key={link.name} href={link.path} className="text-lg">
              {link.name}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NavbarLinks;
