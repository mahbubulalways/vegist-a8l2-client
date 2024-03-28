import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/logo.svg";
import { FaHeadphones } from "react-icons/fa6";
import Link from "next/link";
// import BackToTop from "./BackToTop";
const Footer = () => {
  return (
    <div className="bg-[#383737] mt-24 pt-16 pb-10 text-white ">
      <div className="container mx-auto grid-cols-2 md:grid md:grid-cols-7 gap-8">
        <div className="col-span-2">
          <Image src={logo} alt="" className="bg-white p-2 rounded" />
          <p className="pt-5">
            Consectetur adipiscing lorem ipsum dolor sit amet, elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-xl font-semibold">ABOUT US</h1>
          <div className=" pt-8 flex flex-col gap-3">
            <Link href={"/trending-products"}>Trending Products</Link>
            <Link href={"/categories"}>Categories</Link>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
          </div>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-xl font-semibold">INFORMATION</h1>
          <div className=" pt-8 space-y-3">
            <p>Special Offers</p>
            <p>Gift Cards</p>
            <p>Discount Sales</p>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-xl font-semibold">SUPPORT</h1>
          <div className=" pt-8 space-y-3">
            <p>Search</p>
            <p>Advance Search</p>
            <p>Help & Faq</p>
            <p>Chat Support</p>
            <p>E-Mail Support</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-xl font-semibold">CONTACT US</h1>
          <div className=" pt-8 space-y-3">
            <div className="flex items-center gap-2">
              <FaHeadphones className="h-14 w-14 text-red-600" />
              <div>
                <p>Through Whatsapp</p>
                <h1 className="text-2xl font-extrabold">+880123456789</h1>
              </div>
            </div>
            <p>No: 58 A, East Madison Street, Baltimore,</p>
            <p>USA 4508</p>
            <p>E-Mail: info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
