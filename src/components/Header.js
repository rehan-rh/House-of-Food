import { useState } from "react";
import Logo from "../assets/img/food_villa.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LoggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <Link to="/">
      <img
        data-testid="logo"
        className="h-16 sm:h-20 md:h-24 transition-transform duration-300 hover:scale-105"
        alt="logo"
        src={Logo}
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg sticky top-0 z-20">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo Section */}
        <div className="mb-4 sm:mb-0">
          <Title />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row items-center text-white font-medium">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-yellow-300 transition-colors"
                data-testid="cart"
              >
                Cart-{cartItems.length}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Logout Button */}
        <div className="mt-4 sm:mt-0">
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition-colors"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition-colors"
              onClick={() => setIsLoggedIn(true)}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
