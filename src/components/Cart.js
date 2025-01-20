import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">
          Cart Items - {cartItems.length}
        </h1>
        <button
          className={`${
            cartItems.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500"
          } text-white px-4 py-2 rounded shadow hover:bg-red-600 transition`}
          onClick={handleClearCart}
          disabled={cartItems.length === 0}
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items Section */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <FoodItem
              key={item.card.info.id || index} // Fallback for index if ID is missing
              item={item}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty. Add items to see them here.
          </div>
        )}
      </div>

      {/* Continue Shopping Button */}
      {cartItems.length === 0 && (
        <div className="mt-8 text-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
            onClick={() => {
              window.location.href = "/"; // Redirect to home or menu page
            }}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
