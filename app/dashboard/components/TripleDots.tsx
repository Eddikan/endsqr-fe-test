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
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowOptions(!showOptions);
        }}
      >
        <Image src="/tripleDots.svg" alt="dots" fill />
      </div>{" "}
      {showOptions && (
        <div className=" z-10 absolute top-6 right-7 bg-white flex flex-col ">
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {[
                {
                  icon: "eye.svg",
                  name: "View Details",
                },
                {
                  icon: "personX.svg",
                  name: "Blacklist User",
                },
                {
                  icon: "personCheck.svg",
                  name: "Activate User",
                },
              ].map((opt, optIndex) => (
                <li
                  key={optIndex}
                  className="cursor-pointer flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-sm"
                >
                    <Image src={`/${opt.icon}`}  height={15}
                      width={15} alt="logo" />
                  <div>{opt.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
