import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import NavLink from "./NavLink";
import { CiMenuFries } from "react-icons/ci";
import ResponsiveNav from "./ResponsiveNav";

export const navData = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 11,
    title: "Categories",
    href: "/categories",
  },
  {
    id: 111,
    title: "Products",
    href: "/vegetables",
  },
  {
    id: 11115,
    title: "Flash Sale",
    href: "/flash-sale",
  },
  {
    id: 1111,
    title: "Dashboard",
    href: "/dashboard/all-products",
  },
  {
    id: 111111,
    title: "About Us",
    href: "/about-us",
  },
  {
    id: 11111211,
    title: "Contact Us ",
    href: "/contact-us",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white py-5 border-b-2 shadow-md sticky top-0 z-30">
      <div className="container">
        <div className="flex items-center justify-between ">
          <div>
            <Image src={logo} alt="logo" className="w-[100px]" />
          </div>
          <div className="hidden md:block">
            <div className="flex gap-8 items-center ">
              {navData?.map(({ id, title, href }) => (
                <NavLink
                  key={id}
                  activeClass={"text-red-700"}
                  href={href}
                  title={title}
                />
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <ResponsiveNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
