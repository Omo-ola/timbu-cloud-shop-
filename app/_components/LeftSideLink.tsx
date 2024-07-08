const LeftSideLink = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-sm bg-[#ccc] p-2 rounded-lg">
        <p className="font-bold text-base">Event</p>
        <p className={`font-semibold cursor-pointer`}>All</p>
        <p className={`font-semibold cursor-pointer`}>Wedding</p>
        <p className={`font-semibold cursor-pointer`}>Birthday</p>
        <p className={`font-semibold cursor-pointer`}>Anniversary</p>
        <p className={`font-semibold cursor-pointer`}>Desserts</p>
      </div>
      <div className="flex flex-col gap-2 text-sm bg-[#ccc] p-2 rounded-lg">
        <p className="font-bold text-base">Category</p>
        <p className={`font-semibold cursor-pointer`}>All</p>
        <p className={`font-semibold cursor-pointer`}>Single layer</p>
        <p className={`font-semibold cursor-pointer`}>Tiered cake</p>
      </div>
      <div className="flex flex-col gap-2 text-sm bg-[#ccc] p-2 rounded-lg">
        <p className="font-bold text-base">Sizes</p>
        <div className="flex flex-wrap gap-4">
          <p
            className={`font-bold cursor-pointer border-2 border-[#be2d6c] text-[#be2d6c] py-1 px-2 rounded-sm`}
          >
            8 inch
          </p>
          <p
            className={`font-bold cursor-pointer border-2 border-[#be2d6c] text-[#be2d6c] py-1 px-2 rounded-sm`}
          >
            10 inch
          </p>
          <p
            className={`font-bold cursor-pointer border-2 border-[#be2d6c] text-[#be2d6c] py-1 px-2 rounded-sm`}
          >
            12 inch
          </p>
          <p
            className={`font-bold cursor-pointer border-2 border-[#be2d6c] text-[#be2d6c] py-1 px-2 rounded-sm`}
          >
            16 inch
          </p>
          <p
            className={`font-bold cursor-pointer border-2 border-[#be2d6c] text-[#be2d6c] py-1 px-2 rounded-sm`}
          >
            Cupcakes
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm bg-[#ccc] p-2 rounded-lg">
        <p className="font-bold text-base">Icing</p>
        <p className={`font-semibold cursor-pointer`}>All</p>
        <p className={`font-semibold cursor-pointer`}>Fondant</p>
        <p className={`font-semibold cursor-pointer`}>Buttercream</p>
        <p className={`font-semibold cursor-pointer`}>No King</p>
        <p className={`font-semibold cursor-pointer`}>Desserts</p>
      </div>
    </>
  );
};

export default LeftSideLink;
