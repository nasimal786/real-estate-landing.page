import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_img">
        <img src="./images/hero.jpg" alt="about-img" />
      </div>
      <div className="hero_text">
        <p className="hero_sobha text-amber-500 text-5xl font-bold">
          Sobha One,
          <span className="text-white">
            Dubai's
            <br />
            Hottest New launch!
          </span>
        </p>
        <p className="hero_sobha_p text-white mt-8">
          A Sophisticated Tapestry Across The Skyline Located Just 8 Minutes
          <br /> Away From Burj Khalifa At Meydan In MBR City
        </p>
        <button className="bg-amber-500 px-5 py-3 mt-8 mr-5 rounded text-xl text-white">
          Download Brochure
        </button>
        <button className="bg-white px-5 py-3 rounded text-xl">
          Register Interest
        </button>
      </div>
      <div className="search relative  flex flex-col mx-20 bottom-28">
        <div className="search2 flex flex-row bg-light box-content w-fit rounded-t-xl cursor-pointer">
          <div className="px-16 py-4 font-semibold text-base text-gray-500 rounded-t-xl bg-white">
            Rent
          </div>
          <div className="px-16 py-4 font-semibold text-base text-white">
            Buy
          </div>
          <div className="px-16 py-4 font-semibold text-base text-white">
            Co-Living
          </div>
        </div>
        <div className="search3 sticky flex flex-row justify-between bg-white p-10 rounded-r-xl rounded-bl-xl  drop-shadow-xl">
          <div className="flex flex-col">
            <div className="text-gray-400 mb-3">Location</div>
            <div className="text-night font-bold text-xl">Tbilisi</div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 mb-3">Property Type</div>
            <div className="text-night font-bold text-xl">Private House</div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 mb-3">Property Size</div>
            <div className="text-night font-bold text-xl">
              120 m<sup>2</sup>- 150 m<sup>2</sup>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 mb-3">Property Price Range</div>
            <div className="text-night font-bold text-xl">
              $85,000 - $98,000
            </div>
          </div>

          <button className="bg-amber-500 text-white px-12 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
