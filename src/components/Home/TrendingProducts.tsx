import SingleProduct from "./SingleProduct";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { TProduct } from "@/app/types/types";

const TrendingProducts = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();

  return (
    <div className="container pt-16">
      <div className="w-full md:w-[50%] mx-auto text-center">
        <h1 className="text-4xl font-semibold">Trending Products</h1>
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          incidunt eaque quibusdam atque fugit facere voluptatibus aut nam
          quisquam est.
        </p>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {products
          ?.sort((a: TProduct, b: TProduct) => b.rating - a.rating)
          ?.slice(0, 6)
          ?.map((product: TProduct) => (
            <SingleProduct key={product?._id} product={product}></SingleProduct>
          ))}
      </div>
      <Link href={"/vegetables"} className="flex justify-center pt-8">
        <button className="flex items-center justify-center gap-1 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-2 rounded-md font-medium">
          See All Products <FaChevronRight />
        </button>
      </Link>
    </div>
  );
};

export default TrendingProducts;
