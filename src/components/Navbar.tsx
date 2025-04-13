import { useState, useEffect } from "react";
import { LineChart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <LineChart className="w-8 h-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">
              MLPortfolio
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/models"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Models
            </Link>
            <Link
              to="/results"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Results
            </Link>
            <Link
              to="/demo"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-4 space-y-3 bg-gray-900/95 shadow-lg rounded-b-lg`}
            >
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/models"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Models
              </Link>
              <Link
                to="/results"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </Link>
              <Link
                to="/demo"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
