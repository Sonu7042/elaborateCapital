import { motion } from 'framer-motion';

const TaxSlabPage = () => {
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
                            Income Tax Slabs
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Stay updated with the latest income tax slabs and rates for different categories of taxpayers.
                        </p>
                    </div>

                    {/* Iframe Container */}
                    <div className="relative w-full">
                        <iframe
                            src="https://www.investwell.in/updation/parameter/par_taxslab.jsp?tbg=eeeeee&amp;hbg=cccccc&amp;hbg2=aaaaaa&amp;fs=11&amp;bt=222222&amp;ht=111111&amp;ht2=000000&amp;fsl=a1a1a0"
                            width="100%"
                            height="4250"
                            frameBorder="0"
                            scrolling="auto"
                            title="Tax Slab Chart"
                            className="w-full"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </motion.div>

             
            </div>
        </div>
    );
};

export default TaxSlabPage;
