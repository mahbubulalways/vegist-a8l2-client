import { TProduct } from "@/app/types/types";
import Image from "next/image";
import React from "react";

const TABLE_HEAD = ["#", "Image", "Name", "Category", "Price"];

const AllProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="overflow-x-auto  pt-10">
      <table className="w-full table-auto">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className="">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td className="border  text-center">{index + 1}</td>
              <td className="border ">
                <Image
                  src={product?.image}
                  height={80}
                  width={80}
                  alt=""
                  className="mx-auto"
                />
              </td>
              <td className="border  text-center">{product.vegetable_name}</td>
              <td className="border  text-center">{product.category}</td>
              <td className="border  text-center">৳{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
