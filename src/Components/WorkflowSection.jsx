import { checklistItems } from "@/constants";
import Image from "next/image";
import React from "react";

const WorkflowSection = () => {
  return (
    <div>
      <h1 className="heading2">
        Accelerate your <span className="span">coding workflow.</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10 sm:gap-5">
        <div>
          <Image
            className="w-full"
            src="/code.jpg"
            alt="code"
            width={1000}
            height={1000}
          ></Image>
        </div>
        <div className="flex flex-col justify-center gap-10">
          {checklistItems.map((each) => (
            <div key={each.text} className="flex">
              <div className="text-green-500 bg-neutral-900 rounded-full inline-block w-fit h-fit p-2 mx-5">
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
              </div>
              <div className="flex flex-col px-2">
                <h1 className="text-white text-lg md:text-xl mb-2">
                  {each.title}
                </h1>
                <p className="text">{each.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
