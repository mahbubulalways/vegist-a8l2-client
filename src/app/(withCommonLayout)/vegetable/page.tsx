import { TProduct } from "@/app/types/types";
import SingleProduct from "@/components/Home/SingleProduct";

type TSearchParams = {
  searchParams: {
    category: string;
  };
};
const ProductPage = async ({ searchParams }: TSearchParams) => {
  const res = await fetch(
    `${process.env.COMMON_API_URL}/products?category=${searchParams?.category}`,
    { cache: "no-cache" }
  );
  const { data: products } = await res.json();
  if (!products) {
    return (
      <p className="flex  justify-center items-center h-[80vh] text-red-700">
        No products are available with this category
      </p>
    );
  }

  return (
    <div className="container">
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {products?.map((product: TProduct) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
