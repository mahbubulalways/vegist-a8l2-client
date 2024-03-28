"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type TNavLink = {
  title: string;
  href: string;
  activeClass: string;
  className?: string;
};
const NavLink = ({ title, href, activeClass, className }: TNavLink) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <div className={`${isActive ? activeClass : ""}  ${className}`}>
      <Link
        href={href}
        className={`${isActive ? activeClass : ""}   ${className} w-full`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
