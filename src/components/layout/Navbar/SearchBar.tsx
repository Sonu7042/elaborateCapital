import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { searchItems } from '../../../data/searchData';
import type { SearchItem } from '../../../data/searchData';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const searchRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.length > 0) {
            const filtered = searchItems.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 8);
            setResults(filtered);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
        setFocusedIndex(-1);
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            setFocusedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            setFocusedIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Enter" && focusedIndex >= 0) {
            handleSelect(results[focusedIndex]);
        } else if (e.key === "Escape") {
            setIsOpen(false);
            setIsMobileOpen(false);
        }
    };

    const handleSelect = (item: SearchItem) => {
        navigate(item.href);
        setQuery("");
        setIsOpen(false);
        setIsMobileOpen(false);
    };

    return (
        <div ref={searchRef} className="relative">
            {/* Mobile Search Trigger Icon */}
            <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open search"
                className="lg:hidden p-2 text-gray-700 hover:text-[#3b30ad] transition-colors"
            >
                <Search className="h-6 w-6" />
            </button>

            {/* Desktop Search Bar */}
            <div className="relative group hidden lg:block max-w-xs w-full">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className={`h-4 w-4 transition-colors ${isOpen ? 'text-[#3b30ad]' : 'text-gray-400'}`} />
                    </div>
                    <input
                        type="text"
                        aria-label="Search tools and news"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => query.length > 0 && setIsOpen(true)}
                        className={`block w-full pl-10 pr-10 py-2 border rounded-full bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b30ad]/10 transition-all duration-300 ${isOpen ? 'border-[#3b30ad] shadow-lg ring-2 ring-[#3b30ad]/5' : 'border-gray-200'
                            }`}
                        placeholder="Search tools, news..."
                    />
                    {query && (
                        <button
                            type="button"
                            onClick={() => setQuery("")}
                            aria-label="Clear search"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Desktop Search Results Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-60 top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[320px]"
                        >
                            <div className="p-2">
                                {results.length > 0 ? (
                                    <div className="space-y-1">
                                        <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-between">
                                            <span>Results</span>
                                            <TrendingUp size={10} />
                                        </div>
                                        {results.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSelect(item)}
                                                onMouseEnter={() => setFocusedIndex(index)}
                                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${focusedIndex === index ? 'bg-gray-50 text-[#3b30ad]' : 'text-gray-700'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-start">
                                                    <span className="text-sm font-semibold">{item.title}</span>
                                                    <span className="text-[10px] text-gray-400 font-medium">{item.category}</span>
                                                </div>
                                                <ArrowRight size={14} className={`transition-transform ${focusedIndex === index ? 'translate-x-0' : '-translate-x-2 opacity-0'}`} />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-6 px-4 text-center">
                                        <Search className="mx-auto h-8 w-8 text-gray-200 mb-2" />
                                        <p className="text-sm text-gray-500 font-medium">No results found for "{query}"</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Search Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-white lg:hidden overflow-y-auto"
                    >
                        <div className="p-4 flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <button
                                    type="button"
                                    onClick={() => setIsMobileOpen(false)}
                                    aria-label="Close search"
                                    className="p-2 -ml-2 text-gray-500"
                                >
                                    <ArrowRight className="h-6 w-6 rotate-180" />
                                </button>
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    autoFocus
                                    type="text"
                                    aria-label="Search tools and news"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search with Elaborate Capital..."
                                        className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl text-lg font-medium outline-none focus:ring-2 focus:ring-[#3b30ad]/10"
                                    />
                                    {query && (
                                        <button
                                            type="button"
                                            onClick={() => setQuery("")}
                                            aria-label="Clear search"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        >
                                            <X size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Results */}
                            <div className="flex-1">
                                {query.length > 0 ? (
                                    results.length > 0 ? (
                                        <div className="space-y-4">
                                            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-2">
                                                Search Results for "{query}"
                                            </div>
                                            <div className="space-y-2">
                                                {results.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleSelect(item)}
                                                        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors"
                                                    >
                                                        <div className="flex flex-col items-start">
                                                            <span className="text-gray-900 font-bold">{item.title}</span>
                                                            <span className="text-xs text-[#3b30ad] font-semibold">{item.category}</span>
                                                        </div>
                                                        <ArrowRight size={20} className="text-gray-300" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-20">
                                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Search size={32} className="text-gray-200" />
                                            </div>
                                            <p className="text-gray-500 font-bold">No results found</p>
                                            <p className="text-gray-400 text-sm">Try searching for something else</p>
                                        </div>
                                    )
                                ) : (
                                    <div className="space-y-6">
                                        <div className="px-2">
                                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Popular Searches</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {["Mutual Funds", "SIP Calculator", "IPO News", "Stocks"].map(tag => (
                                                    <button
                                                        key={tag}
                                                        onClick={() => setQuery(tag)}
                                                        className="px-4 py-2 bg-gray-50 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100"
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchBar;
