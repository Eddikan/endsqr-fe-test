"use client";
import React, { useState } from "react";
import "../global.scss";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div className=" dashboard-layout ">
      <NavBar
        toggleSideBar={() => {
          setShowMobile(!showMobile);
        }}
      />
      <div className="flex   ">
        <div className=" sm:w-[20%] bg-white">
          <SideBar showMobile={showMobile} />
        </div>
        <div
          className=" sm:w-[80%] px-5 sm:px-8
        bg-dashboardBackground
        "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
