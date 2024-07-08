"use client";
import { useState } from "react";
import CakeCard from "../_components/CakeCard";

const items = Array.from({ length: 45 }, (_, index) => `Item ${index + 1}`);
export const Shop = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 items-center gap-8 justify-center">
        {paginatedItems.map((item) => {
          return <CakeCard key={item} />;
        })}
      </main>
      <div className=" w-[70%] mx-auto">
        <div className="flex justify-center mt-8 text-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`px-2 py-1 mx-1 border-2 border-[#b1034F] rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#b1034f] text-white"
                  : "bg-white text-[#b1034f]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
