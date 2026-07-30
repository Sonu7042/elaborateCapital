import { motion } from 'framer-motion';

const TaxDeductionPage = () => {
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
                            Tax Deductions
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Explore various tax saving deductions available under different sections of the Income Tax Act.
                        </p>
                    </div>

                    {/* Iframe Container */}
                    <div className="relative w-full">
                        <iframe
                            src="https://www.investwell.in/updation/parameter/par_taxdeduction.jsp?hbg=cccccc&amp;bbg=ffffff&amp;fs=11&amp;bt=222222&amp;ht=111111"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="auto"
                            title="Tax Deduction Guide"
                            className="w-full"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </motion.div>

                {/* Disclaimer/Note */}
                
            </div>
        </div>
    );
};

export default TaxDeductionPage;
