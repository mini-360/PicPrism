import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold my-14">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-20">
        {/* image card */}

        <ImageCard
          title="The Mountain"
          author="sin-07"
          price="$20"
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          img="https://images.pexels.com/photos/28201015/pexels-photo-28201015/free-photo-of-a-large-rock-on-a-hill-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ImageCard
          title="The Skit"
          author="sin-07"
          price="$25"
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          img="https://images.pexels.com/photos/27962178/pexels-photo-27962178/free-photo-of-a-group-of-people-standing-on-top-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ImageCard
          title="The Man"
          author="sin-07"
          price="$30"
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          img="https://images.pexels.com/photos/28164876/pexels-photo-28164876/free-photo-of-a-man-climbing-a-rock-face-with-a-backpack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
