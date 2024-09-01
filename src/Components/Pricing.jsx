import { pricingOptions } from "@/constants";
import React from "react";

const Pricing = () => {
  return (
    <div className="">
      <h1 className="heading2 mb-10">Pricing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pricingOptions.map((each) => (
          <div
            className="border border-neutral-700 shadow-neutral-700 p-5 rounded-xl"
            key={each.title}
          >
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl">
              {each.title}
              {each.title === "Pro" && (
                <span className="text-xl bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
                  (Most Popular)
                </span>
              )}
            </h2>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl my-10">
              {each.price}
              <span className="text-neutral-400 text-lg"> /Month</span>
            </h1>
            <ul className="list-none">
              {each.features.map((item, index) => (
                <li
                  key={index}
                  className="text-white flex gap-2 mb-8 text-sm md:text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-check"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="p-3 border border-orange-900 w-full text-white text-xl rounded-md"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
