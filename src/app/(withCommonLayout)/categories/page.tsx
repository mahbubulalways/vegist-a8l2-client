import { TCategory } from "@/components/Home/TopCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesPage = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/categories`, {
    cache: "no-store",
  });
  const categories = await res.json();
  return (
    <div>
      <div className="container pt-12">
        <h1 className="text-4xl font-semibold text-center">All Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10 pt-10">
          {categories?.data?.map((category: TCategory) => (
            <Link
              key={category?._id}
              href={`/vegetable?category=${category?.name}`}
            >
              <div className="bg-gray-100 py-5 rounded-lg px-3 cursor-pointer h-full">
                <Image
                  src={category?.image}
                  width={200}
                  height={200}
                  alt="image"
                  className="h-[120px] w-[170px] object-cover mx-auto rounded-lg"
                />
                <h1 className="text-center font-medium  pt-5">
                  {category?.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
