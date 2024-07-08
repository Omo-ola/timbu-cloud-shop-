import Link from "next/link";

function page() {
  return (
    <section className="bg-[rgba(204,204,204,.3)] py-4">
      <div className="lg:w-[70%] md:w-[90%] sm:w-[90%] mx-auto bg-white rounded-md p-2">
        <p className="text-3xl font-bold text-center text-[#b1034F] mb-2">
          Checkout
        </p>
        <main>
          <p>
            Your order with order number 437848948 has been placed successfully
          </p>
          <Link
            href="/"
            className="w-full block mx-auto mt-4 text-white bg-[#b1034f] rounded-md py-2 text-center"
          >
            Go to Homepage
          </Link>
        </main>
      </div>
    </section>
  );
}

export default page;
