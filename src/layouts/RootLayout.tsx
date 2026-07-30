import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar/Navbar'
import StockTicker from '../components/layout/Navbar/StockTicker'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
// import AccessibilityBar from '../components/layout/AccessibilityBar'

export const RootLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Global Scroll Restoration (Scroll to top on route change)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div className="min-h-screen ">
            <header
                className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 border-b border-gray-100/50 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm'
                    : 'bg-white'
                    }`}
            >
                {/* <div className="hidden md:block">
                  <AccessibilityBar />
                </div> */}
                <Navbar isScrolled={isScrolled} />
                <AnimatePresence>
                    {!isScrolled && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            {isHomePage && <StockTicker />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Page Content */}
            <main id="main-content" className="pt-20 pb-8" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout