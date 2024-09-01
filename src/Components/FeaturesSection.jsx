import { features } from "@/constants";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="py-20 border-b border-neutral-700">
      <div className="bg-neutral-900 rounded-full px-3 py-1 w-fit mx-auto">
        <p className="bg-orange-500 bg-clip-text text-transparent text-sm font-semibold">
          FEATURE
        </p>
      </div>
      <h1 className="heading2 mb-20 mx-auto">
        Easily build <span className="span">your code</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {features.map((each, index) => (
          <div className="flex" key={index}>
            <div className="text-orange-700 mx-5 bg-neutral-900 p-2 h-fit w-fit rounded-full">
              {each.icon}
            </div>

            <div>
              <h1 className="text-white text-lg md:text-lg font-semibold mb-5">
                {each.text}
              </h1>
              <p className="text p-2 mb-14">{each.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
