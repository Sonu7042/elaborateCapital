import React from 'react';
import { motion } from 'framer-motion';
import franklin from '../../assets/HeroImages/partners/FranklinTempleton.webp';
import navi from '../../assets/HeroImages/partners/Navi-Mutual-Fund.webp';
import axis from '../../assets/HeroImages/partners/axis.webp';
import bandhan from '../../assets/HeroImages/partners/bandhan.webp';
import boi from '../../assets/HeroImages/partners/bank-of-india.webp';
import birla from '../../assets/HeroImages/partners/birla.webp';
import bnp from '../../assets/HeroImages/partners/bnp-paribas.webp';
import canara from '../../assets/HeroImages/partners/canara-robeco-mf.webp';
import dsp from '../../assets/HeroImages/partners/dsp.webp';
import edelweiss from '../../assets/HeroImages/partners/edelweiss-mf.webp';
import hdfc from '../../assets/HeroImages/partners/hdfc-logo.webp';
import hsbc from '../../assets/HeroImages/partners/hsbc.webp';
import idbi from '../../assets/HeroImages/partners/idbi.webp';
import invesco from '../../assets/HeroImages/partners/invesco-mf.webp';
import iti from '../../assets/HeroImages/partners/iti-mf.webp';
import kotak from '../../assets/HeroImages/partners/kotak.webp';
import lic from '../../assets/HeroImages/partners/lic-mf.webp';
import mirae from '../../assets/HeroImages/partners/mirae.webp';
import motilal from '../../assets/HeroImages/partners/motilal.webp';
import nippon from '../../assets/HeroImages/partners/nipponindia.webp';
import nj from '../../assets/HeroImages/partners/nj-mutual-fund.webp';
import pgim from '../../assets/HeroImages/partners/pgim-mf.webp';
import uti from '../../assets/HeroImages/partners/uti.webp';

const partners = [
    franklin, navi, axis, bandhan, boi, birla, bnp, canara, dsp, edelweiss,
    hdfc, hsbc, idbi, invesco, iti, kotak, lic, mirae, motilal, nippon,
    nj, pgim, uti
];

const PartnerLogos: React.FC = () => {
    return (
        <section className="py-12  overflow-hidden  bg-[#F7F9F5]">
            {/* <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#22c55e] mb-2">Our Trusted Partners</p>
                <h2 className="text-2xl font-bold text-gray-900">We Work with the Best in the Industry</h2>
            </div> */}

            <div className="relative group cursor-grab active:cursor-grabbing">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                    className="flex gap-12 w-max animate-scroll hover:[animation-play-state:paused] py-4"
                >
                    {/* logos double to support seamless loop */}
                    {[...partners, ...partners].map((logo, index) => (
                        <div
                            key={index}
                            className="w-32 h-16 sm:w-40 sm:h-20 flex items-center justify-center transition-all duration-500 pointer-events-none select-none"
                        >
                            <img
                                src={logo}
                                alt={`Partner ${index}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for a premium look */}
                <div className="absolute inset-y-0 left-0 w-24  z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24  z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default PartnerLogos;
