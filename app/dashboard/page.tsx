import React from "react";
import Image from "next/image";
import "../global.scss";
import Filter from "./components/Filter";
import TripleDots from "./components/TripleDots";
import Pagination from "./components/Pagination";
export default function Dashboard() {
  const tableData = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      date: "May 15, 2020 10:00 AM",
      status: "inactive",
    },
    {
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phone: "08160780928",
      date: "Apr 30, 2020 10:00 AM",
      status: "pending",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "pending",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "active",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "08060780900",
      date: "Apr 10, 2020 10:00 AM",
      status: "active",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "08060780900",
      date: "Apr 10, 2020 10:00 AM",
      status: "inactive",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "inactive",
    },
  ];
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
        <table className="table-auto w-full  overflow-auto text-dashboard border-separate  border-spacing-y-5 ">
          <thead>
            <tr className="text-left text-sm capitalize font-semibold ">
              <th>
                <div className="flex gap-x-3 items-center">
                  <div>organization</div>
                  <div>
                    <Filter />
                  </div>
                </div>
              </th>
              <th>
                {" "}
                <div className="flex gap-x-3 items-center">
                  <div>username</div>
                  <div>
                    <Filter />
                  </div>
                </div>
              </th>
              <th>
                {" "}
                <div className="flex gap-x-3 items-center">
                  <div>email</div>
                  <div>
                    <Filter />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex gap-x-3 items-center">
                  <div>phone number</div>
                  <div>
                    <Filter />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex gap-x-3 items-center">
                  <div>date joined</div>
                  <div>
                    <Filter />
                  </div>
                </div>
              </th>
              <th>
                {" "}
                <div className="flex gap-x-3 items-center">
                  <div>status</div>
                  <div>
                    <Filter />
                  </div>
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {tableData.map((data, dataIndex) => {
              return (
                <tr key={dataIndex} className="">
                  <td>{data.organization}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.date}</td>
                  <td>
                    <span
                      className={`rounded-full p-2 px-4 capitalize text-center
                    ${
                      data.status === "inactive"
                        ? " bg-[#F5F5F7] text-[#545F7D]"
                        : data.status === "blacklisted"
                        ? " text-red-600 bg-[#FDE6EB]"
                        : data.status === "pending"
                        ? "bg-[#FDF7E5] text-yellow-600"
                        : data.status === "active"
                        ? "bg-[#F3FCF6] text-green-600"
                        : " bg-red-300  "
                    }
                    
                    `}
                    >
                      {data.status}
                    </span>
                  </td>
                  <td>
                    <div className="ml-5">
                      <TripleDots />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}
