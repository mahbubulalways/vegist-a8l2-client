import AllProducts from "@/components/dashboard/dashboardPages/allProducts/AllProducts";
import React from "react";

const DashboardPage = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/products/`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();

  return (
    <div className="container">
      <h1 className="text-3xl font-medium px-10 mt-5">All products</h1>
      <AllProducts products={products} />
    </div>
  );
};

export default DashboardPage;
