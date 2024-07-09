import { ReactNode } from "react";

import Image from "next/image";
import hero from "@/public/images/Image (3).png";
import LeftSideLink from "../_components/LeftSideLink";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <section className="">
        <article className="w-full relative">
          <div className="w-[100vw] h-[50vh]">
            <Image
              src={hero}
              alt="hero-image"
              fill
              priority
              quality={100}
              className="img-overlay"
            />
          </div>
          <div className="absolute top-[50%] left-[50%] flex flex-col justify-center items-center text-white ts z-50">
            <p className="text-5xl font-semibold mb-8">Shop</p>
            <p className="text-lg font-light w-full text-nowrap">
              A world of flavour in every bite
            </p>
          </div>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}
        </article>

        <section className="pt-4 md:flex gap-4 px-2 sm:px-12 mt-8">
          <div className="basis-[25%] hidden md:flex flex-col gap-4">
            <LeftSideLink />
          </div>
          {/* For small screen */}
          <div className="flex md:hidden justify-between gap-2 my-4 mx-4">
            <div className="py-1 px-1 border border-[#b1034f] text-[#b1034f] bg-white rounded-md">
              <select
                id="category"
                name="category"
                className="mt-1 block w-full text-sm focus:outline-none apps sm:text-sm bg-white"
              >
                <option className="" value="delivery">
                  Quick Delivery
                </option>
                <option className="" value="pickup">
                  Pickup
                </option>
              </select>
            </div>
            <div className="py-1 px-1 border border-[#b1034f] text-[#b1034f] bg-white rounded-md">
              <select
                id="category"
                name="category"
                className="mt-1 block w-full text-sm focus:outline-none apps sm:text-sm bg-white"
              >
                <option className="" value="all">
                  Sort By
                </option>
                <option className="" value="sizes">
                  Sizes
                </option>
              </select>
            </div>
          </div>
          {/*End For small screen */}

          <article className="w-full sm:basis-[75%]">
            <div className="w-[99%] mx-auto">{children}</div>
          </article>
        </section>
      </section>
    </>
  );
}
