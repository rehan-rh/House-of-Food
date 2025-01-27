import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const filterData = (searchText, restaurants) =>
    restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  if (!restaurants) return null;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Search and User Input Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 shadow-md rounded-lg">
        <div className="flex flex-wrap items-center">
          <input
            type="text"
            className="p-2 border rounded-lg border-gray-300 focus:ring focus:ring-green-300 mr-2 mb-2 md:mb-0"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            data-testid="search-btn"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={() => {
              const data = filterData(searchText, restaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

       
      </div>

      {/* Restaurant List Section */}
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {filteredRestaurants.length === 0 ? (
          <h2 className="text-center text-gray-500 text-xl mt-6">
            No Restaurants Found
          </h2>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="transform hover:scale-105 transition duration-300"
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
