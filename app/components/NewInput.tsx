"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "../global.scss"
interface Props {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (e: string) => void;
}

export default function Input({
  label,
  name,
  type,
  placeholder,
  onBlur,
  onChange,
  ...rest
}: Props) {
  const [open, setOpen] = useState(false);
  const fieldType = type ? type : "text";
  return (
    <div>
      <label className="text-xs font-medium  capitalize">
        {label ? label : "no label"} *
      </label>
      <div className="w-full bg-[#F9F9F9] flex flex-col border border-gray-300 p-2 rounded-md cursor-pointer relative ">
        <input
          className="text-xs bg-[#F9F9F9] font-medium text-[#040404] outline-none placeholder-[#9295A3] placeholder:capitalize"
          type={
            fieldType === "password" ? (open ? "text" : fieldType) : fieldType
          }
          name={name}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          id={name}
          placeholder={placeholder}
          onBlur={onBlur}
          autoComplete="off"
          {...rest}
        />
        {fieldType === "password" && (
          <span className={`absolute primary cursor-pointer right-2  top-[0.4rem] text-sm`}>
            {open ? (
              <span className="w-4 h-4 " onClick={() => setOpen((prv) => !prv)}>
                Hide
              </span>
            ) : (
              <span className="" onClick={() => setOpen((prv) => !prv)}>
                Show
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
