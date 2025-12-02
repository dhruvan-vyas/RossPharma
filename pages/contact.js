import Layout from "../components/Layout";
import Link from "next/link";

const Contact = () => {
  // Contact details as per the design
  const contactInfo = [
    {
      label: "Phone:",
      value: "(+1) 456-7890",
    },
    {
      label: "Email:",
      value: "contact@rosspharma.com",
    },
    {
      label: "Address:",
      value: "123 Biotech Ave, Innovation City, 12345",
      multiline: true,
    },
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
<section className="bg-white pt-24 pb-12 px-4 flex flex-col justify-center items-center">
  <div className="container mx-auto text-center max-w-3xl pt-12 pb-10">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#060C0C] mb-4 leading-tight">
      Let's Talk
    </h1>
    <p className="text-gray-700 text-base md:text-lg lg:text-xl font-light max-w-xl mx-auto">
      Please complete the form below or give us a call to discuss your needs.
    </p>
  </div>
</section>


{/* CONTACT SECTION */}
<section className="py-16 px-4 md:px-8 bg-[#EAFFF7]">
  <div className="container mx-auto">
    <div className="bg-[#EAFFF7] p-4 md:p-8 rounded-2xl">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

        {/* LEFT SIDE — DETAILS */}
        <div className="flex flex-col justify-start pt-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#060C0C] mb-6">
            Contact Us
          </h2>

          <div className="space-y-6 text-gray-700">
            {contactInfo.map((info, index) => (
              <div key={index} className="pharma-contact-detail">
                <h4 className="font-semibold text-lg md:text-xl text-[#060C0C]">
                  {info.label}
                </h4>
                <p className="text-base md:text-lg">
                  {info.multiline ? (
                    <>
                      {info.value.split(", ").map((line, i) => (
                        <span key={i} className="block">
                          {line}
                          {i < info.value.split(", ").length - 1 ? "," : ""}
                        </span>
                      ))}
                    </>
                  ) : (
                    info.value
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* RIGHT SIDE — FORM */}
        <div className="bg-[#EAFFF7] p-2 md:p-4 rounded-xl">
          <form className="space-y-6">

            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-semibold text-[#060C0C] mb-1"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-semibold text-[#060C0C] mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm md:text-base font-semibold text-[#060C0C] mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Example Company"
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-semibold text-[#060C0C] mb-1"
              >
                How can we help?*
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Share some details about your concern..."
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C5948] text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-[#1f4234] transition-colors shadow-lg"
            >
              Contact Us
            </button>

          </form>
        </div>

      </div>

    </div>
  </div>
</section>

    </Layout>
  );
};

export default Contact;