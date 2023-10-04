import React from "react";
import CarouselFeatured from "../../../components/home/CarouselFeatured";
// import TalesOfStartups from "../../../components/home/tales-of-startups";

const HomePage = () => {
  return (
    <>
      <CarouselFeatured />
      {/* <TalesOfStartups /> */}
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </>
  );
};

export default HomePage;