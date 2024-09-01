import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <h1 className="heading text-center mx-auto">
        VirtualR build tools <span className="span">for developers</span>
      </h1>
      <p className="text font-normal text-center mt-10 max-w-[800px] mx-auto">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="text-white flex flex-wrap gap-5 items-center w-full justify-center mt-10">
        <button className="btn-primary" type="button">
          Start for free
        </button>
        <button className="btn-secondary" type="button">
          Documentation
        </button>
      </div>

      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-5 mt-20">
        <video
          autoPlay
          loop
          muted
          className="border border-orange-700 shadow-sm shadow-orange-500 rounded-lg"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="border border-orange-700 shadow-sm shadow-orange-500 rounded-lg"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
