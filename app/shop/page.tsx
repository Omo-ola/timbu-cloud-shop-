import CakeCard from "../_components/CakeCard";
import { Shop } from "../_ui/Shop";

const page = () => {
  return (
    <article>
      <p className="text-lg font-bold mb-4 text-center">
        Showing 1 - 12 of 45 items
      </p>
      <Shop />
    </article>
  );
};

export default page;
