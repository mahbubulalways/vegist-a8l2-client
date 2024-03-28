import NavLink from "@/components/shared/Navbar/NavLink";
import React from "react";

const DashboardSidebar = () => {
  return (
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
  );
};

export default DashboardSidebar;
