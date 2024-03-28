import banner from "@/assets/images/banner.webp";
import Image from "next/image";
import Carousel from "./Carousel";
import { TProduct } from "@/app/types/types";
const Banner = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner"
        className="h-[80vh] md:h-full object-cover"
      />
      <div className="grid grid-cols-2 absolute inset-0 ">
        <Carousel products={products} />
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
