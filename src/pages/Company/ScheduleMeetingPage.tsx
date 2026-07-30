import React, { useState } from "react";
import { motion } from "framer-motion";
import ScheduleMeetings from "../../assets/HeroImages/schedulemeeting.jpg";

const ScheduleMeetingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Meeting Scheduled:", formData);
    alert("Meeting request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Maroon/Dark Brown Header */}

      <h1 className="text-2xl mb-12 heading text-center ml-5 md:text-4xl md:pl-20 mb-4 mt-8 font-bold">
        Schedule a <span className="text-[#99C336]">Meeting</span>
      </h1>

      <div className="container mx-auto px-6 max-w-7xl pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <h2 className="text-[#0D1B3E] text-3xl font-bold heading">
              Please fill the form below
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-100/80 rounded-sm bg-white focus:outline-none focus:border-[#99C336] transition-all para text-lg shadow-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-100/80 rounded-sm bg-white focus:outline-none focus:border-[#99C336] transition-all para text-lg shadow-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-100/80 rounded-sm bg-white focus:outline-none focus:border-[#99C336] transition-all para text-lg shadow-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-100/80 rounded-sm bg-white focus:outline-none focus:border-[#99C336] transition-all para text-lg shadow-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  name="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-100/80 rounded-sm bg-white focus:outline-none focus:border-[#99C336] transition-all para text-lg shadow-sm"
                  required
                />
              </div>

              <button
                className="relative mt-0 p-[2px] rounded-full hover:cursor-pointer
                           bg-linear-to-r from-[#7ECA9C] via-[#0D3052] to-red-500 
                           bg-size-[200%_100%]
                           hover:shadow-lg active:scale-95 transition-all"
                style={{
                  animation: "borderRun 4s linear infinite",
                }}
              >
                <div className="px-8 py-2.5 rounded-full bg-white">
                  <span className="text-gray-900 heading font-medium text-sm">
                    Submit
                  </span>
                </div>

                <style>
                  {`
                                          @keyframes borderRun {
                                            from { background-position: 0% 0%; }
                                            to { background-position: 500% 0%; }
                                          }
                                        `}
                </style>
              </button>
            </form>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className=" rounded-sm p-12 w-full max-w-xl aspect-square flex items-center justify-center overflow-hidden shadow-sm relative">
              {/* Subtle background pattern or depth */}
              <div className="absolute inset-0 opacity-10 bg-grid-slate-100"></div>
              <img
                src={ScheduleMeetings}
                alt="Schedule Meeting Illustration"
                className="w-full h-auto object-contain transform hover:scale-110 transition-transform duration-700 ease-in-out relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingPage;
