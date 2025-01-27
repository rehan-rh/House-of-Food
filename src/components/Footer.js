const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We deliver delicious food from your favorite restaurants straight to your doorstep. Quality and speed are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-yellow-400">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/help" className="hover:text-yellow-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-yellow-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-yellow-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-yellow-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Food Villa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
