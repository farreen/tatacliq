import React from "react";
import useRedirect from "../../custom-hooks/common/useRedirect";
import slide1 from "../../assets/images/slide1.jpg";

const HomeSmallCard = ({ _ }) => {
  const redirectTo = useRedirect();
//   const redirectionHandler = (category = "") =>
//     redirectTo(`tales-of-startups/${category}`);
  return (
    <div
      className={`flex flex-col items-start rounded-lg m-2 p-4 hover:shadow-2xl cardItem`}
    >
      <div className="flex justify-between w-full">
        <h3 className="text-xl text-gray-700 font-semibold">
        <img class="rounded-t-lg" src={slide1} alt="" />
          {/* {_.industryName ?? ""} */}
        </h3>
        <span
        //   onClick={() =>
        //     redirectionHandler(_?.industryName.toLocaleLowerCase() ?? "")
        //   }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
        </span>
      </div>
      {/* <p className="text-gray-500 text-lg">cagr : {_?.cagr}%</p>
      <p className="text-gray-500 text-lg">india : {_?.size?.india} Billon</p>
      <p className="text-gray-500 text-lg">global : {_?.size?.global} Billon</p> */}
      <div className="flex justify-center gap-2">
        {/* {_?.bigPlayers?.map((_i) => (
          <span
            className={`px-2 rounded-3xl ${_?.color} shadow-xl text-white text-md font-semibold`}
          >
            {_i}
          </span>
        ))} */}
      </div>
    </div>
  );
};

export default HomeSmallCard;
