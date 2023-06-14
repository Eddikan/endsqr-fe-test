"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FilterInput from "@/app/components/FilterInput";
import FilterDropDown from "@/app/components/FilterDropDown";
export default function Filter() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div
      className="relative"
      tabIndex={0}
      onMouseLeave={() => {
        setShowOptions(false);
      }}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <Icon icon="ion:filter-sharp" />
      </div>
      {/* filter popup  */}
      {showOptions && (
        <div className="z-10 bg-white absolute top-3 -left-28 border border-filterColor rounded-sm px-3 py-5 flex flex-col gap-5">
          <FilterDropDown label="organisation" tabIndex={0} />
          <FilterInput label="Username" name="Username" />
          <FilterInput label="Email" name="email" />
          <FilterInput label="Date" name="date" type="date" />
          <FilterInput label="Phone Number" name="phone" />
          <FilterDropDown label="status" tabIndex={1}/>

          <div className="flex gap-2 md:gap-4 mt-2">
            <div className="cursor-pointer  border border-dashboard text-dashboard p-2 rounded-md text-sm px-8">
              Reset
            </div>

            <div className="cursor-pointer  bg-primary text-white p-2 rounded-md text-sm px-8">
              Filter
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
