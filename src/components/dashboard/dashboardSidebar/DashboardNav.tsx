"use client";
import NavLink from "@/components/shared/Navbar/NavLink";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const DashboardNav = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-100  py-3 md:py-8 px-4">
        <button onClick={() => setIsSideOpen(!isSideOpen)}>
          <MdMenu className="h-8 w-8 block md:hidden" />
        </button>
      </div>
      {isSideOpen && (
        <div className="bg-gray-100 h-screen fixed w-[300px] left-0 ">
          <div className=" pt-10">
            <NavLink
              title="All products"
              href="/dashboard/all-products"
              activeClass="bg-red-200"
              className="w-full pl-4 py-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardNav;
