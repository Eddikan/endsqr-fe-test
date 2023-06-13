"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Filter() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="relative"
    tabIndex={0}
    onBlur={() => {
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

      {showOptions && <div className="absolute top-5 -left-20 ">options</div>}
    </div>
  );
}
