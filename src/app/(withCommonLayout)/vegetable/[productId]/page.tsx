import OthersProducts from "@/components/ProductDetails/OthersProducts";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Image from "next/image";
import React from "react";
type TParams = {
  params: {
    productId: string;
  };
};
const ProductDetailsPage = async ({ params }: TParams) => {
  const res = await fetch(
    `${process.env.COMMON_API_URL}/products/${params?.productId}`,
    {
      cache: "no-store",
    }
  );
  const { data: product } = await res.json();
  return (
    <div className="container">
      <h1 className="text-4xl font-semibold pt-12 pb-10">Product Details</h1>
      <ProductDetails product={product} />
      <OthersProducts />
    </div>
  );
};

export default ProductDetailsPage;
