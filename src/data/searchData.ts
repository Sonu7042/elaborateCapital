export interface SearchItem {
    title: string;
    href: string;
    category: string;
}

export const searchItems: SearchItem[] = [
    // Services
    { title: "Equity Investment", href: "/services/equity", category: "Services" },
    { title: "Future & Options Trading", href: "/services/future-options", category: "Services" },
    { title: "Mutual Funds", href: "/services/mutual-funds", category: "Services" },
    { title: "PMS / AIF", href: "/services/pms-aif", category: "Services" },
    { title: "Commodity Trading", href: "/services/commodity", category: "Services" },
    { title: "Fixed Deposits", href: "/services/fixed-deposits", category: "Services" },
    { title: "Taxation Services", href: "/services/taxation", category: "Services" },
    { title: "Bonds Investment", href: "/services/bonds", category: "Services" },
    { title: "Life Insurance", href: "/services/insurance", category: "Services" },
    { title: "Health Insurance", href: "/services/health-insurance", category: "Services" },

    // MF Tools
    { title: "SIP Performance", href: "/investor-zone/mf-tools/sip-performance", category: "MF Tools" },
    { title: "Latest NAV", href: "/investor-zone/mf-tools/latest-nav", category: "MF Tools" },
    { title: "Recent Dividends", href: "/investor-zone/mf-tools/recent-dividends", category: "MF Tools" },
    { title: "Fund Factsheets", href: "/investor-zone/mf-tools/fund-factsheets", category: "MF Tools" },
    { title: "Current NFO", href: "/investor-zone/mf-tools/current-nfo", category: "MF Tools" },
    { title: "Scheme Performance", href: "/investor-zone/mf-tools/scheme-performance", category: "MF Tools" },
    { title: "Scheme Comparison", href: "/investor-zone/mf-tools/scheme-comparison", category: "MF Tools" },
    { title: "SWP Calculator", href: "/investor-zone/mf-tools/swp-calculator", category: "MF Tools" },

    // Calculators
    { title: "SIP Calculator", href: "/investor-zone/calculators/sip", category: "Calculators" },
    { title: "SIP + Lumpsum Calculator", href: "/investor-zone/calculators/sip-lumpsum", category: "Calculators" },
    { title: "SIP Step Up Calculator", href: "/investor-zone/calculators/sip-step-up", category: "Calculators" },
    { title: "SIP Delay Calculator", href: "/investor-zone/calculators/sip-delay", category: "Calculators" },
    { title: "Education Goal Calculator", href: "/investor-zone/calculators/education", category: "Calculators" },
    { title: "Marriage Goal Calculator", href: "/investor-zone/calculators/marriage", category: "Calculators" },
    { title: "Retirement Planner", href: "/investor-zone/calculators/retirement", category: "Calculators" },
    { title: "EMI / Loan Calculator", href: "/investor-zone/calculators/emi-loan", category: "Calculators" },

    // News
    { title: "Market News & Updates", href: "/news", category: "News" },
    { title: "Latest IPO News", href: "/news", category: "News" },
    { title: "Stock Market Insights", href: "/news", category: "News" },
    { title: "Stocks", href: "/news", category: "News" },
    { title: "Mutual Funds", href: "/news", category: "News" },
    // { title: "IPO", href: "/news", category: "News" },
    { title: "Economy", href: "/news", category: "News" },

    // Company
    // { title: "About Elaborate Capital", href: "/about", category: "Company" },
    // { title: "Partner With Us", href: "/partner", category: "Company" },
    // { title: "Contact Us", href: "/contact", category: "Company" },
    { title: "Blog & Articles", href: "/blog", category: "Company" },
];
