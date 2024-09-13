import React from "react";
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="md:w-[80vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
      <form action="" className=" flex items-center justify-center">
        <input
          type="search"
          id="search"
          name="search"
          className="py-5 px-3 md:w-[40vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 bg-bgColor"
          placeholder="Search your assest...."
        />
        <IoIosSearch className="text-3xl sm:text-5xl text-gray-500 -ml-12" />
      </form>
    </div>
  );
};

export default HeroSection;
