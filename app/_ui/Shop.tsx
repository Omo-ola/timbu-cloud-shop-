"use client";
import { useState } from "react";
import CakeCard from "../_components/CakeCard";

interface CartItem {
  name: string;
  price: string;
  path: string;
}

const carts: CartItem[] = [
  { name: "Chocolate Cake", price: "25,000", path: "cake-1" },
  { name: "Red velvet Cake", price: "15,000", path: "cake-2" },
  { name: "New-wed Cake", price: "80,000", path: "cake-3" },
  { name: "Choco drip Cake", price: "20,000", path: "cake-4" },
  { name: "Vanilla Cake", price: "15,000", path: "cake-5" },
  { name: "Vanilla 10 Cake", price: "25,000", path: "cake-6" },
  { name: "Strawberry Cake", price: "12,000", path: "cake-7" },
  { name: "Birthday Special", price: "22,000", path: "cake-8" },
  { name: "Fruit deluxe", price: "30,000", path: "cake-9" },
  { name: "Happy Birthday", price: "25,000", path: "cake-10" },
  { name: "12 Cupcakes", price: "8,000", path: "cake-11" },
  { name: "Cake dessert", price: "28,000", path: "cake-12" },
  { name: "Red velvet Cake", price: "15,000", path: "cake-2" },
  { name: "Chocolate Cake", price: "25,000", path: "cake-1" },
  { name: "Fruit deluxe", price: "30,000", path: "cake-9" },
  { name: "Vanilla 10 Cake", price: "25,000", path: "cake-6" },
  { name: "Vanilla Cake", price: "15,000", path: "cake-5" },
  { name: "Choco drip Cake", price: "20,000", path: "cake-4" },
  { name: "New-wed Cake", price: "80,000", path: "cake-3" },
  { name: "12 Cupcakes", price: "8,000", path: "cake-11" },
  { name: "Strawberry Cake", price: "12,000", path: "cake-7" },
  { name: "Happy Birthday", price: "25,000", path: "cake-10" },
  { name: "Birthday Special", price: "22,000", path: "cake-8" },
  { name: "Cake dessert", price: "28,000", path: "cake-12" },
  { name: "New-wed Cake", price: "80,000", path: "cake-3" },
  { name: "Chocolate Cake", price: "25,000", path: "cake-1" },
  { name: "Vanilla Cake", price: "15,000", path: "cake-5" },
  { name: "Cake dessert", price: "28,000", path: "cake-12" },
  { name: "Fruit deluxe", price: "30,000", path: "cake-9" },
  { name: "Vanilla 10 Cake", price: "25,000", path: "cake-6" },
  { name: "Red velvet Cake", price: "15,000", path: "cake-2" },
  { name: "Happy Birthday", price: "25,000", path: "cake-10" },
  { name: "Birthday Special", price: "22,000", path: "cake-8" },
  { name: "Choco drip Cake", price: "20,000", path: "cake-4" },
  { name: "Strawberry Cake", price: "12,000", path: "cake-7" },
  { name: "12 Cupcakes", price: "8,000", path: "cake-11" },
  { name: "Chocolate Cake", price: "25,000", path: "cake-1" },
  { name: "Red velvet Cake", price: "15,000", path: "cake-2" },
  { name: "New-wed Cake", price: "80,000", path: "cake-3" },
  { name: "Choco drip Cake", price: "20,000", path: "cake-4" },
  { name: "Vanilla Cake", price: "15,000", path: "cake-5" },
  { name: "Vanilla 10 Cake", price: "25,000", path: "cake-6" },
  { name: "Strawberry Cake", price: "12,000", path: "cake-7" },
  { name: "Birthday Special", price: "22,000", path: "cake-8" },
  { name: "Fruit deluxe", price: "30,000", path: "cake-9" },
];

const items = Array.from({ length: 45 }, (_, index) => `Item ${index + 1}`);
export const Shop = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(carts.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = carts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 items-center gap-8 justify-center">
        {paginatedItems.map((item, index) => {
          return (
            <CakeCard
              key={`${item.name}-${index}`}
              name={item.name}
              price={item.price}
              path={item.path}
            />
          );
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
