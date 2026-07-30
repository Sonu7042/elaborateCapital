import { useState } from "react";
import {
  Settings,
  Book,
  TrendingUp,
  IndianRupee,
  ShieldCheck,
  Umbrella,
  MapPin,
  Mail,
  PhoneCall,
  Smartphone,
  Plus,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "../../assets/white-logo-elaborate.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="relative w-full pt-20 pb-8 bg-[#111810] overflow-hidden text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section: Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16 items-start">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link to="/">
              <img
                src={logo}
                alt="Elaborate Capital Logo"
                className="h-32 md:h-40 w-auto object-contain -ml-4"
              />
            </Link>
          </div>

          {/* Quick Link Column */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-lg heading font-bold mb-6 text-white opacity-90">
                Quick Link
              </h3>
              <ul className="flex flex-col para gap-5">
                <li>
                  <Link
                    to="/investor-zone/learning"
                    className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                  >
                    <Book
                      size={20}
                      className="group-hover:text-[#99C336]"
                    />
                    <span>Learning</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investor-zone/mf-tools"
                    className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group text-[#ffffff]"
                  >
                    <Settings
                      size={20}
                      className="text-[#ffffff] group-hover:text-[#99C336]"
                    />
                    <span>MF Tools</span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/investor-zone/calculators"
                    className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                  >
                    <Calculator
                      size={20}
                      className="group-hover:text-[#99C336]"
                    />
                    <span>Learning</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to="/downloads/mf-forms"
                    className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                  >
                    <Download
                      size={20}
                      className="group-hover:text-[#99C336]"
                    />
                    <span>Downloads</span>
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Contact Us (Social) Section */}
            <div>
              <h3 className="text-lg heading font-bold mb-4 text-white opacity-90">
                Contact Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com"
                  aria-label="Elaborate Capital on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform text-white hover:text-[#99C336]"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  aria-label="Elaborate Capital on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform text-white hover:text-[#99C336]"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  aria-label="Elaborate Capital on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform text-white hover:text-[#99C336]"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Our Services Column */}
          <div>
            <h3 className="text-lg heading font-bold mb-6 text-white opacity-90">
              Our Services
            </h3>
            <ul className="flex flex-col para gap-5">
              <li>
                <Link
                  to="/services/mutual-funds"
                  className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                >
                  <TrendingUp
                    size={20}
                    className="group-hover:text-[#99C336]"
                  />
                  <span>Mutual Funds</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fixed-deposits"
                  className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                >
                  <IndianRupee
                    size={20}
                    className="group-hover:text-[#99C336]"
                  />
                  <span>Fixed Deposit</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/taxation/tax-saving"
                  className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                >
                  <ShieldCheck
                    size={20}
                    className="group-hover:text-[#99C336]"
                  />
                  <span>Tax Saving</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/insurance"
                  className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-all group"
                >
                  <Umbrella size={20} className="group-hover:text-[#99C336]" />
                  <span>Insurance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-lg heading font-bold mb-6 text-white opacity-90">
              Get In Touch
            </h3>
            <ul className="flex flex-col para gap-5">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={20} className="shrink-0 mt-0.5 text-white" />
                <span>Elaborate Capital  Investment Services Pvt Ltd</span>
              </li>
              <li className="flex items-center gap-3 text-sm hover:text-[#99C336] transition-colors cursor-pointer">
                <Mail size={20} className="text-white" />
                <span>elaboratecapital@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="w-5 h-5 bg-white shrink-0 flex items-center justify-center rounded-sm transition-colors group-hover:bg-[#99C336]">
                  <PhoneCall size={14} className="text-[#111810]" />
                </div>
                <a
                  href="tel:01141881206"
                  className="text-white hover:text-[#99C336] transition-colors"
                >
                  011 4188 1206
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Smartphone
                  size={20}
                  className="text-white group-hover:text-[#99C336] transition-colors"
                />
                <a
                  href="tel:+919990105522"
                  className="text-white hover:text-[#99C336] transition-colors"
                >
                  +91-999-010-5522
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Section (Always Visible) */}
        <div className="border-t border-white pt-10 pb-4">
          <div className="grid grid-cols-1 para lg:grid-cols-2 gap-10 text-[12px] md:text-[13px] leading-relaxed text-white/70 text-center md:text-center">
            <div className="space-y-3">
              <p>CIN: U74999hdgsjg6866PTC143375, ARN-as246d760,</p>
              <p>
                Registered Authorised Pedfon With Nuvdfma Weagfth And Inthstment
                Ltd,
              </p>
              <p>
                NSE CM FO & CD – AP2245kjsdb543433, BSE – AP01326454hg5540558, MCX –
                MCX/AP/145879,
              </p>
              <p>A-1-505, Ansal Corporate Park Sec-002, Noida 565305</p>
            </div>
            <div className="space-y-3">
              <p>SEBI Research Analyst Registration Number: INH0763545996,</p>
              <p>
                Compliance officer: Rohit Suryavanshi (Research Analyst)
                999-010-5522
              </p>
              <p>
                Principal Officer: CA Raj Kumar (Research Analyst) 999-010-5522
              </p>
              <p>
                Grievance Officer: Nikghil Duji, Email Id :-
                swastixa@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section Label */}
        <div className="flex items-center gap-4 py-8 border-t border-white">
          <span className="text-sm font-medium whitespace-nowrap">
            Disclaimer :
          </span>
          <div className="w-full border-b border-dashed border-white h-0 mt-1"></div>
          <button
            type="button"
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            aria-label={showDisclaimer ? "Hide disclaimer" : "Show disclaimer"}
            aria-expanded={showDisclaimer}
            className={`shrink-0 w-10 h-10 bg-[#2d3a2d] border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-10 ${showDisclaimer ? "rotate-45" : ""
              }`}
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Toggleable Disclaimer Content */}
        {showDisclaimer && (
          <div className="pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-6   ">
              <p className="text-[12px] md:text-[13px] leading-relaxed text-white text-justify">
                Investment in the securities market are subject to market risks.
                Read all the related documents carefully before investing.
                Elaborate Capital  Investment Services Private Limited and its associates
                do not guarantee any returns or profits. The information
                provided is for educational purposes only and should not be
                considered as financial advice. Registration granted by SEBI and
                certification from NISM in no way guarantee performance of the
                intermediary or provide any assurance of returns to investors.
              </p>
            </div>
          </div>
        )}

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-[13px] text-white border-t border-white/10">
          <p>
            Copyright © {currentYear} Elaborate Capital  Investment Services Private
            Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="hover:text-[#99C336] transition-colors"
            >
              Disclosure
            </Link>
            <Link
              to="#"
              className="hover:text-[#99C336] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
