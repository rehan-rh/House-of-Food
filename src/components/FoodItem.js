import { IMG_CDN_URL } from "../Config";

const FoodItem = ({ item }) => {
  // Destructure item properties from card.info
  const {
    category = "Category Unavailable",
    imageId = "",
    description = "No description available",
    price = 0,  // Default price if not provided
  } = item.card.info || {};  // Destructuring item properties from card.info

  console.log("Item Info:", item.card.info);  // Debugging log to check item structure

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-64 m-4 p-4">
      {imageId && (
        <img 
          alt={category} 
          src={`${IMG_CDN_URL}${imageId}`} 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl text-gray-800 mb-2 text-center">{category}</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
        <p className="text-green-600 font-semibold text-lg">₹{(price / 100).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
