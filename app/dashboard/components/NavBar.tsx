"use client";

import React from "react";
import Image from "next/image";
import SearchComponent from "./SearchComponent";
import "../../global.scss";
import { Icon } from "@iconify/react";
interface Props {
  toggleSideBar: () => void;
}
export default function NavBar({ toggleSideBar }: Props) {
  return (
    <div className="w-full py-3 sm:py-5 pl-4 sm:pl-7 pr-10 flex justify-between items-center navbar">
      <div className="relative  h-6 w-24 sm:w-36 sm:h-10">
        <Image src="/logo.svg" fill alt="logo" />
      </div>

      <div className="hidden sm:block mr-72">
        <SearchComponent
          onSearch={(e: string) => {
            console.log("search", e);
          }}
        />
      </div>

      <div className=" flex gap-x-4 items-center cursor-pointer">
        <p className="hidden sm:block text-[#213F7D] underline mr-5">Docs</p>
        <Image src={"/bell2.png"} height={25} width={25} alt="logo" />
        <Image
          src={"/girl.svg"}
          height={40}
          width={40}
          className=" rounded-full"
          alt="logo"
        />{" "}
        <p className="text-[#213F7D]">Adedeji</p>
        <Image
          src={"/down-arrow.svg"}
          height={10}
          width={10}
          className=" rounded-full"
          alt="logo"
        />{" "}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <Icon icon="iconamoon:menu-burger-horizontal-bold" width={20} />
        </div>
      </div>
    </div>
  );
}
