import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../../../types/navigation';

interface NavSubDropdownProps {
    item: NavItem;
}

const NavSubDropdown: React.FC<NavSubDropdownProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative px-4 py-2 hover:bg-gray-50 cursor-pointer group/sub"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-gray-700 group-hover/sub:text-[#3b30ad] transition-colors whitespace-nowrap">
                    {item.title}
                </span>
                <ChevronRight className={`w-4 h-4 text-gray-400 group-hover/sub:text-[#3b30ad] transition-transform ${isOpen ? 'rotate-0' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.1 }}
                        className="absolute left-full top-0 ml-0.5 min-w-45 bg-white rounded-lg    border border-gray-100 py-2 z-50 overflow-hidden shadow-xl"
                    >
                        {item.items?.map((subItem, index) => (
                            <Link
                                key={index}
                                to={subItem.href || '#'}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#3b30ad] hover:bg-gray-50 transition-colors"
                            >
                                {subItem.title}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavSubDropdown;
