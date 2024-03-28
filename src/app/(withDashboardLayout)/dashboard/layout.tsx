import DashboardNav from "@/components/dashboard/dashboardSidebar/DashboardNav";
import DashboardSidebar from "@/components/dashboard/dashboardSidebar/DashboardSidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <DashboardNav />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 pb-10">
        <div>
          <div className="col-span-1  h-screen bg-slate-100 hidden md:block">
            <DashboardSidebar />
          </div>
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
