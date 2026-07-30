import { useState } from "react";
import illustration from "../../assets/about/about_1.jpg";
import illustration2 from "../../assets/about/about_2.jpg";
import partnerWithUs from "../../assets/about/howit.png";
import partnerwithus from "../../assets/company/partnerwithus.jpg";
import AboutSection from "./AboutSection";
import Founder from "./Founder";
import { motion } from "framer-motion";
import TestimonialSection from "../home/TestimonialSection";

/* ── Form field component ── */
interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}: FieldProps) => (
  <div className="flex flex-col gap-1">
    <input
      id={id}
      type={type}
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border-0 border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#99C336] focus:outline-none transition-colors duration-200"
    />
  </div>
);

const About: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    arn: "",
    referredBy: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <section className="w-full bg-white pt-4 md:pt-[30px] pb-16  lg:px-0 opacity-100">
        <div className="max-w-[1550px] mx-auto">
          {/* Hero Section */}
          <div className="max-w-[929px] mx-auto   flex flex-col md:flex-row gap-8 md:gap-[37px] items-center opacity-100">
            {/* Left Large Illustration */}
            <div className="w-full md:w-[582px] flex justify-center">
              <img
                src={illustration}
                alt="Team Illustration"
                className="w-full max-w-[582px] aspect-square rounded-xs shadow-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:flex-1 flex flex-col justify-between self-stretch gap-8 md:gap-[39px]">
              <h1 className="heading font-semibold text-3xl sm:text-4xl md:text-[48px] text-gray-900 leading-tight md:leading-[62.4px]">
                Future <br className="hidden md:block" /> Proof{" "}
                <br className="hidden md:block" /> Strategic{" "}
                <br className="hidden md:block" /> Investments
              </h1>

              <div className="w-full flex justify-center md:justify-start">
                <img
                  src={illustration2}
                  alt="About Illustration"
                  className="w-full max-w-[295px] aspect-square rounded-xs shadow-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info Text Section */}

          <Founder />
          <AboutSection />

          {/* Divider */}
          <div className="max-w-[1219px] mx-auto border-t border-gray-100 my-16 md:my-24" />

          {/* How We Work Section */}
          <div className="max-w-[1219px] mx-auto px-4 md:px-0 mb-20">
            <div className="mb-12 md:mb-16">
              <h2 className="heading font-bold text-3xl md:text-[42px] md:leading-[1.2] text-gray-900 mb-0">
                How We Work
              </h2>
              <p className="para font-normal text-base md:text-[18px] md:leading-[32px] text-gray-600 max-w-[600px]">
                {/* Elaborate Capital follows a simple and personalized approach—understanding your financial goals, designing tailored investment strategies, and guiding you at every step to ensure steady and confident wealth growth. */}
                Elaborate Capital follows a personalized approach—understanding
                your financial goals, creating tailored investment strategies,
                and guiding you toward confident wealth growth.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              {/* Left: Illustration */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={partnerWithUs}
                  alt="How We Work Illustration"
                  className="w-full max-w-[550px] h-auto object-contain"
                />
              </div>

              {/* Right: Steps */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-6">
                {[
                  {
                    title: "Boutique Approach",
                    description:
                      "Elaborate Capital delivers personalized attention while leveraging strong expertise and institutional capabilities to serve each client effectively.",
                  },
                  // {
                  //   title: "True Partnership",
                  //   description: "We work closely with clients as trusted partners, aligning financial solutions with their personal and strategic goals."
                  // },
                  {
                    title: "Expert Guidance",
                    description:
                      "Elaborate Capital brings deep financial expertise, strategic thinking, and disciplined execution to support informed decision-making.",
                  },
                  {
                    title: "Client-Aligned Growth",
                    description:
                      "We stay fully aligned with our clients’ goals, focusing on long-term relationships and continuous financial growth.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 md:gap-8 items-start group"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 mt-3 md:mt-4 shrink-0 transition-colors group-hover:bg-[#99C336]" />
                    <div>
                      <h3 className="heading font-bold text-2xl md:text-[28px] md:leading-[1.2] text-gray-900 mb-0">
                        {item.title}
                      </h3>
                      <p className="para font-normal text-sm md:text-[14px] md:leading-[28px] text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-[1219px] mx-auto px-4 md:px-0 mb-24 flex justify-center">
            <div className="relative w-full max-w-[800px] aspect-video rounded-[12px] md:rounded-[12px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(34,197,94,0.2)]">
              {/* Background Glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-green-50/50 via-white to-cyan-50/50 blur-3xl -z-10" />

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kBfbSs7VbXc?si=-R89xXwZ3EhrOkdP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section
        id="get-started"
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* ── LEFT: form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 min-w-0"
          >
            <h2 className="text-3xl md:text-4xl heading font-bold text-gray-900 mb-3">
              Enquiry Now
            </h2>

            <p className="text-base text-gray-500 para leading-relaxed mb-3 max-w-lg">
              Let's get in touch to start your journey to become a Mutual Fund
              Distributor. Kindly fill the form with required details or simply
              call / email us.
            </p>

            {/* Email */}
            <a
              href="mailto:elaboratecapital@gmail.com"
              className="inline-flex items-center para gap-2 text-sm text-gray-600 hover:text-[#7b0020] transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              elaboratecapital@gmail.com
            </a>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start gap-3 p-6 bg-green-50 border border-green-200 rounded-2xl"
              >
                <span className="text-3xl">🎉</span>
                <h3 className="text-lg heading font-bold text-green-800">
                  Thank you for your interest!
                </h3>
                <p className="text-sm para text-green-700">
                  We have received your details. Our team will reach out to you
                  at <strong>{form.email || form.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      city: "",
                      arn: "",
                      referredBy: "",
                    });
                  }}
                  className="mt-2 text-xs heading text-green-600 underline underline-offset-2"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="name"
                    label="Name"
                    value={form.name}
                    onChange={set("name")}
                  />
                  <FormField
                    id="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                  />
                  <FormField
                    id="city"
                    label="City"
                    value={form.city}
                    onChange={set("city")}
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="arn"
                    label="ARN, if any"
                    value={form.arn}
                    onChange={set("arn")}
                  />
                  <FormField
                    id="referredBy"
                    label="Referred by"
                    value={form.referredBy}
                    onChange={set("referredBy")}
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 6px 24px rgba(176,242,61,0.35)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="px-10 py-3 rounded-full heading font-semibold text-sm text-gray-900 transition-all"
                    style={{ background: "#99C336" }}
                  >
                    Send
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex-1 flex justify-center items-center"
          >
            <img
              src={partnerwithus}
              alt="Partner with us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      <TestimonialSection />
    </>
  );
};

export default About;
