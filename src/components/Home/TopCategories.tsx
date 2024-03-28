import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
export type TCategory = {
  name: string;
  title: string;
  image: string;
  _id?: string;
};
const TopCategories = async () => {
  const res = await fetch(`${process.env.COMMON_API_URL}/categories`, {
    cache: "no-store",
  });
  const categories = await res.json();

  return (
    <div className="container pt-20">
      <div className="w-full md:w-[50%] mx-auto text-center">
        <h1 className="text-4xl font-semibold">Top Categories</h1>
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          incidunt eaque quibusdam atque fugit facere voluptatibus aut nam
          quisquam est.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 pt-10">
        {categories?.data?.slice(0, 6).map((category: TCategory) => (
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
      <Link href={"/categories"} className="flex justify-center pt-8">
        <button className="flex items-center justify-center gap-1 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-2 rounded-md font-medium">
          View All <FaChevronRight />
        </button>
      </Link>
    </div>
  );
};

export default TopCategories;
