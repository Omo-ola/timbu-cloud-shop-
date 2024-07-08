import Image from "next/image";
import cake from "@/public/images/5.png";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
function CakeCard() {
  return (
    <div className="w-[90%] mx-auto md:w-[250px]">
      <div className="relative w-full h-[230px]">
        <Image src={cake} fill alt="cake image" className="rounded-sm" />
      </div>

      <div className="flex justify-between items-center mt-2 font-bold">
        <p className="">Name of Cake</p>
        <div>
          <CiHeart />
        </div>
      </div>
      <p className="font-semibold mb-2">#35,000</p>
      <div className="flex gap-3">
        <button className="bg-[#b1034f] w-full text-white font-bold rounded-md">
          Buy now
        </button>
        <div className="flex items-center text-lg">
          <PiShoppingCartThin />
        </div>
      </div>
    </div>
  );
}

export default CakeCard;
