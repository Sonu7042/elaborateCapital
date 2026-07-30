import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';

// Import images
import SIPPerformance from '../../assets/InvestorZone/mftools/SIPPerformance.png';
import LatestNAV from '../../assets/InvestorZone/mftools/LatestNAV.png';
import RecentDividends from '../../assets/InvestorZone/mftools/RecentDividends.png';
import FundFactsheets from '../../assets/InvestorZone/mftools/FundFactsheets.png';
import CurrentNFO from '../../assets/InvestorZone/mftools/CurrentNFO.png';
import SchemePerformance from '../../assets/InvestorZone/mftools/SchemePerformance.png';
import SchemeComparison from '../../assets/InvestorZone/mftools/SchemeComparison.png';
import SWPCalculator from '../../assets/InvestorZone/mftools/SWPCalculator.png';
import bgimg from '../../assets/InvestorZone/mftools/Bg.png';
import MutualFundHero from './MutualFundTools';

const tools = [
    { name: 'SIP Performance', img: SIPPerformance, link: '/investor-zone/mf-tools/sip-performance' },
    { name: 'Latest NAV', img: LatestNAV, link: '/investor-zone/mf-tools/latest-nav' },
    { name: 'Recent Dividends', img: RecentDividends, link: '/investor-zone/mf-tools/recent-dividends' },
    { name: 'Fund Factsheets', img: FundFactsheets, link: '/investor-zone/mf-tools/fund-factsheets' },
    { name: 'Current NFO', img: CurrentNFO, link: '/investor-zone/mf-tools/current-nfo' },
    { name: 'Scheme Performance', img: SchemePerformance, link: '/investor-zone/mf-tools/scheme-performance' },
    { name: 'Scheme Comparison', img: SchemeComparison, link: '/investor-zone/mf-tools/scheme-comparison' },
    { name: 'SWP Calculator', img: SWPCalculator, link: '/investor-zone/mf-tools/swp-calculator' },
];




const MfToolsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <MutualFundHero />
        <div className="min-h-screen relative overflow-hidden font-sans pt-20 pb-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                    <h1 className="text-5xl font-bold text-[#1a2a3a]">MF Tools</h1>
                    
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Find a tool..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#3b30ad]/20 focus:border-[#3b30ad] outline-none transition-all"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 pt-10">
                    {filteredTools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="relative"
                        >
                            <Link
                                to={tool.link}
                                className="bg-white rounded-xl shadow-[0_10px_25px_-10px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center h-full w-full relative"
                                style={{
                                    border: '1px solid transparent',
                                    backgroundImage: 'linear-gradient(white, white), radial-gradient(90.4% 268.27% at 2.32% 24.32%, #FF0000 0%, #0D3052 60.77%, #7ECA9C 100%)',
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box'
                                }}
                            >
                                {/* Circular Icon with Gradient Border */}
                                <div
                                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full p-px shadow-lg overflow-hidden"
                                    style={{
                                        backgroundImage: 'radial-gradient(90.4% 268.27% at 2.32% 24.32%, #FF0000 0%, #0D3052 60.77%, #7ECA9C 100%)'
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-4">
                                        <img
                                            src={tool.img}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Label */}
                                <h2 className="mt-8 text-base font-bold text-gray-800 text-center uppercase tracking-tight">
                                    {tool.name}
                                </h2>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default MfToolsPage;
