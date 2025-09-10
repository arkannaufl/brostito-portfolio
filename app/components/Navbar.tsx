import { Link, useLocation } from "react-router";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const getWorksLink = () => {
    return location.pathname === "/" ? "#projects" : "/#projects";
  };

  const getContactLink = () => {
    return location.pathname === "/" ? "#contact" : "/#contact";
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
              {/* Logo Icon */}
              <div className="relative">
                <img
                  src="/assets/main-star-icon.svg"
                  alt="Main Star Icon"
                  className="w-9 h-9"
                />
              </div>
              {/* Brand Name */}
              <span className="text-lg font-regular text-[#363636]">
                Brostito Antares
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/") 
                    ? "text-gray-800" 
                    : "text-[#C7C7C7] hover:text-[#888888]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about") 
                    ? "text-gray-800" 
                    : "text-[#C7C7C7] hover:text-[#888888]"
                }`}
              >
                About Me
              </Link>
              <a
                href={getWorksLink()}
                className="px-3 py-2 text-sm font-medium transition-colors text-[#C7C7C7] hover:text-[#888888]"
              >
                Works
              </a>
              <a
                href={getContactLink()}
                className="px-3 py-2 text-sm font-medium transition-colors text-[#C7C7C7] hover:text-[#888888]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-[#C7C7C7] hover:text-[#888888] focus:outline-none focus:text-[#888888] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                isActive("/") 
                  ? "text-gray-800 bg-gray-50" 
                  : "text-[#C7C7C7] hover:text-[#888888] hover:bg-gray-50"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                isActive("/about") 
                  ? "text-gray-800 bg-gray-50" 
                  : "text-[#C7C7C7] hover:text-[#888888] hover:bg-gray-50"
              }`}
              onClick={closeMenu}
            >
              About Me
            </Link>
            <a
              href={getWorksLink()}
              className="block px-3 py-2 text-base font-medium rounded-md transition-colors text-[#C7C7C7] hover:text-[#888888] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Works
            </a>
            <a
              href={getContactLink()}
              className="block px-3 py-2 text-base font-medium rounded-md transition-colors text-[#C7C7C7] hover:text-[#888888] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
