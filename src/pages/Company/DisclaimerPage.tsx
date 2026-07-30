import { motion } from "framer-motion";

const DisclaimerPage = () => {
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
              Legal <span className="text-[#1e293b]">Disclaimer</span>
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
            className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-16 space-y-8"
          >
            <div className="prose prose-slate max-w-none text-[#4b5563] para leading-relaxed space-y-6">
              <p>
                These are our terms and conditions for usage of the website and
                the related services offered by Elaborate Capital Investment. ('Related
                Services' hereafter means Stock Market Trading / Mutual Funds /
                ULIPs / Investment Analysis given through E-Mail, Messenger,
                Mobile Phone, Mobile SMS, Telephone or in any other form, manner
                or media).
              </p>
              <p>
                Elaborate Capital Investment Services owns all its contents & related
                services. You agree and understand that the information and
                material contained in this website and the related services
                offered by Elaborate Capital Investment Services.
              </p>
              <p>
                Research' implies and constitutes your consent to the terms and
                conditions mentioned below. You also agree that Elaborate Capital
                Investment Services can modify or alter the terms and conditions
                of the use of this service without any liability.
              </p>
              <p>
                The contents of this site & related services offered by Elaborate Capital
                Investment Services are solely the personal views of the
                contributors. Elaborate Capital Investment Services reserve the right to
                make modifications and alterations to the contents of this
                website. Users are advised to use the data for the purpose of
                information only and rely on their own judgment while making
                investment or trading decisions. The investments or trades
                discussed or recommended in this website & related services
                offered by Elaborate Capital Investment Services may not be suitable for
                all investors.
              </p>
              <p>
                Elaborate Capital Investment Services do not warranty the timeliness,
                accuracy or quality of the electronic content and take no
                responsibility for any loss or profit arising out of decisions
                being made by anyone acting on the analysis published in this
                website.
              </p>
              <p>
                The contents of this website & the related services offered by
                Elaborate Capital Investment Services cannot be copied, reproduced,
                republished, uploaded, posted, transmitted or distributed for
                any non-personal use without obtaining prior permission from
                Elaborate Capital Investment Services. Any person who intend to use the
                services rendered by Elaborate Capital Investment Services should do so
                only after due consideration of the above as well as all other
                factors.
              </p>
              <p>
                Elaborate Capital Investment Services is not responsible for the contents
                of any of the linked sites. By providing access to other website
                nor recommending nor endorsing the content available in the
                linked websites. If you do not agree to any of the terms
                mentioned in this agreement, you should kindly exit the site.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;
