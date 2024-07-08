import Image from "next/image";
import hero from "@/public/images/Image.png";
import LeftSideLink from "../_components/LeftSideLink";
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <article className="w-full bg-[#efcddc] relative h-[80vh]">
          <div className="relative w-full h-full">
            <Image src={hero} fill alt="hero-image" className="img-overlay" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>
          <div className="absolute top-0 left-0 -translate-y-[10%] w-full h-full flex items-center justify-center z-[900]">
            <div className="text-center">
              <h3 className="text-white font-semibold text-5xl mb-10">Shop</h3>
              <p className="text-white text-xl mb-4 px-2">
                A world of flavour in every bite
              </p>
              {/* <div className="flex gap-16 text-white">
                <div>
                  <Image
                    src="/images/hero-sm.png"
                    height="90"
                    width={90}
                    alt="cake-image"
                  />
                  <p className="text-base font-light mt-2">Birthday Cakes</p>
                </div>
                <div>
                  <Image
                    src="/images/hero-sm.png"
                    height="90"
                    width={90}
                    alt="cake-image"
                  />
                  <p className="text-base font-light mt-2">Wedding Cakes</p>
                </div>
                <div>
                  <Image
                    src="/images/hero-sm.png"
                    height="90"
                    width={90}
                    alt="cake-image"
                  />
                  <p className="text-base font-light mt-2">Desserts</p>
                </div>
                <div>
                  <Image
                    src="/images/hero-sm.png"
                    height="90"
                    width={90}
                    alt="cake-image"
                  />
                  <p className="text-base font-light mt-2">Cupcakes</p>
                </div>
              </div> */}
            </div>
          </div>
        </article>

        <section className="pt-4 md:flex gap-4 px-2 sm:px-12">
          <div className="basis-[25%] hidden md:flex flex-col gap-4">
            <LeftSideLink />
          </div>
          {/* For small screen */}
          <div className="flex md:hidden justify-between gap-2 my-4">
            <div className="py-1 px-1 border border-[#b1034f] text-[#b1034f] bg-white rounded-md">
              <select
                id="category"
                name="category"
                className="mt-1 block w-full text-sm focus:outline-none apps sm:text-sm"
              >
                <option className="" value="delivery">Quick Delivery</option>
                <option className="" value="pickup">Pickup</option>
              </select>
            </div>
            <div className="py-1 px-1 border border-[#b1034f] text-[#b1034f] bg-white rounded-md">
              <select
                id="category"
                name="category"
                className="mt-1 block w-full text-sm focus:outline-none apps sm:text-sm"
              >
                <option className="" value="delivery">Quick Delivery</option>
                <option className="" value="pickup">Pickup</option>
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
