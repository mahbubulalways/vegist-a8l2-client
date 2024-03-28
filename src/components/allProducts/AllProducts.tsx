"use client";
import { TProduct } from "@/app/types/types";
import React, { ChangeEvent, useState } from "react";
import SingleProduct from "../Home/SingleProduct";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import categories from "@/app/data/catgories";
const AllProducts = ({ products }: { products: TProduct[] }) => {
  const [selectedRange, setSelectedRange] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleRangeSelection = (range: ChangeEvent<HTMLInputElement>) => {
    const checked = range.target.checked;
    const range2 = range.target.value;
    if (checked) {
      params.set("range", range2);
    } else {
      params.delete("range");
    }
    replace(`${pathName}?${params.toString()} `);
  };

  //

  const handleCategorySelection = (category: ChangeEvent<HTMLInputElement>) => {
    const checked = category.target.checked;
    const category2 = category.target.value;
    // setSelectedCategory(category);
    if (checked) {
      params.set("category", category2);
    } else {
      params.delete("category");
    }
    replace(`${pathName}?${params.toString()} `);
  };
  //

  const handleRatingSelection = (rating: ChangeEvent<HTMLInputElement>) => {
    const checked = rating.target.checked;
    const rating2 = rating.target.value;
    if (checked) {
      params.set("rating", rating2);
    } else {
      params.delete("rating");
    }
    replace(`${pathName}?${params.toString()} `);
  };

  const renges = ["50-100", "100-150", "150-200"];
  const starts = [1, 2, 3, 4, 5];
  // const categories = [
  //   { title: "Fruits", name: "fruits" },
  //   { title: "Root Vegetables", name: "root-vegetables" },
  // ];

  return (
    <div className="container grid grid-cols-1 md:grid-cols-6 gap-5 pt-10">
      <div className="col-span-1 space-y-5">
        <div className="border rounded-md shadow p-4 flex flex-col gap-2">
          <h1 className="text-center">Price Range</h1>
          {renges?.map((priceRange) => (
            <div key={priceRange} className="flex items-center gap-1">
              <input
                type="checkbox"
                name="priceRange"
                value={priceRange}
                className="h-4 w-4"
                id="priceRange1"
                // checked={selectedRange === priceRange}
                onChange={(e) => handleRangeSelection(e)}
              />
              <label htmlFor="priceRange1" className="font-medium text-sm">
                {priceRange}
              </label>
            </div>
          ))}
        </div>
        <div className="border rounded-md shadow p-4 flex flex-col gap-2">
          <h1 className="text-center">Categories</h1>
          {categories?.map((category) => (
            <div key={category.name} className="flex items-center gap-1">
              <input
                type="checkbox"
                name="category"
                value={category.name}
                className="h-4 w-4"
                id="category1"
                // checked={selectedCategory === category.name}
                onChange={(e) => handleCategorySelection(e)}
              />
              <label htmlFor="category1" className="font-medium text-sm">
                {category.title}
              </label>
            </div>
          ))}
        </div>

        <div className="border rounded-md shadow p-4 flex flex-col gap-2">
          <h1 className="text-center">Rating</h1>
          {starts?.map((star) => (
            <div key={star} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rating"
                value={star}
                className="h-4 w-4"
                id="rating1"
                // checked={selectedRating === star}
                onChange={(e) => handleRatingSelection(e)}
              />
              <label htmlFor="rating1" className="font-medium text-sm">
                {star} star
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5  grid grid-cols-1 md:grid-cols-3 gap-5">
        {products ? (
          <>
            {products?.map((product: TProduct) => (
              <SingleProduct
                key={product?._id}
                product={product}
              ></SingleProduct>
            ))}
          </>
        ) : (
          <p className="flex  justify-center items-center h-[80vh] text-red-700">
            No product found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
