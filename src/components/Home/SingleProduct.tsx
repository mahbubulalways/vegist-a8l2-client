import { TProduct } from "@/app/types/types";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import "@smastrom/react-rating/style.css";
const SingleProduct = ({ product }: { product: TProduct }) => {
  return (
    <Link href={`/vegetable/${product?._id}`}>
      <div className="border shadow rounded-lg">
        <div className="relative">
          <Image
            src={product?.image}
            alt=""
            width={200}
            height={150}
            className="w-full h-[250px] object-contain rounded-t-lg"
          />
          {product?.discount && (
            <p className=" absolute top-0 left-0 bg-red-700 w-max text-white p-1 rounded-tl-md">
              {product?.discount}%
            </p>
          )}
        </div>
        <div className="border-t-2"></div>
        <div className="px-5 py-3">
          <h1 className="text-xl font-medium">{product?.vegetable_name}</h1>
          <p className="font-medium">Price: ৳{product?.price}/kg</p>
          <Rating style={{ maxWidth: 100 }} value={product?.rating} />
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
