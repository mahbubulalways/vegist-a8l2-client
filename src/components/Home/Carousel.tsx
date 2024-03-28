"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import { TProduct } from "@/app/types/types";

const Carousel = ({ products }: { products: TProduct[] }) => {
  const ref = useRef<any>(null);
  const [preview, setPreview] = useState(1);

  useEffect(() => {
    const swipePreview = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setPreview(1);
      } else if (windowWidth <= 980) {
        setPreview(3);
      } else {
        setPreview(3);
      }
    };
    swipePreview();
    window.addEventListener("resize", swipePreview);
    return () => {
      window.removeEventListener("resize", swipePreview);
    };
  });
  return (
    <div className="container">
      <div>
        <Swiper
          ref={ref}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={10}
          loop={true}
          slidesPerView={preview}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {products?.map((product: TProduct) => (
            <div key={product?.price + 1} className="">
              <SwiperSlide className="">
                <div className="border-2 border-green-300 rounded-lg">
                  <div className="flex flex-col gap-1 justify-between">
                    <div className="relative">
                      <Image
                        src={product?.image}
                        alt=""
                        width={200}
                        height={200}
                        className="w-full rounded-t-lg h-48 object-cover"
                      />
                      <p className=" absolute top-0 left-0 bg-red-700 w-max text-white p-1 rounded-tl-md">
                        {product?.discount}%
                      </p>
                    </div>
                    <div className="px-5 py-3">
                      <h1 className="text-xl font-medium">
                        {product?.vegetable_name}
                      </h1>
                      <p className="font-medium">Price: ৳{product?.price}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className="flex gap-3 justify-center pt-5 items-end ">
          <button
            onClick={() => ref.current.swiper.slidePrev()}
            className="bg-green-600 text-white p-2 rounded-full relative "
          >
            <BsArrowLeft className=" w-10 h-10" />
          </button>
          <button
            onClick={() => ref.current.swiper.slideNext()}
            className="bg-green-600 text-white p-2 rounded-full relative "
          >
            <BsArrowRight className=" w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
