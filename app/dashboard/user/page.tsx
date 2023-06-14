"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
export default function Page() {
  const router = useRouter();
  return (
    <div className=" max-w-[90vw] max-h-screen overflow-auto">
      {/* backwards navigation  */}
      <div className="flex">
        <div
          className="flex  items-center text-dashboard gap-x-3 cursor-pointer"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          <div className="relative w-5 h-5 ">
            <Image src="/backArrow.svg" fill alt="logo" />
          </div>
          <div>Back to users</div>
        </div>
      </div>
      {/* header  */}
      <div className="flex justify-between mt-6">
        <div className="text-dashboardBold text-2xl">User Details</div>
        <div className="flex gap-2 md:gap-4">
          <div className="cursor-pointer border border-[#E51547] text-[#E4033B] p-2 rounded-md text-sm">
            Blacklist User
          </div>

          <div className="border border-[#9BE4E3] text-userText p-2 rounded-md text-sm">
            Activate User
          </div>
        </div>
      </div>
      <div className="navbar mt-9 pt-7 pl-7">
        <div className="flex flex-wrap gap-5">
          <div className="relative w-[100px] h-[100px]">
            <Image src="/avatar1.svg" fill alt="logo" />
          </div>
          <div className="flex justify-center flex-col ">
            <p className="text-dashboardBold text-2xl mb-0.5">Grace Effiom</p>
            <p className=" text-dashboard text-sm ">LSQFf587g90</p>
          </div>
          <div className="flex justify-center flex-col border-x border-[#EAEBEF] md:mx-2 px-5  md:px-7">
            <p className="text-dashboardBold text-sm mb-1">User’s Tier</p>
            <div className=" flex gap-1 ">
              <div className="relative w-5 h-5">
                <Image src="/activeRating.svg" fill alt="logo" />
              </div>
              <div className="relative w-5 h-5">
                <Image src="/ratings.svg" fill alt="logo" />
              </div>
              <div className="relative w-5 h-5">
                <Image src="/ratings.svg" fill alt="logo" />
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col ">
            <p className="text-dashboardBold text-xl mb-0.5">₦200,000.00</p>
            <p className=" text-dashboard text-sm ">9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between pr-8 gap-y-3 gap-x-6">
          {[
            "General Details",
            "Documents",
            "Bank Details",
            "Loans",
            "Savings",
            "App and System",
          ].map((tab, tabIndex) => (
            <div
              key={tabIndex}
              className="hover:border-b-2 px-5  border-userText text-gray-500 hover:text-userText cursor-pointer"
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 navbar p-7">
        <p className="text-dashboardBold text-base">Personal Information</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-6 gap-4">
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              full Name
            </p>

            <p className=" text-dashboard font-medium text-base">
              Grace Effiom
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Phone Number
            </p>

            <p className=" text-dashboard font-medium text-base">07060780922</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Email Address
            </p>

            <p className=" text-dashboard font-medium text-base">
              grace@gmail.com
            </p>
          </div>{" "}
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Bvn
            </p>

            <p className=" text-dashboard font-medium text-base">07060780922</p>
          </div>{" "}
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Gender
            </p>

            <p className=" text-dashboard font-medium text-base">Female</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-6 gap-4">
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Marital status
            </p>

            <p className=" text-dashboard font-medium text-base">Single</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Children
            </p>

            <p className=" text-dashboard font-medium text-base">None</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Type of residence
            </p>

            <p className=" text-dashboard font-medium text-base">
              Parent’s Apartment
            </p>
          </div>{" "}
        </div>
        <hr className="my-7" />
        <p className="text-dashboardBold text-base">Education and Employment</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6 gap-4">
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              level of education
            </p>

            <p className=" text-dashboard font-medium text-base">B.Sc</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              employment status
            </p>

            <p className=" text-dashboard font-medium text-base">Employed</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              sector of employment
            </p>

            <p className=" text-dashboard font-medium text-base">FinTech</p>
          </div>{" "}
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Duration of employment
            </p>

            <p className=" text-dashboard font-medium text-base">2 years</p>
          </div>{" "}
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              office email
            </p>

            <p className=" text-dashboard font-medium text-base">
              grace@lendsqr.com
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Monthly income
            </p>

            <p className=" text-dashboard font-medium text-base">
              ₦200,000.00- ₦400,000.00
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              loan repayment
            </p>

            <p className=" text-dashboard font-medium text-base">40,000</p>
          </div>
        </div>
        <hr className="my-7" />
        <p className="text-dashboardBold text-base">Socials</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6 gap-4">
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Twitter
            </p>

            <p className=" text-dashboard font-medium text-base">
              @grace_effiom
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Facebook
            </p>

            <p className=" text-dashboard font-medium text-base">
              Grace Effiom
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Instagram
            </p>

            <p className=" text-dashboard font-medium text-base">
              @grace_effiom
            </p>
          </div>{" "}
        </div>

        <hr className="my-7" />
        <p className="text-dashboardBold text-base">Guarantor</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6 gap-4">
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              full Name
            </p>

            <p className=" text-dashboard font-medium text-base">Debby Ogana</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Phone Number
            </p>

            <p className=" text-dashboard font-medium text-base">07060780922</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Email Address
            </p>

            <p className=" text-dashboard font-medium text-base">
              debby@gmail.com
            </p>
          </div>{" "}
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Relationship
            </p>

            <p className=" text-dashboard font-medium text-base">Sister</p>
          </div>{" "}
        </div>

        <hr className="my-7" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-16 gap-4">
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              full Name
            </p>

            <p className=" text-dashboard font-medium text-base">Debby Ogana</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Phone Number
            </p>

            <p className=" text-dashboard font-medium text-base">07060780922</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Email Address
            </p>

            <p className=" text-dashboard font-medium text-base">
              debby@gmail.com
            </p>
          </div>{" "}
          <div className="flex flex-col">
            <p className=" text-dashboard font-normal text-xs uppercase mb-1">
              Relationship
            </p>

            <p className=" text-dashboard font-medium text-base">Sister</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
