"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { PiPhone, PiShoppingCartThin } from "react-icons/pi";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  function clickMenu() {
    const element = ref.current;
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      element?.classList.add("-translate-y-[260%]");
    } else {
      element?.classList.remove("-translate-y-[260%]");
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuOpen(false);
        ref.current?.classList.add("-translate-y-[260%]");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <section className="flex justify-between gap-2 items-center px-2 sm:px-4 md:px-6 lg:px-12 py-4 bg-white relative">
      <h2 className="text-[#b1034F] text-2xl md:text-xl lg:text-2xl font-semibold">
        VUECAKES
      </h2>
      <div
        className="bg-[#ccc] md:bg-transparent flex-col md:flex-row px-4 text-black flex justify-between gap-4 lg:gap-4 md:items-center md:text-[#ccc] rounded-bl-md py-4 md:py-0 test right-0 top-[100%] -translate-y-[260%]"
        ref={ref}
      >
        <Link
          href="/"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/" ? "active" : ""
          } flex gap-6 item-center md:inline-block`}
        >
          <div className="md:hidden text-2xl">
            <LiaHomeSolid />
          </div>
          Home
        </Link>
        <Link
          href="/shop"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/shop" ? "active" : ""
          } flex gap-6 item-center md:inline-block`}
        >
          <div className="md:hidden text-2xl">
            <AiOutlineShopping />
          </div>
          Shop
        </Link>
        <Link
          href="/contact"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/contact" ? "active" : ""
          } flex gap-6 item-center md:inline-block`}
        >
          <div className="md:hidden text-2xl">
            <PiPhone />
          </div>
          Contact
        </Link>
        <Link
          href="/"
          className={`hover:text-[#b1034f] text-lg  font-medium cursor-pointer ${
            pathname === "/wishlist" ? "active" : ""
          } flex gap-6 item-center md:hidden`}
        >
          <div className="md:hidden text-2xl">
            <CiHeart />
          </div>
          Wishlist
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
          <div className="flex items-center">
            <Link href="/cart" className="cursor-pointer flex items-center">
              <PiShoppingCartThin />
              <div className="hidden sm:flex bg-[#8b0a1a] text-[10px] text-center h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                10+
              </div>
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <div onClick={clickMenu}>
            <IoMenu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
