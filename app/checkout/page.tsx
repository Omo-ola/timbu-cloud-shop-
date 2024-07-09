import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="bg-[rgba(204,204,204,.3)] py-4">
      <div className="lg:w-[70%] md:w-[90%] sm:w-[90%] mx-auto bg-white rounded-md p-2">
        <p className="text-3xl font-bold text-center text-[#b1034F] mb-2">
          Checkout
        </p>
        <main className="md:flex justify-between p-2">
          <article className="basis-[48%]">
            <section className="flex flex-col gap-3 mb-4">
              <p>Checkout</p>
              <div>
                <label htmlFor="delivery-method">Delivery or Pickup</label>
                <select
                  id="delivery-method"
                  name="delivery-method"
                  className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md focus:outline-none  sm:text-sm"
                >
                  <option value="delivery">Quick Delivery</option>
                  <option value="pickup">Pickup</option>
                </select>
              </div>
              <div>
                <label htmlFor="delivery-date">Delivery date</label>
                <input
                  type="date"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="delivery-date">Delivery Time</label>
                <input
                  type="time"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
            </section>
            <section className="flex flex-col gap-3">
              <p>Billing Address</p>
              <div>
                <label htmlFor="bAddress">Receiver Name</label>
                <input
                  type="text"
                  placeholder="Micheal John"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="bAddress">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Example@gmail.com"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="bAddress">House Address</label>
                <input
                  type="text"
                  placeholder="No 2 John street"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="bAddress">Delivery Address</label>
                <input
                  type="text"
                  placeholder="Delivery Address"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bAddress">Order Notes (optional)</label>
                <input
                  type="text"
                  placeholder="Micheal John"
                  className="w-full border py-2 px-2 border-gray-300 bg-white rounded-md focus:outline-none"
                />
              </div>
            </section>
          </article>
          <article className="basis-[48%] px-2">
            <div className="border-2 px-2 py-4 border-[#b1034F] rounded-md">
              <p className="text-xl font-bold text-[#b1034F] mb-4">
                Your Order
              </p>
              <article className="px-4 flex flex-col gap-4 sm:gap-2">
                <div className="flex justify-between font-bold text-lg">
                  <p>Product</p>
                  <p>Amount</p>
                </div>
                <div className="flex justify-between gap-2 font-normal text-lg">
                  <p className="basis-[65%] text-sm sm:text-base">
                    Red velvet single layer cake 10 inches
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm sm:text-base">x2</p>
                    <p className="text-sm sm:text-base">N30,000</p>
                  </div>
                </div>
                <div className="flex justify-between font-normal text-lg">
                  <p className="text-sm sm:text-base">Subtotal</p>
                  <p className="text-sm sm:text-base">N30,000</p>
                </div>
                <div className="flex justify-between font-normal text-lg">
                  <p className="text-sm sm:text-base">Delivery</p>
                  <p className="text-sm sm:text-base text-left">Quick:N5000</p>
                </div>
                <div className="flex justify-between font-normal text-lg">
                  <p>Total</p>
                  <p className="font-bold">N 35,000</p>
                </div>
                <Link
                  href="/checkout/payment"
                  className="w-full block mx-auto mt-4 text-white bg-[#b1034f] rounded-md py-2 text-center"
                >
                  Order Now
                </Link>
              </article>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}

export default page;
