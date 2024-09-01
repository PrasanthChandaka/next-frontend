import { testimonials } from "@/constants";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="pb-20 border-b border-neutral-700">
      <h1 className="heading2">What People are saying</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
        {testimonials.map((each) => (
          <div
            className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-md"
            key={each.user}
          >
            <p className="text">{each.text}</p>
            <div className="flex my-5 items-start">
              <Image
                src={each.image}
                height={50}
                width={50}
                alt={each.user}
                className="rounded-full"
              ></Image>
              <div className="flex flex-col gap-1 px-5 text-balance">
                <p className="text">{each.user}</p>
                <p className="text-sm text-neutral-300 font-serif">
                  {each.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
