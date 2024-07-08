import Link from "next/link";

function page() {
  return (
    <section className="bg-[rgba(204,204,204,.3)] py-12 px-4">
      <div className="lg:w-[40%] md:w-[60%] sm:w-[80%] mx-auto bg-white rounded-md p-2">
        <p className="text-3xl font-bold text-center text-[#b1034F] mb-2 mt-2">
          Yay!!
        </p>
        <main className="px-8 lg:px-12 mt-4">
          <p className="text-lg font-medium text-center">
            Your order with order number 437848948 has been placed successfully
          </p>
          <Link
            href="/"
            className="w-full block mx-auto mt-4 text-white bg-[#b1034f] rounded-md py-2 text-center mb-6"
          >
            Go to Homepage
          </Link>
        </main>
      </div>
    </section>
  );
}

export default page;
