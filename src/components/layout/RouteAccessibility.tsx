import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles: Record<string, string> = {
  "/": "Elaborate Capital — Financial Planning and Investment Services",
  "/about": "About Us",
  "/partner": "Partner With Us",
  "/contact": "Contact Us",
  "/blog": "Financial Insights",
  "/disclosure": "Disclosure",
  "/disclaimer": "Disclaimer",
  "/privacy-policy": "Privacy Policy",
  "/schedule-meeting": "Schedule a Meeting",
  "/services/equity": "Equity",
  "/services/future-options": "Futures and Options",
  "/services/mutual-funds": "Mutual Funds",
  "/services/pms-aif": "PMS and AIF",
  "/services/commodity": "Commodity",
  "/services/fixed-deposits": "Fixed Deposits",
  "/services/taxation": "Taxation",
  "/services/taxation/tax-saving": "Tax Saving",
  "/services/taxation/tax-slab": "Tax Slabs",
  "/services/taxation/tax-deduction": "Tax Deductions",
  "/services/taxation/tax-calculator": "Tax Calculator",
  "/services/bonds": "Bonds",
  "/services/insurance": "Life Insurance",
  "/services/health-insurance": "Health Insurance",
  "/investor-zone/mf-tools": "Mutual Fund Tools",
  "/investor-zone/mf-tools/sip-performance": "SIP Performance",
  "/investor-zone/mf-tools/latest-nav": "Latest NAV",
  "/investor-zone/mf-tools/recent-dividends": "Recent Dividends",
  "/investor-zone/mf-tools/fund-factsheets": "Fund Factsheets",
  "/investor-zone/mf-tools/current-nfo": "Current NFO",
  "/investor-zone/mf-tools/scheme-performance": "Scheme Performance",
  "/investor-zone/mf-tools/scheme-comparison": "Scheme Comparison",
  "/investor-zone/mf-tools/swp-calculator": "SWP Calculator",
  "/investor-zone/learning": "Learning",
  "/investor-zone/calculators": "Calculators",
  "/investor-zone/calculators/sip": "SIP Calculator",
  "/investor-zone/calculators/education": "Education Calculator",
  "/investor-zone/calculators/marriage": "Marriage Calculator",
  "/investor-zone/calculators/retirement": "Retirement Calculator",
  "/investor-zone/calculators/emi-loan": "EMI and Loan Calculator",
  "/investor-zone/calculators/sip-step-up": "SIP Step-Up Calculator",
  "/investor-zone/calculators/sip-delay": "SIP Delay Calculator",
  "/investor-zone/calculators/sip-lumpsum": "SIP Lumpsum Calculator",
  "/news": "Latest Market News",
  "/downloads/mf-forms": "Mutual Fund Forms",
  "/downloads/kyc-fatca": "KYC and FATCA",
  "/login/equity": "Equity Login",
};

// These routes do not contain a visible page-level heading in their existing design.
const needsHiddenHeading = new Set([
  "/partner",
  "/disclosure",
  "/disclaimer",
  "/privacy-policy",
  "/services/taxation/tax-saving",
  "/investor-zone/mf-tools/sip-performance",
  "/investor-zone/mf-tools/latest-nav",
  "/investor-zone/mf-tools/recent-dividends",
  "/investor-zone/mf-tools/fund-factsheets",
  "/investor-zone/mf-tools/current-nfo",
  "/investor-zone/mf-tools/scheme-performance",
  "/investor-zone/mf-tools/scheme-comparison",
  "/investor-zone/mf-tools/swp-calculator",
  "/investor-zone/calculators/sip",
  "/investor-zone/calculators/education",
  "/investor-zone/calculators/marriage",
  "/investor-zone/calculators/retirement",
  "/investor-zone/calculators/emi-loan",
  "/investor-zone/calculators/sip-step-up",
  "/investor-zone/calculators/sip-delay",
  "/investor-zone/calculators/sip-lumpsum",
  "/downloads/kyc-fatca",
]);

export default function RouteAccessibility() {
  const { pathname } = useLocation();
  const isBlogArticle = pathname.startsWith("/blog/");
  const title = routeTitles[pathname] ?? (isBlogArticle ? "Financial Article" : "Elaborate Capital");

  useEffect(() => {
    document.title = `${title} | Elaborate Capital`;
  }, [title]);

  return needsHiddenHeading.has(pathname) ? <h1 className="sr-only">{title}</h1> : null;
}
