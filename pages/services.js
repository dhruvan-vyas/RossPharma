import Layout from "../components/Layout";
import Link from "next/link";

const Services = () => {
  // Data for the Service Cards (UNCHANGED)
  const servicesData = [
    {
      title: "Biotech Solutions",
      description: [
        "Navigating the biotech landscape requires agility and foresight. We partner with biotech firms from early-stage development to clinical trials, providing strategic guidance on regulatory pathways, quality system implementation, and vendor management.",
        "Our experts help you build a robust foundation for growth, ensuring that your innovative science is supported by compliant and efficient operations. We assist in preparing for due diligence, scaling up manufacturing, and ensuring product quality at every step.",
      ],
      img: "/Images/biotech_sol.png",
      icon: "/icons/bulb.svg",
    },
    {
      title: "cGMP Compliance",
      description: [
        "Current Good Manufacturing Practice (cGMP) is the bedrock of safe and effective pharmaceutical production. We ensure your manufacturing processes, facilities, and quality management systems adhere to the highest global standards set by regulatory bodies like the FDA and EMA.",
        "Our services include gap assessments, SOP development, batch record review, and audit readiness training. We work hands-on with your team to cultivate a culture of quality, mitigating risks and ensuring your products consistently meet all required specifications.",
      ],
      img: "/Images/cgmp-compliance.png",
      icon: "/icons/bulb.svg",
    },
    {
      title: "Quality Assurance & Audit",
      description: [
        "A robust Quality Assurance (QA) system is vital for regulatory success and patient safety. We help design and implement phase-appropriate QA systems that are both compliant and scalable, evolving with you from pre-clinical stages through commercialization.",
        "Our independent audit services provide an unbiased evaluation of your internal systems and your external vendors (CMOs, CROs). We identify potential compliance gaps and provide actionable recommendations, preparing you for successful regulatory inspections and ensuring supply chain integrity.",
      ],
      img: "/Images/quality_assurance.png",
      icon: "/icons/bulb.svg",
    },
    {
      title: "Project Solutions",
      description: [
        "Bringing a therapeutic product to market involves managing countless interconnected activities. Our project solutions provide the expert oversight needed to keep your development programs on track, on time, and on budget.",
        "We offer end-to-end project management, from strategic planning and risk assessment to execution and delivery. By serving as a central point of coordination, we streamline communication, manage timelines, and ensure all stakeholders are aligned towards a common goal: successful project completion.",
      ],
      img: "/Images/detail.png",
      icon: "/icons/bulb.svg",
    },
  ];

  return (
    <Layout>
      {/* ⭐ HEADER SECTION */}
      <section className=" mt-18  px-4 bg-white">
        <div className="container py-16 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#060C0C] mb-6">
            Our Services & Solutions
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            We provide comprehensive consulting offerings tailored to the unique
            needs of the biotech and pharmaceutical industries.
          </p>
        </div>
      </section>

      {/* ⭐ SERVICES GRID SECTION */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service, index) => (
              <div
                key={index}
                // ⭐ group ક્લાસ કાર્ડ કન્ટેનર પર ઉમેરવામાં આવ્યો
                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Card Image */}
                <div className="w-full h-64 overflow-hidden rounded-xl mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ⭐ Title Row with Circular Icon Background */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon Wrapper - Hover effect for background color */}
                  <div
                    // ⭐ આઇકન બેકગ્રાઉન્ડ: ફરીથી #EAFFF7 (હળવો ગ્રીન) પર સેટ કર્યું છે અને hover પર #2C5948 થાય છે
                    className="flex-shrink-0 bg-[#EAFFF7] p-3 rounded-full flex items-center justify-center group-hover:bg-[#2C5948] transition-colors duration-300"
                  >
                    <img
                      src={service.icon}
                      alt=""
                      // ⭐ આઇકન કલર: hover પર white જ રહેશે (invert filter દ્વારા)
                      className="w-6 h-6 md:w-7 md:h-7 group-hover:filter group-hover:invert transition-all duration-300"
                    />
                  </div>

                  <h3
                    // ⭐ હેડિંગ કલર: hover પર ગ્રીન થાય છે
                    className="text-2xl font-bold text-[#060C0C] group-hover:text-[#2C5948] transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description Text */}
                <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                  {service.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ CTA SECTION (UNCHANGED) */}
      <section className="bg-[#EAFFF7] py-20 px-4 mb-0">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#060C0C] mb-4">
            Let’s Connect!
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
            We are here to help you provide a solution to your specific needs.
          </p>

          <Link href="/contact">
            <button className="bg-[#2C5948] text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-[#1f4234] transition-colors shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;