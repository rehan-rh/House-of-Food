import React, { useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId } = restaurant.info;
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-64 m-4 p-4">
      {/* Restaurant Image */}
      <img
        alt={name}
        src={IMG_CDN_URL + cloudinaryImageId}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Restaurant Info */}
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-xl text-gray-800 mb-2 text-center">{name}</h2>
        <p className="text-sm text-gray-500 text-center mb-2">{locality}</p>
        <p className="text-sm text-gray-500 text-center mb-2">{cuisines.join(", ")}</p>
        <p className="text-yellow-500 font-bold text-sm mb-2">{avgRating} ⭐</p>

        {/* User Information */}
        <div className="border-t-2 border-gray-200 pt-2 mt-4 w-full text-center">
          <p className="text-gray-700 font-semibold text-lg">
            {user.name}
          </p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
