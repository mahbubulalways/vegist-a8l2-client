import Banner from "@/components/Home/Banner";
import FlashSale from "@/components/Home/FlashSale";
import TopCategories from "@/components/Home/TopCategories";
import TrendingProducts from "@/components/Home/TrendingProducts";
import React from "react";

const HomePage = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/products/flash-sale`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();
  return (
    <div>
      <Banner products={products} />
      <FlashSale />
      <TopCategories />
      <TrendingProducts />
    </div>
  );
};

export default HomePage;
