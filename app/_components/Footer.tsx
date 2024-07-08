import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#efcddc] md:flex  justify-around px-12 py-4 mt-8 pb-10">
      <article className="flex items-center">
        <div className="mb-4">
          <h2 className="text-[#b1034F] text-3xl mb-4 font-semibold">
            VUECAKES
          </h2>
          <div className="flex gap-4 justify-center items-center text-[#b1034F]">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </article>
      <article className="mb-4">
        <p className="font-bold text-2xl mb-4">Working Hour</p>
        <p className="font-bold text-xl mb-2">Open</p>
        <p>Monday - Saturday</p>
        <p>8:00AM to 5:00PM</p>
        <p className="font-bold text-xl mb-2">Closed</p>
        <p>Sunday</p>
      </article>
      <article className="mb-4">
        <p className="font-bold text-2xl mb-4">Useful Links</p>
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className={`hover:text-[#b1034f] text-lg  font-medium `}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`hover:text-[#b1034f] text-lg  font-medium `}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#b1034f] text-lg  font-medium `}
          >
            Contact
          </Link>
        </div>
      </article>
      <article>
        <p className="font-bold text-2xl mb-4">Support</p>
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className={`hover:text-[#b1034f] text-lg  font-medium `}
          >
            Location
          </Link>
          <Link
            href="/"
            className={`hover:text-[#b1034f] text-lg  font-medium `}
          >
            Delivery
          </Link>
          <Link
            href="/"
            className={`hover:text-[#b1034f] text-lg  font-medium `}
          >
            Refund Policy
          </Link>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
