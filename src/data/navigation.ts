import type { NavItem } from "../types/navigation";

export const navigationData: NavItem[] = [
    {
        title: "Company",
        items: [
            { title: "About Us", href: "/about" },
            // { title: "Partner with us", href: "/partner" },
            { title: "Contact", href: "/contact" },
            { title: "Blog", href: "/blog" },
        ],
    },
    {
        title: "Services",
        items: [
            { title: "Equity", href: "/services/equity" },
            { title: "Future & Options", href: "/services/future-options" },
            { title: "Mutual Funds", href: "/services/mutual-funds" },
            { title: "PMS / AIF", href: "/services/pms-aif" },
            // {
            //     title: "Mutual Funds",
            //     items: [
            //         { title: "PMS / AIF", href: "/services/pms-aif" },
            //     ],
            // },
            { title: "Commodity", href: "/services/commodity" },
            { title: "Fixed Deposits", href: "/services/fixed-deposits" },
            { title: "Taxation", href: "/services/taxation" },
            { title: "Bonds", href: "/services/bonds" },
            // {
            //     title: "Fixed Deposits",
            //     items: [
                    // { title: "Taxation", href: "/services/taxation" },
                    // { title: "Bonds", href: "/services/bonds" },
            //     ],
            // },
            { title: "Insurance", href: "/services/insurance" },
            // { title: "Health Insurance", href: "/services/health-insurance" },
        ],
    },
    {
        title: "Investor Zone",
        items: [
            { title: "MF Tools", href: "/investor-zone/mf-tools" },
            { title: "Learning", href: "/investor-zone/learning" },
            // { title: "Calculators", href: "/investor-zone/calculators" },
        ],
    },
    { title: "News", href: "/news" },
    // {
    //     title: "Downloads",
    //     items: [
    //         // { title: "MF Forms", href: "/downloads/mf-forms" },
    //         { title: "MF Forms", href: "/downloads/mf-forms" },
    //         { title: "KYC / FATCA", href: "/downloads/kyc-fatca" },
    //     ],
    // },
];

export const loginNav: NavItem = {
    title: "Login",
    items: [
        // { title: "MF Login", href: "/login/mf" },
        // { title: "MF Login", href: "https://bestmateinvestment.investwell.app/" },
        // { title: "Equity Login", href: "/login/equity" },
    ],
};