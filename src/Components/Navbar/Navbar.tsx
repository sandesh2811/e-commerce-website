import React from "react";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarLinksMobile from "./NavabarLinksMobile/NavbarLinksMobile";

const Navbar = async () => {
  return (
    <div className="h-[7vh] w-full flex justify-center items-center tracking-wide">
      <NavbarLinks />
      <NavbarLinksMobile />
    </div>
  );
};

export default Navbar;
