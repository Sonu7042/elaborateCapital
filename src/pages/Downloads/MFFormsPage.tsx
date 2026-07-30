import { motion } from 'framer-motion';
// import { FileDown, Search, Filter, Info } from 'lucide-react';

const MFFormsPage = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header Section */}
                {/* <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="p-2 bg-[#7b0020]/10 rounded-lg">
                            <FileDown className="w-6 h-6 text-[#7b0020]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Mutual Fund <span className="text-[#7b0020]">Forms</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-500 max-w-2xl text-lg"
                    >
                        Access and download official mutual fund application forms, transaction slips, and service request documents.
                    </motion.p>
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Iframe Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-12 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden"
                    >
                        <div className="p-2">
                            <div className="flex items-center justify-between p-6 border-b border-slate-50 overflow-x-auto">
                                {/* <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-sm font-bold text-[#7b0020] whitespace-nowrap">
                                        <Search className="w-4 h-4" />
                                        SEARCH FORMS
                                    </div>
                                    <div className="h-4 w-px bg-slate-200 hidden md:block"></div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 whitespace-nowrap">
                                        <Filter className="w-4 h-4" />
                                        FILTER BY AMC
                                    </div>
                                </div> */}
                                {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold whitespace-nowrap">
                                    <Info className="w-4 h-4" />
                                    DOCUMENT REPOSITORY
                                </div> */}
                            </div>

                            <div className="relative w-full min-h-[700px] bg-white rounded-b-3xl overflow-hidden">
                                <iframe
                                    id="mainframe1"
                                    style={{ zIndex: 1 }}
                                    src="https://formprint.printwellonline.com/formprintpage.aspx?zp0k34=7EC8D716-BB27-4FB2-8967-2B23D1F02962"
                                    name="mainframe1"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    scrolling="auto"
                                    title="Mutual Fund Forms Portal"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Info */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 p-8 bg-slate-50 rounded-4xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <Info className="w-6 h-6 text-[#7b0020]" />
                        </div>
                       
                    </div>
                    <button className="px-8 py-3 bg-[#7b0020] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#7b0020]/20 hover:scale-105 active:scale-95 transition-all">
                        Contact Support
                    </button>
                </motion.div> */}
            </div>
        </div>
    );
};

export default MFFormsPage;
