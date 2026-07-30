import { useState } from "react";
import { motion } from "framer-motion";
import adsBanner from "../../assets/HeroImages/ads.png";
import partnerwithus from "../../assets/company/partnerwithus.jpg";
import { Link } from "react-router-dom";

/* ── Illustration (inline SVG — two people shaking hands with geometric shapes) ── */

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
    <label htmlFor={id} className="sr-only">{label}</label>
    <input
      id={id}
      type={type}
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border-0 border-b border-gray-300 bg-transparent py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#7b0020] focus:outline-none transition-colors duration-200"
    />
  </div>
);

/* ── Main Page ── */
const PartnerPage = () => {
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
    <div className="min-h-screen bg-white font-sans">
      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "60vh", minHeight: "320px", maxHeight: "520px" }}
      >
        {/* Background Image */}
        <img
          src={adsBanner}
          alt="Partner with Elaborate Capital"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.60) 0%, rgba(10,10,30,0.70) 100%)",
          }}
        />

        {/* Lime green glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 70%, rgba(176,242,61,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white heading font-bold drop-shadow-lg"
            style={{
              fontSize: "clamp(26px, 5vw, 48px)",
              lineHeight: 1.25,
              maxWidth: 700,
            }}
          >
            Be a partner at Elaborate Capital
            <br />
            <span style={{ color: "#ffffff" }}>Investment Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 para text-sm md:text-base max-w-lg"
          >
            Get support, training and guidance at every step of your journey
          </motion.p>
          <Link to="/login/mf">
            <motion.a
              href="#get-started"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 8px 28px rgba(176,242,61,0.40)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-12 inline-flex items-center gap-2 px-8 py-3 rounded-full heading font-semibold text-sm text-gray-900 cursor-pointer"
              style={{ background: "#99C336" }}
            >
              Client Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          </Link>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-4 left-4 w-16 h-16 rounded-full border border-white/10 opacity-30 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full border border-[#99C336]/20 opacity-40 pointer-events-none" />
      </section>

      {/* ══════════════════════════════
          GET STARTED SECTION
      ══════════════════════════════ */}
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
              Get Started
            </h2>

            <p className="text-sm text-gray-500 para leading-relaxed mb-3 max-w-lg">
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

      {/* ══════════════════════════════
          WHY PARTNER SECTION
      ══════════════════════════════ */}
      {/* <section className="bg-[#f5f5f5] py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <span className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(#7b0020, #99C336)' }} />
                        <h2 className="text-xl font-bold text-gray-800">Why Partner with Elaborate Capital?</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                emoji: '📚',
                                title: 'Training & Support',
                                desc: 'Comprehensive onboarding training and ongoing support to help you succeed.',
                                bg: 'bg-blue-50', border: 'border-blue-100', color: '#1565C0',
                            },
                            {
                                emoji: '💰',
                                title: 'Attractive Payouts',
                                desc: 'Competitive commission structure with timely payments directly to your account.',
                                bg: 'bg-green-50', border: 'border-green-100', color: '#2E7D32',
                            },
                            {
                                emoji: '🛠️',
                                title: 'Digital Tools',
                                desc: 'Access to cutting-edge digital platforms for portfolio management and reporting.',
                                bg: 'bg-amber-50', border: 'border-amber-100', color: '#B45309',
                            },
                            {
                                emoji: '🤝',
                                title: 'Dedicated Manager',
                                desc: 'A dedicated relationship manager to guide you at every step of your journey.',
                                bg: 'bg-red-50', border: 'border-red-100', color: '#9F1239',
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`${card.bg} ${card.border} border rounded-2xl p-6 flex flex-col gap-3`}
                            >
                                <span className="text-3xl">{card.emoji}</span>
                                <h3 className="font-bold text-gray-800 text-sm">{card.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

      {/* ══════════════════════════════
          BOTTOM CTA
      ══════════════════════════════ */}
      {/* <section className="py-14 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Ready to start your journey?
                    </h3>
                    <p className="text-sm text-gray-500 mb-7 max-w-lg mx-auto">
                        Join hundreds of financial advisors who have already partnered with Elaborate Capital to grow their business.
                    </p>
                    <a
                        href="#get-started"
                        className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full font-semibold text-sm text-gray-900 hover:shadow-lg transition-all active:scale-95"
                        style={{ background: '#99C336' }}
                    >
                        Become a Partner
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </section> */}
    </div>
  );
};

export default PartnerPage;
