"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <section className="flex justify-between gap-2 items-center px-2 sm:px-4 md:px-6 lg:px-12 py-4 bg-white">
      <h2 className="text-[#b1034F] text-2xl md:text-xl lg:text-2xl font-semibold">
        VUECAKES
      </h2>
      <div className="md:flex hidden justify-between gap-2 lg:gap-4 items-center text-[#ccc]">
        <Link
          href="/"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/shop" ? "active" : ""
          }`}
        >
          Shop
        </Link>
        <Link
          href="/contact"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/contact" ? "active" : ""
          }`}
        >
          Contact
        </Link>
      </div>
      <div className="flex gap-2 md:gap-4 items-center text-lg cursor-pointer">
        <article className="flex items-center md:bg-[rgba(204,204,204,.3)] rounded-md px-2">
          <CiSearch />
          <input
            type="text"
            className="bg-transparent border-0 outline-0 px-1 lg:px-2 py-1 hidden md:inline-flex"
            placeholder="Search for cakes"
          />
        </article>
        <div className="hidden md:block">
          <CiHeart />
        </div>
        <div>
          <FaRegUser />
        </div>
        <div className="flex items-center gap-2">
          <p className="hidden sm:block">Cart</p>
          <div className="flex items-center">
            <Link
              href="/cart"
              className="cursor-pointer flex items-center"
            >
              <PiShoppingCartThin />

              <div className="hidden sm:block bg-[#8b0a1a] text-[10px] px-1 py-0 rounded-full text-white">
                10+
              </div>
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <IoMenu />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
