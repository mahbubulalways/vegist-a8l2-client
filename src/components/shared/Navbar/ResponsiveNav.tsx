"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { navData } from "./Navbar";
import NavLink from "./NavLink";

const ResponsiveNav = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpenSideNav(!isOpenSideNav)}>
        <MdMenu className="h-9 w-9" />
      </button>

      <div
        className={`bg-[#181818]/70 z-[100] h-screen fixed top-0 ${
          isOpenSideNav ? "w-[100%] " : "w-[0%] "
        }  top-0 left-0 duration-500 overflow-hidden`}
      >
        <div
          className={`bg-[#181818] z-50 max-w-[380px] h-full absolute ${
            isOpenSideNav ? "w-[75%]" : "w-[0%]"
          }  duration-500`}
        >
          <div className=" border-b border-[#2e2e2e] h-[3.125rem] bg-[url('/sidebg.png')] items-center justify-end flex">
            <button
              onClick={() => setIsOpenSideNav(!isOpenSideNav)}
              className="h-full w-[3.125rem] bg-[#546dff] items-center justify-center flex"
            >
              <AiOutlineClose className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="flex flex-col w-full gap-5 pl-5 pt-5">
            {navData?.map(({ id, title, href }) => (
              <NavLink
                key={id}
                activeClass={"text-red-700"}
                href={href}
                title={title}
                className="text-white"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
