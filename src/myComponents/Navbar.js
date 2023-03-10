import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="text-red-500 sm:text-blue-500 md:text-gray-400 lg:text-yellow-500 max-w-[2640px] mx-auto flex justify-between items-center p-4 ">
      {/* Left side */}
      <div className=" left flex items-center ">
        <div className="cursor-pointer " onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} className="translate-y-0.5"/>
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <strong className="">Eats</strong>
        </h1>
        <div className=" hidden md:flex bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 font-bold">
            Delivery
          </p>
          <p className="p-2 font-bold">Pickup</p>
        </div>
      </div>

      {/* Search input */}
      <div className="search bg-gray-200 rounded-full flex items-center px-2 w-[220px] sm:w-[400px] lg:w-[500px] border-[2px] border-gray-50 ">
        <AiOutlineSearch size={20} style={{fontWeight:"bolder"}} />
        <input
          type="text"
          placeholder="Seacrh Food"
          className=" bg-transparent p-2 w-full focus:outline-none "
        />
      </div>
      {/* Cart button*/}
      <button className="cart bg-black text-white hidden sm:flex items-center py-2 px-3 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
      {/* <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div> */}

      {/* Side drawer menu⚪ */}

      <div className={nav ? "sideDrawer w-[300px] h-screen bg-black z-10 duration-300 fixed top-0 left-0" : "sideDrawer w-[300px] h-screen bg-black z-10 duration-300 fixed top-0 left-[-100%] "}>
        <AiOutlineClose
          size={30}
          className="text-white absolute right-4 top-4 cursor-pointer animate-bounce"
          onClick={()=>setNav(!nav)}
        />
        <h2 className="text-2xl p-3">
          Best <strong className="">Eats</strong>
        </h2>
        <nav className="">
          <ul className="my-4 ">
            <li className="text-xl flex p-4 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4 translate-y-0.5 " />
              Orders
            </li>
            <li className="text-xl flex p-4 cursor-pointer">
              <MdFavorite size={25} className="mr-4 translate-y-0.5 " />
              Favorites
            </li>
            <li className="text-xl flex p-4 cursor-pointer">
              <FaWallet size={25} className="mr-4 translate-y-0.5 " />
              Wallet
            </li>
            <li className="text-xl flex p-4 cursor-pointer">
              <MdHelp size={25} className="mr-4 translate-y-0.5 " />
              Help
            </li>
            <li className="text-xl flex p-4 cursor-pointer">
              <AiFillTag size={25} className="mr-4 translate-y-0.5 " />
              Promotion
            </li>
            <li className="text-xl flex p-4 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4 translate-y-0.5 " />
              Best One
            </li>
            <li className="text-xl flex p-4 cursor-pointer">
              <FaUserFriends size={25} className="mr-4 translate-y-0.5 " />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
