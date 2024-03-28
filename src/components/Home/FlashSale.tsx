import productsData from "@/app/data/data";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import SingleProduct from "./SingleProduct";
import { TProduct } from "@/app/types/types";

const FlashSale = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/products/flash-sale`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();
  return (
    <div className="container pt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Flash Sale</h1>
        <Link href={"/flash-sale"}>
          <button className="flex items-center gap-1 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md text-lg font-medium">
            View All <FaChevronRight />
          </button>
        </Link>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {products?.slice(0, 4)?.map((product: TProduct) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
