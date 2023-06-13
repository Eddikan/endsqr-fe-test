"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function Pagination() {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState(100);

  return (
    <div className="flex items-center justify-between text-dashboard">
      <div className="flex items-center gap-2">
        <p>Showing</p>
        <div
          className="relative"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          <div
            className="flex items-center gap-x-3 bg-paginationDropdown p-1 rounded-sm cursor-pointer"
            tabIndex={0}
            onBlur={() => {
              setShowOptions(false);
            }}
          >
            <p>{value}</p>
            <div className="relative w-4 h-4">
              <Image src="/downwards.svg" fill alt="logo" />
            </div>
            {showOptions && (
              <div className="absolute top-6 -left-2 bg-white flex flex-col ">
                <div
                  id="dropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-16 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {[10, 20, 50, 100].map((opt, optIndex) => (
                      <li
                        key={optIndex}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setValue(opt)}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <p>out of 100</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="p-1.5 bg-paginationDropdown rounded-sm cursor-pointer">
          <div className="relative w-4 h-4 ">
            <Image src="/leftward.svg" fill alt="logo" />
          </div>
        </div>

        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>
        <span className="cursor-pointer">3</span>
        <span>...</span>
        <span className="cursor-pointer">15</span>
        <span className="cursor-pointer">16</span>

        <div className="p-1.5 bg-paginationDropdown rounded-sm cursor-pointer">
          <div className="relative w-4 h-4 ">
            <Image src="/rightward.svg" fill alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
