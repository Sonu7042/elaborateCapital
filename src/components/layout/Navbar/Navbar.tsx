import React, { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData, loginNav } from "../../../data/navigation";
import NavDropdown from "./NavDropdown";
import SearchBar from "./SearchBar";
// import logo from "../../../assets/elaborate_logo.png";
// import logo from "../../../assets/EC.svg";
import logo from "../../../assets/ECLogoNew.webp";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "../../../types/navigation";

const MobileNavItemComponent: React.FC<{
  item: NavItem;
  depth?: number;
  onClose: () => void;
}> = ({ item, depth = 0, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const submenuId = useId();
  const hasItems = item.items && item.items.length > 0;

  return (
    <div
      className="w-full"
      onMouseEnter={() => hasItems && setIsOpen(true)}
      onMouseLeave={() => hasItems && setIsOpen(false)}
    >
      {hasItems ? (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={submenuId}
          className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 cursor-pointer ${depth === 0
              ? "text-base font-bold text-gray-900"
              : "text-sm font-medium text-gray-600"
            } ${isOpen ? "bg-gray-50 text-[#3b30ad]" : "hover:bg-gray-50"}`}
        >
          <span>{item.title}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#3b30ad]" : "text-gray-400"}`}
          />
        </button>
      ) : (
        <Link
          to={item.href || "#"}
          onClick={onClose}
          className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 ${depth === 0
              ? "text-base font-bold text-gray-900"
              : "text-sm font-medium text-gray-600"
            } hover:bg-gray-50 hover:text-[#3b30ad]`}
        >
          {item.title}
        </Link>
      )}

      <AnimatePresence>
        {hasItems && isOpen && (
          <motion.div
            id={submenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50/50 rounded-xl mt-1 ml-2"
          >
            <div className="py-2 pl-4 space-y-1">
              {item.items?.map((subItem, index) => (
                <div key={index}>
                  {subItem.items ? (
                    <MobileNavItemComponent
                      item={subItem}
                      depth={depth + 1}
                      onClose={onClose}
                    />
                  ) : (
                    <Link
                      to={subItem.href || "#"}
                      onClick={onClose}
                      className="block px-3 py-2 text-sm text-gray-500 hover:text-[#3b30ad] transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`w-full transition-all bg-[#F7F9F5] duration-300 ${isScrolled ? "py-1" : "py-2"}`}
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="shrink-0 scale-165">
              <img src={logo} alt="Elaborate Capital Logo" className="h-10 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 xl:pl-4 grow">
            {navigationData.map((item, index) =>
              item.items ? (
                <NavDropdown key={index} item={item} />
              ) : (
                <Link
                  key={index}
                  to={item.href || "#"}
                  className="px-4 py-8 text-[15px] font-medium text-gray-700 hover:text-[#3b30ad] transition-colors"
                >
                  {item.title}
                </Link>
              ),
            )}
          </div>

          {/* Search and Login */}
          <div className="hidden lg:flex items-center gap-6">
            <SearchBar />
            <div className="relative group">
              <button
                type="button"
                aria-expanded={isLoginOpen}
                aria-controls="desktop-login-menu"
                onClick={() => setIsLoginOpen((open) => !open)}
                onFocus={() => setIsLoginOpen(true)}
                className="bg-[#3b334a] hover:bg-[#2d2639] text-white px-8 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 active:scale-95"
              >
                Login
              </button>

              {/* Login Dropdown */}
              <div
                id="desktop-login-menu"
                className={`absolute z-50 top-full right-0 pt-2 transition-all duration-200 ${isLoginOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
                onMouseEnter={() => setIsLoginOpen(true)}
                onMouseLeave={() => setIsLoginOpen(false)}
              >
                <div className="bg-white rounded-xl border border-gray-100 py-2 min-w-40 shadow-xl">
                  {loginNav.items?.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href || "#"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3b30ad] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="mr-2">
              <SearchBar />
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-[#3b30ad] hover:bg-gray-100 focus:outline-none transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navigationData.map((item, index) => (
                <MobileNavItemComponent
                  key={index}
                  item={item}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}
              <div className="pt-4 border-t border-gray-100">
                <MobileNavItemComponent
                  item={loginNav}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
