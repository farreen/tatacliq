import React from "react";
import CarouselFeatured from "../../../components/home/CarouselFeatured";
import HomeLargeCard from "../../../components/home/HomeLargeCard";
import HomeSmallCard from "../../../components/home/HomeSmallCard";
// data-aos="zoom-in"
const HomePage = () => {
  return (
    <>
      <CarouselFeatured />
      <div className="container grid grid-cols-2 md:grid-cols-2 gap-4 mx-auto p-10 m-10">
        {[1, 2].map((_) => (
          <div className="mx-auto">
            <HomeLargeCard />
          </div>
        ))}
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-8 m-10">
      {[1, 2].map((_) => (
          <div className="mx-auto">
            <HomeSmallCard />
          </div>
        ))}
      </div>
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