import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold my-14">Photo Gallery</h1>
      <div>
        {/* image card */}
        <div className="rounded-lg bg-white shadow-lg p-2">
          <div className="w-full h-[200px] overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/28201015/pexels-photo-28201015/free-photo-of-a-large-rock-on-a-hill-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="asset"
              className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer"
            />
          </div>
          <p className="font-semibold text-white bg-black w-fit rounded-full py-1 px-1 text-sm mt-3">
            @sin-07
          </p>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h3 className="text-lg font-semibold">Mountain</h3>
              <p className="text-gray-500">Price: $20</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
              <IoIosHeart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
