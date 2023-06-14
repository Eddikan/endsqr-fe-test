import React from "react";
import Image from "next/image";
import "../../global.scss";

interface Props {
  showMobile: boolean;
  noMobile: () => void;
}
export default function SideBar({ showMobile, noMobile }: Props) {
  const routes = [
    {
      name: "customers",
      routes: [
        {
          name: "Users",
          icon: "users.svg",
        },
        {
          name: "Guarantors",
          icon: "guarantors.svg",
        },
        {
          name: "Loans",
          icon: "loans.svg",
        },
        {
          name: "Decision Models",
          icon: "decisions.svg",
        },
        {
          name: "Savings",
          icon: "savings.svg",
        },
        {
          name: "Loan Requests",
          icon: "loanRequests.svg",
        },
        {
          name: "Whitelist",
          icon: "whitelist.svg",
        },
        {
          name: "Karma",
          icon: "karma.svg",
        },
      ],
    },
    {
      name: "businesses",
      routes: [
        {
          name: "Organization",
          icon: "organisation.svg",
        },
        {
          name: "Loan Products",
          icon: "loanRequests.svg",
        },
        {
          name: "Savings Products",
          icon: "savingsProducts.svg",
        },
        {
          name: "Fees and Charges",
          icon: "fees.svg",
        },
        {
          name: "Transactions",
          icon: "transactions.svg",
        },
        {
          name: "Services",
          icon: "services.svg",
        },
        {
          name: "Service Account",
          icon: "serviceAccount.svg",
        },
        {
          name: "Settlements",
          icon: "settlements.svg",
        },
        {
          name: "Reports",
          icon: "reports.svg",
        },
      ],
    },
    {
      name: "Settings",
      routes: [
        {
          name: "Preferences",
          icon: "preferences.svg",
        },
        {
          name: "Fees and Pricing",
          icon: "feesAndPricing.svg",
        },
        {
          name: "Audit Logs",
          icon: "audit.svg",
        },
      ],
    },
  ];
  return (
    <div className="max-h-[90vh] overflow-auto text-sm">
      <div
        className={`hidden sm:flex bg-white flex-col pt-10 navbar  ease-in-out duration-300  `}
      >
        <div className="flex pl-7 cursor-pointer gap-x-3 items-center">
          <div>
            <Image
              src={"/organisation.svg"}
              height={18}
              width={18}
              alt="logo"
            />
          </div>
          <p>Switch Organisation</p>
          <div className="hidden xl:block">
            <Image
              src={"/down-arrow-2.svg"}
              height={11}
              width={14}
              alt="logo"
            />
          </div>
        </div>
        <div className="flex pl-7 cursor-pointer gap-x-3 items-center mt-10 mb-8">
          <div>
            <Image src={"/dashboard.svg"} height={18} width={18} alt="logo" />
          </div>
          <p className="text-primaryText">Dashboard</p>
        </div>
        {routes.map((route, routeIndex) => {
          return (
            <div key={routeIndex} className="mb-3 ">
              <div className="text-[#545F7D] mb-5 uppercase text-sm pl-7">
                {route.name}
              </div>
              {route.routes.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="flex pl-7 cursor-pointer gap-x-3 items-center mb-3 py-2 hover:bg-secondaryText hover:border-l-4 hover:border-navActive"
                >
                  <div>
                    <Image
                      src={`/${sub.icon}`}
                      height={18}
                      width={18}
                      alt="logo"
                    />
                  </div>
                  <p className="text-primaryText">{sub.name}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {/* mobile side bar  */}
      <div
        className={`fixed z-10 top-0  flex sm:hidden flex-col pt-10 navbar pr-3 ease-in-out duration-300 max-h-[100vh] overflow-auto  ${
          showMobile ? " -left-0 " : " -left-60 "
        }`}
        tabIndex={0}
        onBlur={() => {
          noMobile();
        }}
      >
        <div className="flex cursor-pointer gap-x-3 items-center pl-3">
          <div>
            <Image
              src={"/organisation.svg"}
              height={18}
              width={18}
              alt="logo"
            />
          </div>
          <p
            className="text-[#213F7D]"
            onClick={() => {
              noMobile();
            }}
          >
            Switch Organisation
          </p>
          <div>
            <Image
              src={"/down-arrow-2.svg"}
              height={11}
              width={14}
              alt="logo"
            />
          </div>
        </div>
        <div
          className="flex cursor-pointer gap-x-3 items-center mt-10 mb-4 pl-3"
          onClick={() => {
            noMobile();
          }}
        >
          <div>
            <Image src={"/dashboard.svg"} height={18} width={18} alt="logo" />
          </div>
          <p className="text-[#7A8CB1]">Dashboard</p>
        </div>
        {routes.map((route, routeIndex) => {
          return (
            <div key={routeIndex}>
              <div className="text-[#545F7D] mt-3  mb-4 pl-3 uppercase">
                {route.name}
              </div>
              {route.routes.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="flex pl-3 cursor-pointer gap-x-3 items-center mb-2 py-1 hover:bg-secondaryText hover:border-l-4 hover:border-navActive"
                  onClick={() => {
                    noMobile();
                  }}
                >
                  <div>
                    <Image
                      src={`/${sub.icon}`}
                      height={18}
                      width={18}
                      alt="logo"
                    />
                  </div>
                  <p className="text-primaryText">{sub.name}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
