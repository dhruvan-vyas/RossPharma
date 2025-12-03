import React, { useState } from "react";
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

// Accordion Item Component for Guiding Principles
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-[#060C0C] hover:text-[#2C5948] transition duration-150"
        onClick={onClick}
      >
        <span>{title}</span>
        <span className="text-xl font-light">{isOpen ? "—" : "+"}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};


const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 📝 ENGLISH DATA
  const guidingPrinciples = [
    {
      title: "Collaboration",
      content:
        "We work closely with our clients to achieve shared goals and deliver optimal results efficiently.",
    },
    {
      title: "Ethics",
      content:
        "We uphold the highest standards of integrity and transparency in all our interactions and projects.",
    },
    {
      title: "Adaptability",
      content:
        "We embrace change and tailor our strategies to the unique and evolving needs of the biotech landscape.",
    },
    {
      title: "Reliability",
      content:
        "We provide consistent, trustworthy, and timely service that our clients can depend on.",
    },
    {
      title: "Experts",
      content:
        "Our team comprises highly-qualified specialists, ensuring we deliver world-class knowledge and execution.",
    },
  ];

  const teamMembers = [
    { name: "Joseph Ross, PMP", title: "CEO & Founder", imagesrc: './Images/team.png' },
    { name: "Joseph Ross, PMP", title: "VP, Operations", imagesrc: './Images/team.png' },
    { name: "Joseph Ross, PMP", title: "Chief Scientist", imagesrc: './Images/team.png' },
    { name: "Joseph Ross, PMP", title: "Head of Regulatory", imagesrc: './Images/team.png' },
  ];

  const partners = [
    "Company Name",
    "Company Name",
    "Company Name",
    "Company Name",
    "Company Name",
    "Company Name",
  ];
  return (
    <Layout title="About Us | RossPharma.org">
      
      {/* <Navbar/> */}
      {/* 🧬 About Header Section */}
      <div className="pb-12 mt-0 h-100 pt-40 bg-white text-center border-b border-gray-100">
        {/* <h1 className="text-4xl font-extrabold text-[#060C0C] mb-2"> */}
          {/* About RossPharma */}
        {/* </h1> */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#060C0C] mb-2 break-words leading-tight">
          About RossPharma
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Empowering pharmaceutical and biotech companies through value-driven
          consulting led by regulatory expertise and strategic partnership.
        </p>
      </div>

      {/* 🔬 Story & Mission Section */}
      <div className="py-16 min-h-[40vh] md:min-h-[60vh] mx-auto px-4 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

            {/* VIDEO LEFT */}
            <div className="w-full lg:w-[60%]">
              <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
                <video
                  src="./videos/sample.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>

            {/* TEXT RIGHT */}
            <div className="w-full lg:w-[60%]">
              <h2 className="text-4xl md:text-5xl font-bold text-[#060C0C] mb-6">
                Our Story & Mission
              </h2>

              <p className="text-gray-700 mb-4">
                RossPharma was founded on the principle that uncompromising
                quality and compliance should be the foundation of every biotech
                innovation. Our team, composed of industry veterans, has spent
                decades navigating the complexities of global regulatory
                frameworks.
              </p>

              <p className="text-gray-700 font-semibold mb-4">
                Our mission is one of <i>partnership and precision</i>. We specialize
                in guiding clients through the stringent requirements of Good
                Manufacturing Practice (GMP), clinical development, and quality
                assurance.
              </p>

              <p className="text-gray-700">
                We empower innovators to focus on the science, while we ensure the
                pathway to market is secure, compliant, and optimized for success.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 🤝 Leadership Team Section (Light Green Background) */}
      <div className="bg-[#EAFFF7] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#060C0C] mb-2">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 mb-12">
            Meet the dedicated and professional people guiding our future.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-auto max-w-xs rounded-lg overflow-hidden shadow-lg mb-4 transform hover:scale-[1.02] transition duration-300">
                  <img
                    src={member.imagesrc}
                    alt={member.name}
                    className="w-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[#060C0C] text-lg">
                  {member.name}
                </p>
                <p className="text-sm text-[#2C5948]">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ⭐ Guiding Principles Section (Accordion) */}
      <div className="container mx-auto px-4 py-16 relative">
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-no-repeat bg-right-top opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url("/path/to/right-swoosh-graphic.svg")',
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/3 h-full bg-no-repeat bg-left-bottom opacity-10 pointer-events-none"
          style={{ backgroundImage: 'url("/path/to/left-swoosh-graphic.svg")' }}
        ></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#060C0C] mb-12">
            Our Guiding Principles
          </h2>

          <div className="bg-white rounded-lg divide-y divide-gray-200">
            {guidingPrinciples.map((principle, index) => (
              <AccordionItem
                key={index}
                title={principle.title}
                content={principle.content}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🌐 Trusted Partners Section */}
      <div className="py-16 bg-[#EAFFF7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#060C0C] mb-2">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 mb-12">
            We are privileged to work alongside some of the most dynamic
            companies in the industry.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {partners.map((name, index) => (
              <div
                key={index}
                className="text-xl font-semibold text-gray-500 hover:text-[#2C5948] transition duration-150 cursor-pointer"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default About;