import { TProduct } from "@/app/types/types";
import SingleProduct from "@/components/Home/SingleProduct";
const TrendingProduct = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/products`);
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
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {products
          ?.sort((a: TProduct, b: TProduct) => b.rating - a.rating)
          ?.slice(0, 8)
          ?.map((product: TProduct) => (
            <SingleProduct key={product?._id} product={product}></SingleProduct>
          ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
