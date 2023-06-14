"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function FilterDropDown({
  label,
  tabIndex,
}: {
  label: string;
  tabIndex: number;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState<string>("select");
  return (
    <div
      onBlur={() => {
        setShowOptions(false);
      }}
      onMouseEnter={() => {
        setShowOptions(!showOptions);
      }}
      onMouseLeave={() => {
        setShowOptions(false);
      }}
      tabIndex={tabIndex}
    >
      <label className="text-sm  text-dashboard font-medium  capitalize">
        {label} 
      </label>

      <div className=" gap-x-3 bg-white border border-gray-300  py-2 px-3 rounded-md cursor-pointer">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 font-normal">{value}</p>
          <div className="relative w-4 h-4">
            <Image src="/downwards.svg" fill alt="logo" />
          </div>
        </div>

        {showOptions && (
          <div className="absolute top-[70px] -left-0 bg-white flex flex-col ">
            <div
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {["new", "old"].map((opt, optIndex) => (
                  <li
                    key={optIndex}
                    className="block px-4 py-2 font-normal text-gray-500 hover:bg-gray-100"
                    onClick={() => {
                      setValue(opt);

                      setShowOptions(false);
                    }}
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
  );
}
