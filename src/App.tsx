import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import * as Pages from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Pages.HomePage /> },
      { path: 'about', element: <Pages.AboutPage /> },
      { path: 'partner', element: <Pages.PartnerPage /> },
      { path: 'contact', element: <Pages.ContactPage /> },
      { path: 'blog', element: <Pages.BlogPage /> },
      { path: 'blog/:slug', element: <Pages.BlogDetailPage /> },
      { path: 'disclosure', element: <Pages.DisclosurePage /> },
      { path: 'disclaimer', element: <Pages.DisclaimerPage /> },
      { path: 'privacy-policy', element: <Pages.PrivacyPolicyPage /> },
      { path: 'schedule-meeting', element: <Pages.ScheduleMeetingPage /> },
      { path: 'services/equity', element: <Pages.EquityPage /> },
      { path: 'services/future-options', element: <Pages.FutureOptionsPage /> },
      { path: 'services/mutual-funds', element: <Pages.MutualFundsPage /> },
      { path: 'services/pms-aif', element: <Pages.PmsAifPage /> },
      { path: 'services/commodity', element: <Pages.CommodityPage /> },
      { path: 'services/fixed-deposits', element: <Pages.FixedDepositsPage /> },
      { path: 'services/taxation', element: <Pages.TaxationPage /> },
      { path: 'services/taxation/tax-saving', element: <Pages.TaxSavingPage /> },
      { path: 'services/taxation/tax-slab', element: <Pages.TaxSlabPage /> },
      { path: 'services/taxation/tax-deduction', element: <Pages.TaxDeductionPage /> },
      { path: 'services/taxation/tax-calculator', element: <Pages.TaxCalculatorPage /> },
      { path: 'services/bonds', element: <Pages.BondsPage /> },
      { path: 'services/insurance', element: <Pages.LifeInsurancePage /> },
      { path: 'services/health-insurance', element: <Pages.HealthInsurancePage /> },
      { path: 'investor-zone/mf-tools', element: <Pages.MfToolsPage /> },
      { path: 'investor-zone/mf-tools/sip-performance', element: <Pages.SIPPerformancePage /> },
      { path: 'investor-zone/mf-tools/latest-nav', element: <Pages.LatestNAVPage /> },
      { path: 'investor-zone/mf-tools/recent-dividends', element: <Pages.RecentDividendsPage /> },
      { path: 'investor-zone/mf-tools/fund-factsheets', element: <Pages.FundFactsheetsPage /> },
      { path: 'investor-zone/mf-tools/current-nfo', element: <Pages.CurrentNFOPage /> },
      { path: 'investor-zone/mf-tools/scheme-performance', element: <Pages.SchemePerformancePage /> },
      { path: 'investor-zone/mf-tools/scheme-comparison', element: <Pages.SchemeComparisonPage /> },
      { path: 'investor-zone/mf-tools/swp-calculator', element: <Pages.SWPCalculatorPage /> },
      { path: 'investor-zone/learning', element: <Pages.LearningPage /> },
      { path: 'investor-zone/calculators', element: <Pages.CalculatorsPage /> },
      { path: 'investor-zone/calculators/sip', element: <Pages.SIPCalculatorPage /> },
      { path: 'investor-zone/calculators/education', element: <Pages.EducationCalculatorPage /> },
      { path: 'investor-zone/calculators/marriage', element: <Pages.MarriageCalculatorPage /> },
      { path: 'investor-zone/calculators/retirement', element: <Pages.RetirementCalculatorPage /> },
      { path: 'investor-zone/calculators/emi-loan', element: <Pages.EMILoanCalculatorPage /> },
      { path: 'investor-zone/calculators/sip-step-up', element: <Pages.SIPStepUpCalculatorPage /> },
      { path: 'investor-zone/calculators/sip-delay', element: <Pages.SIPDelayCalculatorPage /> },
      { path: 'investor-zone/calculators/sip-lumpsum', element: <Pages.SIPLumpsumCalculatorPage /> },
      { path: 'news', element: <Pages.NewsPage /> },
      { path: 'downloads/mf-forms', element: <Pages.MfFormsPage /> },
      { path: 'downloads/kyc-fatca', element: <Pages.KycFatcaPage /> },
      // { path: 'https://bestmateinvestment.investwell.app/', element: <Pages.MfLoginPage /> },
      { path: 'login/equity', element: <Pages.EquityLoginPage /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;