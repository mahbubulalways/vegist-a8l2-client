import { TProduct } from "@/app/types/types";
import SingleProduct from "../Home/SingleProduct";

const OthersProducts = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/products/first-ten`, {
    cache: "force-cache",
    next: {
      revalidate: 30,
    },
  });
  const first10Products = await res.json();
  const res2 = await fetch(`${process.env.COMMON_API_URL}/products`, {
    cache: "no-store",
  });
  const updatedData = await res2.json();
  if (!updatedData?.data?.length) {
    return <p>Loading..</p>;
  }
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-medium pb-12">Related</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
        {first10Products?.data?.map((product: TProduct) => (
          <SingleProduct key={product?._id} product={product} />
        ))}
        {updatedData?.data?.slice(10).map((product: TProduct) => (
          <SingleProduct key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OthersProducts;
