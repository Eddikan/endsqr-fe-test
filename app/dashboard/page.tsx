import React from "react";
import Image from "next/image";
import "../global.scss";
import Table from "./components/Table";
export default function Dashboard() {

  return (
    <div className=" h-screen overflow-auto pl-2  ">
      <p className="mb-9 mt-5 sm:mt-[60px]">Users</p>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {[
          {
            name: "users",
            amount: "2,453",
            icon: "dashboard-users.svg",
          },
          {
            name: "active users",
            amount: "2,453",
            icon: "active-users.svg",
          },
          {
            name: "Users with Loans",
            amount: "12,453",
            icon: "users-loan.svg",
          },
          {
            name: "Users with Savings",
            amount: "102,453",
            icon: "users-savings.svg",
          },
        ].map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="bg-white flex flex-col gap-y-2 dashboard-card py-5 px-6"
          >
            <div className="relative h-10 w-10">
              <Image src={card.icon} alt="users" fill />
            </div>
            <p className=" uppercase ">{card.name}</p>
            <p className="text-dashboardBold text-2xl">{card.amount}</p>
          </div>
        ))}
      </div>
      <div className="mt-9 pb-10 navbar px-7 pt-5 text-sm max-w-[88vw] overflow-auto">
      <Table />
       
      </div>
    </div>
  );
}
