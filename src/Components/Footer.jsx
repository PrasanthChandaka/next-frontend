import { communityLinks, platformLinks, resourcesLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 text-white">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg md:text-xl mb-4 bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
            Resources
          </h2>
          {resourcesLinks.map((each) => (
            <div key={each.text} className="flex">
              <a
                className="mb-3 text-neutral-300 hover:text-white transition-all duration-75"
                href={each.href}
              >
                {each.text}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg md:text-xl mb-4 bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
            Platform
          </h2>
          {platformLinks.map((each) => (
            <div key={each.text} className="flex">
              <a
                className="mb-3 text-neutral-300 hover:text-white transition-all duration-75"
                href={each.href}
              >
                {each.text}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-lg md:text-xl mb-4 bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
            Community
          </h2>
          {communityLinks.map((each) => (
            <div key={each.text} className="flex">
              <a
                className="mb-3 text-neutral-300 hover:text-white transition-all duration-75"
                href={each.href}
              >
                {each.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
