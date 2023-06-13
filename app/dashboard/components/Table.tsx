"use client"
import React from "react";
import TripleDots from "./TripleDots";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { useRouter } from "next/navigation";

export default function Table() {
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
  const router = useRouter()
  return (
    <>
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
              <tr key={dataIndex} className="cursor-pointer"
              onClick={()=>{
               router.push('dashboard/user')
              }}
              >
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
      <div className="my-3">
        <Pagination />
      </div>
    </>
  );
}
