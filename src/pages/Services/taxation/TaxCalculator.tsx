import { motion } from 'framer-motion';

const TaxCalculatorPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="shadow-xl rounded-3xl overflow-hidden border border-gray-100 bg-white"
                >
                    {/* Header Panel */}
                    <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Income Tax Calculator
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Estimate your tax liability based on the latest tax rules and compare between old and new regimes.
                        </p>
                    </div>

                    {/* Iframe Container */}
                    <div className="relative w-full">
                        <iframe
                            src="https://www.investwell.in/updation/parameter/Calculator/par_incometaxcalculator.jsp?bbg=cccccc&amp;hbg=cccccc&amp;bt=000000&amp;ht=550000&amp;fs=11&amp;bid=30066"
                            width="100%"
                            height="850"
                            frameBorder="0"
                            scrolling="auto"
                            title="Income Tax Calculator"
                            className="w-full"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default TaxCalculatorPage;
