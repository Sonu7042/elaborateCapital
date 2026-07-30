import DemoPage from '../components/common/DemoPage';
import StockNews from './InvestorZone/News';
import CalculatorsPage from './InvestorZone/Calculators';
import SIPCalculatorPage from './InvestorZone/calculators/SIPCalculator';
import EducationCalculatorPage from './InvestorZone/calculators/EducationCalculator';
import MarriageCalculatorPage from './InvestorZone/calculators/MarriageCalculator';
import RetirementCalculatorPage from './InvestorZone/calculators/RetirementCalculator';
import EMILoanCalculatorPage from './InvestorZone/calculators/EMILoanCalculator';
import SIPStepUpCalculatorPage from './InvestorZone/calculators/SIPStepUpCalculator';
import SIPDelayCalculatorPage from './InvestorZone/calculators/SIPDelayCalculator';
import SIPLumpsumCalculatorPage from './InvestorZone/calculators/SIPLumpsumCalculator';
import MfToolsPage from './InvestorZone/MfToolsPage';
import SIPPerformancePage from './InvestorZone/mftoolscalculator/SIPPerformance';
import LatestNAVPage from './InvestorZone/mftoolscalculator/LatestNAV';
import RecentDividendsPage from './InvestorZone/mftoolscalculator/RecentDividends';
import FundFactsheetsPage from './InvestorZone/mftoolscalculator/FundFactsheets';
import CurrentNFOPage from './InvestorZone/mftoolscalculator/CurrentNFO';
import SchemePerformancePage from './InvestorZone/mftoolscalculator/SchemePerformance';
import SchemeComparisonPage from './InvestorZone/mftoolscalculator/SchemeComparison';
import SWPCalculatorPage from './InvestorZone/mftoolscalculator/SWPCalculator';
import MfLoginPage from './Login/MfLoginPage';

import AboutPage from './Company/AboutPage';
import PartnerPage from './Company/PartnerPage';
import ContactPage from './Company/ContactPage';
import BlogPage from './Company/BlogPage';
import BlogDetailPage from './Company/BlogDetailPage';
import DisclosurePage from './Company/DisclosurePage';
import DisclaimerPage from './Company/DisclaimerPage';
import PrivacyPolicyPage from './Company/PrivacyPolicyPage';
import ScheduleMeetingPage from './Company/ScheduleMeetingPage';
import HomePage from './Home/HomePage';
import EquityPage from './Services/EquityPage';
import FutureOptionsPage from './Services/FutureOptionsPage';
import MutualFundsPage from './Services/MutualFundsPage';
import PmsAifPage from './Services/PmsAifPage';
import CommodityPage from './Services/CommodityPage';
import FixedDepositsPage from './Services/FixedDepositsPage';
import HealthInsurancePage from './Services/HealthInsurancePage';
import TaxationPage from './Services/TaxationPage';
import BondsPage from './Services/BondsPage';
import LearningPage from './InvestorZone/LearningPage';
import LifeInsurancePage from './Services/LifeInsurancePage';
import KycFatcaPage from './Downloads/KYCFATCA';
import MfFormsPage from './Downloads/MFFormsPage';
import TaxSavingPage from './Services/taxation/TaxSaving';
import TaxCalculatorPage from './Services/taxation/TaxCalculator';
import TaxDeductionPage from './Services/taxation/TaxDeduction';
import TaxSlabPage from './Services/taxation/TaxSlab';

export { HomePage, AboutPage, PartnerPage, ContactPage, BlogPage, BlogDetailPage, DisclosurePage, DisclaimerPage, PrivacyPolicyPage, ScheduleMeetingPage, CalculatorsPage, SIPCalculatorPage, EducationCalculatorPage, MarriageCalculatorPage, RetirementCalculatorPage, EMILoanCalculatorPage, SIPStepUpCalculatorPage, SIPDelayCalculatorPage, SIPLumpsumCalculatorPage, MfToolsPage, SIPPerformancePage, LatestNAVPage, RecentDividendsPage, FundFactsheetsPage, CurrentNFOPage, SchemePerformancePage, SchemeComparisonPage, SWPCalculatorPage, EquityPage, FutureOptionsPage, MutualFundsPage, PmsAifPage, CommodityPage, FixedDepositsPage, HealthInsurancePage, TaxationPage, BondsPage, LifeInsurancePage, LearningPage, KycFatcaPage, TaxSavingPage, TaxCalculatorPage, TaxDeductionPage, TaxSlabPage, MfFormsPage, MfLoginPage };

export const NewsPage = () => (
  <div className="pt-0 sm:mt-4  min-h-screen bg-gray-50">
    <StockNews />
  </div>
);




export const EquityLoginPage = () => <DemoPage title="Equity Login" />;