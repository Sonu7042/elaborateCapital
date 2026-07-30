import { useState } from "react";
import contactImg from "../../assets/contact/contact.jpg";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-white">
      {/* Hero: Ask a Query */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-0 md:pl-[102px]">
        <h1 className="heading font-bold text-3xl lg:ml-20 md:text-[40px] text-gray-900 mb-8 md:mb-0  pt-6 md:pt-6">
          Ask a query
        </h1>

        {/* Content Row: Image + Form — 1185×539, gap 80 */}
        <div className="w-full max-w-[1185px] h-auto md:h-[539px] flex flex-col md:flex-row gap-10 md:gap-[80px] items-center md:items-stretch">
          {/* Left Image — 609×539 */}
          <div className="w-full md:w-[609px] shrink-0 h-auto md:h-[539px]">
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="w-full h-full max-w-[609px] rounded-xs object-cover"
            />
          </div>

          {/* Right Form — 496×449, gap 28 */}
          <div className="w-full md:w-[496px] flex flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[28px] h-auto md:h-[449px] justify-center"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-3 px-1 heading text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-3 px-1 heading text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-3 px-1 heading text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full border-b border-gray-300 bg-transparent py-3 px-1 heading text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <div className="flex justify-start mt-2">
                <button
                  type="submit"
                  className="bg-[#99C336] cursor-pointer text-black heading font-semibold text-[15px] px-10 py-3 rounded-full transition-all duration-300 active:scale-95"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="border-t border-[#99C336] mt- w-[72%] mx-auto">
            </div> */}

      {/* Contact Info Bar */}
      <div className="w-full  mt-6 mb-6 ">
        <div className="max-w-[1090px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-[70px] py-5 px-4 md:px-0">
          {/* Location */}
          <div className="flex items-center gap-[25px] w-full sm:w-auto justify-start sm:justify-start">
            <div className="w-[45px] h-[45px] rounded-full bg-[#99C336] flex items-center justify-center shrink-0">
              <MapPin className="w-[25px] h-[25px] text-white" />
            </div>
            <span className="heading font-medium text-[13px] md:text-[15px]  text-gray-800 leading-[22px]">
              Elaborate Capital Investment Service Pvt. Ltd.
            </span>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center gap-[25px] w-full sm:w-auto justify-start sm:justify-start">
            <div className="w-[45px] h-[45px] rounded-full bg-[#99C336] flex items-center justify-center shrink-0">
              <Phone className="w-[25px] h-[25px] text-white" />
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <a
                href="tel:01204421209"
                className="heading font-medium text-[13px] md:text-[15px] text-gray-800 hover:text-[#99C336] transition-colors"
              >
                0120 4421209
              </a>
              <a
                href="tel:+919198067155"
                className="heading font-medium text-[13px] md:text-[15px] text-gray-800 hover:text-[#99C336] transition-colors"
              >
                +91 - 9198067155
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-[25px] w-full sm:w-auto justify-start sm:justify-start">
            <div className="w-[45px] h-[45px] rounded-full bg-[#99C336] flex items-center justify-center shrink-0">
              <Mail className="w-[25px] h-[25px] text-white" />
            </div>
            <a
              href="mailto:elaboratecapital@gmail.com"
              className="heading font-medium text-[13px] md:text-[15px] text-gray-800 hover:text-[#99C336] transition-colors"
            >
              elaboratecapital@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-full mx-auto h-[350px] md:h-[557px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.8786665699927!2d77.00215931115876!3d28.635348683851063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x597991a7d26f45d%3A0xb5cbced8c1ea2bf5!2sSwastixa%20Digital!5e1!3m2!1sen!2sin!4v1779167931822!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


      </div>
    </section>
  );
};

export default Contact;
