import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";

function page() {
  return (
    <section className="bg-[rgba(204,204,204,.3)] py-4">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <p className="text-3xl font-bold text-center text-[#b1034F] mb-2">
          Cart
        </p>
        <main className="bg-white rounded-md p-2">
          <table className="min-w-full bg-white font-semibold">
            <thead>
              <tr>
                <th className="py-2 px-2 sm:px-4 text-left">Product</th>
                <th className="py-2 px-2 sm:px-4 text-left">Price</th>
                <th className="py-2 px-2 sm:px-4 text-left hidden sm:block">
                  Quantity
                </th>
                <th className="py-2 px-2 sm:px-4 text-left sm:hidden block">
                  Qty
                </th>
                <th className="py-2 px-2 sm:px-4 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base">
              {[1, 2].map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-2 sm:px-4 flex gap-1 sm:gap-3 items-center">
                    <div>
                      <input type="checkbox" />
                      <RiDeleteBin6Line />
                    </div>
                    <div className="h-[80px] w-[80px] relative hidden sm:block">
                      <Image src="/images/cake-1.jpg" alt="cake image" fill />
                    </div>
                    <p>Red velvet single layer cake 10 inches</p>
                  </td>
                  <td className="py-2 px-2 sm:px-4">#15,000</td>
                  <td className="py-2 px-2 sm:px-4 flex-col-reverse sm:flex-row flex gap-1 sm:gap-2 text-white font-semibold">
                    <div className="px-2 rounded-md flex items-center justify-center text-center cursor-pointer bg-[#b1034f]">
                      -
                    </div>
                    <div className="px-2 rounded-md flex items-center justify-center text-center text-[#b1034f] text-sm border border-[#b1034f]">
                      1
                    </div>
                    <div className="px-2 rounded-md flex items-center justify-center text-center  cursor-pointer bg-[#b1034f]">
                      +
                    </div>
                  </td>
                  <td className="py-2 px-4">#15,000</td>
                </tr>
              ))}
            </tbody>
          </table>

          <main className="max-w-[350px] w-[90%] bg-[#efcddc] mx-auto px-2 sm:px-4 py-4 rounded-md mb-4">
            <p className="text-xl text-[#b1034f] font-semibold mb-4">
              Cart Total
            </p>
            <article className="flex flex-col gap-4 font-semibold px-2 sm:px-4">
              <div className="flex items-center gap-6">
                <p>Subtotal</p>
                <p>N 30,000</p>
              </div>
              <div className="flex gap-6">
                <p>Delivery</p>
                <div>
                  <label className="flex gap-1 items-center">
                    <input type="radio" name="quick" id="quick" /> Quick
                    Delivery:N5,000
                  </label>
                  <label className="flex gap-1 items-center custom-radio">
                    <input type="radio" name="quick" id="store" /> Store pick up
                  </label>
                </div>
              </div>
              <div className="flex gap-6">
                <p>Address</p>
                <div>
                  <p className="flex gap-1 items-center">Banex Plaza.Wuse</p>
                  <Link href="/" className="flex gap-1 items-center">
                    Change Address
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <p>Total</p>
                <p>N 35,000</p>
              </div>
              <Link
                href="/checkout"
                className="w-[90%] mx-auto text-white bg-[#b1034f] rounded-md py-2 text-center"
              >
                Checkout
              </Link>
            </article>
          </main>
        </main>
      </div>
    </section>
  );
}

export default page;
