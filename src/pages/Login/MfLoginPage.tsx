import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock } from 'lucide-react';
import logo from '../../assets/ECLogoNew.webp';

const MfLoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center py-12 px-4">
            {/* Background Pattern (Topographic/Waves) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 300 Q 250 250 500 300 T 1000 300" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 500 Q 250 450 500 500 T 1000 500" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 700 Q 250 650 500 700 T 1000 700" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 800 Q 250 750 500 800 T 1000 800" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 900 Q 250 850 500 900 T 1000 900" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[440px] z-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
            >
                <div className="p-8 pb-4">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="Elaborate Capital" className="h-12 w-auto mb-2" />
                        <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                            AMFI Regd. Mutual Fund Distributor
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Welcome!</h2>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <label htmlFor="login-username" className="text-xs font-semibold text-red-500 mb-1 block">Username</label>
                            <div className="relative border-b border-red-500 pb-1">
                                <input
                                    id="login-username"
                                    type="text"
                                    placeholder="Required"
                                    className="w-full bg-transparent outline-none text-sm py-1 placeholder:text-gray-300"
                                    required
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex items-center justify-between border-b border-gray-200 pb-1">
                                <input
                                    id="login-password"
                                    aria-label="Password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full bg-transparent outline-none text-sm py-1 placeholder:text-gray-300"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${formData.rememberMe ? 'bg-[#00c9a7] border-[#00c9a7]' : 'border-gray-300'}`}>
                                    {formData.rememberMe && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                    <input
                                        aria-label="Remember me"
                                        type="checkbox"
                                        className="sr-only"
                                        checked={formData.rememberMe}
                                        onChange={() => setFormData({ ...formData, rememberMe: !formData.rememberMe })}
                                    />
                                </div>
                                <span className="text-xs text-gray-500 font-medium">Remember Me</span>
                            </label>
                            <Link to="/forgot-password" className="text-xs text-[#00c9a7] font-semibold hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#00c9a7] hover:bg-[#00b395] text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-[#00c9a7]/20 active:scale-[0.98]"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-[10px] text-gray-400">
                            By logging in, you confirm acceptance of our <Link to="/terms" className="text-[#00c9a7] hover:underline">Terms of Use</Link>
                        </p>
                    </div>

                    {/* Social/Alternative Login */}
                    <div className="mt-6 space-y-3">
                        <button className="w-full border border-gray-100 py-2.5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
                            <Lock size={16} className="text-gray-600" />
                            <span className="text-xs font-bold text-gray-700">Log in with OTP</span>
                        </button>

                        <button className="w-full border border-gray-100 py-2.5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.273 0 3.191 2.727 1.241 6.709l4.025 3.056z" />
                                <path fill="#34A853" d="M16.04 18.013c-1.09.696-2.515 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067C3.185 21.273 7.273 24 12 24c3.118 0 5.89-1.058 7.962-2.859l-3.922-3.128z" />
                                <path fill="#4285F4" d="M19.962 21.141c2.436-2.145 3.991-5.646 3.991-9.141 0-.6-.109-1.355-.218-2.1H12v4.636h6.582a5.57 5.57 0 0 1-2.454 3.473l3.834 3.132z" />
                                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.791.136-1.545.368-2.235L1.252 6.709A11.946 11.946 0 0 0 0 12c0 1.92.455 3.736 1.252 5.344l4.025-3.076z" />
                            </svg>
                            <span className="text-xs font-bold text-gray-700">Sign in with Google</span>
                        </button>
                    </div>

                    <div className="mt-8 text-center space-y-2">
                        <p className="text-xs text-gray-600">
                            Don't have an account? <Link to="/signup" className="text-[#00c9a7] font-bold hover:underline">Sign up</Link>
                        </p>
                        <p className="text-xs text-gray-600">
                            Got a question? <Link to="/contact" className="text-[#00c9a7] font-bold hover:underline">Contact us</Link>
                        </p>
                    </div>
                </div>

                {/* App Download band */}
                <div className="bg-[#00aeef] p-4 flex flex-col items-center gap-4">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Download the App</span>
                    <div className="flex gap-4">
                        <button className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-all border border-gray-800">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5c-0.83,1.24-1.71,2.45-3.1,2.48c-1.34,0.03-1.77-0.79-3.29-0.79c-1.53,0-2,0.77-3.27,0.82 c-1.31,0.05-2.3-1.32-3.14-2.53C4.2,17.05,3.01,13,4.64,10.2c0.81-1.39,2.24-2.27,3.81-2.29c1.19-0.02,2.32,0.8,3.05,0.8 c0.73,0,1.86-1.02,3.14-0.86c0.55,0.02,2.06,0.22,3.04,1.65c-0.08,0.05-1.81,1.05-1.79,3.15c0.03,2.5,2.15,3.34,2.2,3.35 C19.9,16.51,19.5,18.3,18.71,19.5z M15.98,6.85c0.56-0.67,0.92-1.61,0.82-2.54c-0.8,0.03-1.76,0.53-2.33,1.2 c-0.51,0.59-0.96,1.55-0.84,2.46C14.44,7.03,15.42,6.52,15.98,6.85z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[7px] uppercase font-bold">Download on the</span>
                                <span className="text-xs font-bold">App Store</span>
                            </div>
                        </button>
                        <button className="bg-black text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-all border border-gray-800">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5.5,3.07a0.85,0.85,0,0,0-.2,0.5L10.5,12l5.2-1.3L18.8,3.6a0.85,0.85,0,0,0-.25-.45A1.3,1.3,0,0,0,17.2,3h-10A1.32,1.32,0,0,0,5.5,3.07Z" />
                                <path d="M10.5,12,5.3,18.43a0.85,0.85,0,0,0,.2,0.5,1.3,1.3,0,0,0,1,0.07h10.5a1.3,1.3,0,0,0,1.5-.07,0.85,0.85,0,0,0,.3-.5Z" />
                                <path d="M21.5,10.6,18.8,3.6a1.3,1.3,0,0,0-.45-.25L10.5,12l3.43,8.42a1.3,1.3,0,0,0,1,0.47h2.3a1.32,1.32,0,0,0,1.5-.1,0.85,0.85,0,0,0,.2-.5L22,12A1.3,1.3,0,0,0,21.5,10.6Z" />
                                <path d="M5.3,3.57a0.85,0.85,0,0,0-.3.5l-3,7.93a1.3,1.3,0,0,0,0,1l3,7.93a0.85,0.85,0,0,0,.3.5L10.5,12Z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[7px] uppercase font-bold">Get it on</span>
                                <span className="text-xs font-bold">Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default MfLoginPage;
