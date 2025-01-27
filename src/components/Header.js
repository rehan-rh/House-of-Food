import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img
        data-testid="logo"
        className="h-14 sm:h-16 transition-transform duration-300 scale-[1.8]"
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
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3 sm:p-4">
        {/* Logo Section */}
        <div>
          <Title />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center">
          <ul className="flex gap-6 text-white text-sm sm:text-base font-medium">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-blue-400 transition-colors"
                data-testid="cart"
              >
                Cart-{cartItems.length}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Logout Button */}
        <div>
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-full shadow hover:bg-red-600 transition-colors"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-1.5 rounded-full shadow hover:bg-green-600 transition-colors"
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
