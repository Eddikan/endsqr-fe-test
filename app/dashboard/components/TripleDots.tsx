"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function TripleDots() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div
      className="relative "
      tabIndex={0}
      onBlur={() => {
        setShowOptions(false);
      }}
    >
      <div
        className="relative h-4 w-4 cursor-pointer"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <Image src="/tripleDots.svg" alt="dots" fill />
      </div>{" "}
      {showOptions && (
        <div className="absolute z-10 bg-white shadow top-5 -left-16 flex flex-col w-20">
          <div className="py-2   px-3 cursor-pointer border-b border-gray-300">
            Edit
          </div>
          <div className="py-2  px-3 cursor-pointer">Delete</div>
        </div>
      )}
    </div>
  );
}
