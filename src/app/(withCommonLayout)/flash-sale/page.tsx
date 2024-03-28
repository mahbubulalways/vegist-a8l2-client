import { TProduct } from "@/app/types/types";
import FlashSaleTimer from "@/components/FlashSale/FlashSaleTimer";
import SingleProduct from "@/components/Home/SingleProduct";
import React from "react";

const FlashSalePage = async () => {
  const endTime = new Date("2024-04-21T23:59:59");

  const res = await fetch(`${process.env.COMMON_API_URL}/products/flash-sale`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();
  return (
    <div className="container pt-12">
      <h1 className="text-4xl font-semibold text-center">Flash Sale</h1>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {products?.map((product: TProduct) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
      <FlashSaleTimer endTime={endTime} />
    </div>
  );
};

export default FlashSalePage;
