import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";


interface CartItem {
  name: string;
  price: string;
  path: string;
}

function CakeCard({ name, price, path }: CartItem) {
  return (
    <div className="w-[90%] mx-auto md:w-[250px]">
      <div className="relative w-full h-[230px]">
        <Image
          src={`/images/${path}.jpg`}
          fill
          alt="cake image"
          className="rounded-sm"
        />
      </div>

      <div className="flex justify-between items-center mt-2 font-bold">
        <p className="">{name}</p>
        <div>
          <CiHeart />
        </div>
      </div>
      <p className="font-semibold mb-2">{price}</p>
      <div className="flex gap-3">
        <button className="bg-[#b1034f] w-full text-white font-bold rounded-md">
          Buy now
        </button>
        <div className="flex items-center text-lg">
          <Link href={"/cart"}>
            <PiShoppingCartThin />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CakeCard;
