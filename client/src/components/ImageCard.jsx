import React from "react";

const ImageCard = ({ id, img, title, price, author, icon1, icon2 }) => {
  return (
    <>
      <div className="rounded-lg bg-white shadow-lg p-2">
        <div className="w-full h-[200px] overflow-hidden rounded-2xl">
          <img
            src={img}
            alt="asset"
            className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer"
          />
        </div>
        <p className="font-semibold text-white bg-black w-fit rounded-full py-1 px-1 text-sm mt-3">
          {"@"+author}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">{price}</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            {icon1}
            {icon2}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
    