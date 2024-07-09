import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className="bg-[rgba(204,204,204,.3)] py-4">
      <article className="max-w-xl mx-auto w-[90%] px-2 bg-white rounded-md">
        <div className="px-2 py-4 rounded-md">
          <p className="text-xl font-bold text-[#b1034F] text-center mb-4">
            Checkout
          </p>
          <article className="px-4 flex flex-col gap-4 sm:gap-2">
            <div className="flex justify-between gap-2 font-normal text-lg">
              <p className="basis-[65%] text-sm sm:text-base">Order Number</p>
              <div className="flex gap-2 items-center">
                <p className="text-sm sm:text-base">437848948</p>
              </div>
            </div>
            <div className="flex justify-between font-normal text-lg">
              <p className="text-sm sm:text-base">Date</p>
              <p className="text-sm sm:text-base">DD/MM/YYYY</p>
            </div>
            <div className="flex justify-between font-normal text-lg">
              <p className="text-sm sm:text-base">Payment Method</p>
              <p className="text-sm sm:text-base text-left">Bank transfer</p>
            </div>
            <div className="flex justify-between font-normal text-lg">
              <p className="text-sm sm:text-base">Total</p>
              <p className="text-sm sm:text-base text-left">N 35,000</p>
            </div>
            <Link
              href="/success"
              className="w-full block mx-auto mt-4 text-white bg-[#b1034f] rounded-md py-2 text-center"
            >
              Pay Now
            </Link>
          </article>
        </div>
      </article>
    </div>
  );
}

export default page