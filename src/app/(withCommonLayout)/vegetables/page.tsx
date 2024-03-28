import { TProduct } from "@/app/types/types";
import SingleProduct from "@/components/Home/SingleProduct";
import AllProducts from "@/components/allProducts/AllProducts";
type TSearchParams = {
  range?: string;
  category?: string;
  rating?: string;
};
const AllProductPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const { range, category, rating } = searchParams;
  const res = await fetch(
    `${process.env.COMMON_API_URL}/products/filtering?category=${category}&range=${range}&rating=${rating}`,
    {
      cache: "no-store",
    }
  );
  const { data: products } = await res.json();

  if (!products) {
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-medium">No products exist</h1>
    </div>;
  }
  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};

export default AllProductPage;
