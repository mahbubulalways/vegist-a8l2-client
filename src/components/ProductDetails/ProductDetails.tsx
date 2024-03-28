"use client";
import { TProduct } from "@/app/types/types";
import Image from "next/image";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import OthersProducts from "./OthersProducts";
const ProductDetails = ({ product }: { product: TProduct }) => {
  const [activeImage, setActiveImage] = useState(product?.images[0]);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex gap-5">
          <div className="flex  flex-col items-center gap-10 justify-center">
            {product?.images?.map((image, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(image)}
                className={`${
                  activeImage === image ? "border-2 rounded-md" : ""
                }`}
              >
                <Image
                  src={image}
                  height={70}
                  width={70}
                  alt="image"
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>

          <Image
            src={activeImage}
            height={300}
            width={300}
            alt="image"
            className="w-full mx-auto"
            id="img"
            //   placeholder="blur"
            blurDataURL="blur"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{product?.vegetable_name}</h1>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-medium text-gray-600">
              Price: ৳{product?.price}/kg
            </h1>
            <p>|</p>
            <Rating style={{ maxWidth: 100 }} value={product?.rating} />
            <p>{`(${product?.review} review)`}</p>
          </div>
          <h1>
            Discount:{" "}
            <span className="bg-green-700 px-4 py-1 round text-white">
              {product?.discount}% off
            </span>
          </h1>
          <h1>Category: {product?.categoryName}</h1>
          <h1 className="text-green-800">{product?.organic && "Organic"}</h1>
          <p>
            <span className="font-medium">About product: </span>
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
