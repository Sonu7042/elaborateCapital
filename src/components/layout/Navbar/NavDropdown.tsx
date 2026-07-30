import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../../../types/navigation';
import NavSubDropdown from './NavSubDropdown';

interface NavDropdownProps {
    item: NavItem;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative h-full flex items-center group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#3b30ad] transition-colors py-3">
                {item.title}
                <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-[#3b30ad] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-max z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                            className="bg-white rounded-xl  border border-gray-100 py-3 min-w-50 overflow-visible shadow-xl"
                        >
                            {/* Decorative arrow */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45"></div>

                            <div className="relative z-10">
                                {item.items?.map((subItem, index) => (
                                    subItem.items ? (
                                        <NavSubDropdown key={index} item={subItem} />
                                    ) : (
                                        <Link
                                            key={index}
                                            to={subItem.href || '#'}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#3b30ad] hover:bg-gray-50 transition-colors"
                                        >
                                            {subItem.title}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NavDropdown;
