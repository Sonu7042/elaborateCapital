import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ══════════════════════════════
                HERO / HEADER SECTION
            ══════════════════════════════ */}
      <section className="relative w-full pb-0 pt-10 bg-linear-to-b from-white via-[#f0f9f3] to-white overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#99C336]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2d3a4b]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl heading font-bold text-[#1e293b] mb-6 leading-tight"
            >
              Privacy <span className="text-[#1e293b]">Policy</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
                CONTENT SECTION
            ══════════════════════════════ */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-2 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-16 space-y-12"
          >
            {/* Section 1: Intro */}
            <div className="prose prose-slate max-w-none">
              <div className="text-[#4b5563] para leading-relaxed space-y-6">
                <p>
                  This privacy policy sets out how Elaborate Capital Investment Services
                  uses and protects any information that you share when you use
                  this website.
                </p>
                <p>
                  Elaborate Capital Investment Services is committed to ensuring that
                  your privacy is protected at all times. Should we ask you to
                  provide certain information by which you can be identified
                  when using this website, you can be assured that it will only
                  be used in accordance with this privacy statement.
                </p>
                <p>
                  Elaborate Capital Investment Services may change this policy from time
                  to time by updating this page. This policy is effective from
                  June 1, 2018.
                </p>
              </div>
            </div>

            {/* Section 2: Commitment */}
            <div className="prose prose-slate max-w-none">
              <div className="text-[#4b5563] para leading-relaxed space-y-6">
                <p>
                  Elaborate Capital Investment Services understands that our relationship
                  is strongly built on trust and faith. In Course of using
                  information on this website or availing the services, Elaborate Capital
                  Investment Services may become privy to the personal
                  information of its customer including information that is of
                  confidential nature. Elaborate Capital Investment Services is strictly
                  committed to protecting the privacy of its Customer and has
                  taken reasonable measures to protect the confidentiality of
                  the customer information and its transmission through World
                  Wide Web. However it shall not be liable in any manner for
                  disclosure of the confidential information in accordance with
                  this Privacy Commitment or in terms of the agreement if any
                  with the Customer or by reasons beyond its control. We may
                  however be required to disclose your personal information to
                  Government, Judicial bodies, and our Regulators or to any
                  person to whom the Firm is under an obligation to make
                  disclosure under the requirements of any law binding on the
                  Firm or any of its branches, if required.
                </p>
              </div>
            </div>

            {/* Section 3: Hyperlink Policy */}
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  Hyperlink Policy for user
                </h2>
              </div>
              <p className="text-[#4b5563] para leading-relaxed font-medium">
                Any hyperlink to other Internet sites is at customer's own risk.
                The contents of which and the accuracy of opinions expressed are
                not verified, monitored or endorsed by Elaborate Capital Investment
                Services, in any way or manner. Elaborate Capital Investment Services is
                not responsible for the setup of any hyperlink from a third
                party website to Elaborate Capital Investment Services.
              </p>
            </div>

            {/* Section 4: What we collect */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  What we collect
                </h2>
              </div>
              <p className="text-[#4b5563] para mb-4">
                We may collect the following information:
              </p>
              <ul className="space-y-3">
                {[
                  "Name and contact details",
                  "Personal information, including date of birth, Aadhaar Number, and Permanent Account Number (PAN)",
                  "Demographic information such as gender and income",
                  "Other information that can help us improve our services",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1e293b] para decoration-slate-300"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5: What we do */}
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  What we do with the information we gather
                </h2>
              </div>
              <ul className="space-y-4 text-[#4b5563] para">
                <li className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                  <span>
                    To conduct Know-Your-Customer registration as required by
                    SEBI and/or other regulatory bodies
                  </span>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                  <span>
                    To perform compliance checks and keep/maintain internal
                    records
                  </span>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                  <span>
                    To use the information to improve our products and services
                  </span>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                  <span>
                    To periodically send emails to your registered email address
                    about your investments, or other information which we think
                    you may find interesting. You will be free to unsubscribe
                    from our mailing list at any time if you do not wish to
                    receive such emails from us. From time-to-time, we may also
                    use your information to contact you via phone or email for
                    market research purposes.
                  </span>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                  <span>
                    We will not sell, distribute or lease your personal
                    information to third parties unless we are required to share
                    such information under the terms and conditions of the
                    products and services you avail, or we are required to do so
                    by law.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 6: Security */}
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  Security
                </h2>
              </div>
              <p className="text-[#4b5563] para leading-relaxed">
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorised access or disclosure, we have put
                in place suitable physical, electronic and managerial procedures
                to safeguard and secure the information we collect online
              </p>
            </div>

            {/* Section 7: Links */}
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  Links to other websites
                </h2>
              </div>
              <p className="text-[#4b5563] para leading-relaxed">
                Our website may contain links to other websites of interest.
                However, once you have used these links to leave our site, you
                should note that we do not have any control over such
                third-party websites. Therefore, we cannot be responsible for
                the protection and privacy of any information which you provide
                whilst visiting such sites. You should exercise caution and look
                at the privacy statement applicable to the website in question.
              </p>
            </div>

            {/* Section 8: Controlling */}
            <div className="prose prose-slate max-w-none pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  Controlling your personal information
                </h2>
              </div>
              <p className="text-[#4b5563] para leading-relaxed">
                If you believe that any of your information with us is incorrect
                or incomplete, please email us as soon as possible. We will
                promptly correct any information found to be incorrect.
              </p>
            </div>

            {/* Section 9: Security Certificates */}
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#1e293b] m-0">
                  Security certificates
                </h2>
              </div>
              <div className="text-[#4b5563] para leading-relaxed space-y-4">
                <p>
                  Elaborate Capital Investment Services is an online financial services
                  company. We fully recognise and understand the security
                  implications of being service provider with whom people trust
                  their money. There are many safeguards we adopt in this regard
                  - some of these are technical, and some are structural.
                </p>
                <p className="font-bold text-[#1e293b]">
                  When it comes to data security, our goal is to ensure that:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                    <span>
                      Your data is stored safely and securely - passwords are
                      one-way encrypted before being stored in the database for
                      high security
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                    <span>
                      All communication with you, or with mutual fund companies
                      and other service providers - are encrypted using the
                      highest standards. Your data is not shared with anyone,
                      unless you have explicitly requested us to do so to fulfil
                      a transaction request.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0" />
                    <span>
                      To ensure that we achieve these goals, we have a variety
                      of certifications/trust verifications in place for our
                      firm, both from technical and legal/operational
                      perspectives. All our communications are encrypted by
                      256-bit encryption, and our data is hosted with top-tier
                      hosting service providers. Also, our data is continuously
                      backed up to ensure continuity of operations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
