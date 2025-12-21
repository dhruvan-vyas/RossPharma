import Layout from "../components/Layout";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Biomanufacturing Facility Audit",
    description:
      "Comprehensive QA audit to ensure compliance with global GMP regulations for a leading biopharma company.",
    link: "#",
  },
  {
    title: "Clinical Trial Data Management",
    description:
      "Developed a robust data management system to streamline clinical trial reporting and ensure data integrity.",
    link: "#",
  },
  {
    title: "New Drug Application (NDA) Submission",
    description:
      "Provided full regulatory support and documentation for a successful NDA submission, accelerating market entry.",
    link: "#",
  },
  {
    title: "GMP Documentation Overhaul",
    description:
      "Revised and standardized SOPs, BMRs, and compliance documents to align with FDA and EMA expectations.",
    link: "#",
  },
  {
    title: "Quality Management System (QMS) Setup",
    description:
      "Implemented a modern digital QMS for a pharma manufacturer, ensuring audit readiness and deviation tracking.",
    link: "#",
  },
  {
    title: "Pharmacovigilance Compliance Review",
    description:
      "Conducted a complete safety and risk management review aligned with ICH E2E and global PV requirements.",
    link: "#",
  },
  {
    title: "Validation & Qualification Project",
    description:
      "Performed equipment IQ/OQ/PQ validation for a sterile injectable facility to ensure regulatory compliance.",
    link: "#",
  },
  {
    title: "Regulatory Gap Assessment",
    description:
      "Identified compliance gaps for international submissions and provided corrective action plans.",
    link: "#",
  },
  {
    title: "Health Canada Submission Support",
    description:
      "Assisted in preparing CTD modules and regulatory documentation for a successful Health Canada product filing.",
    link: "#",
  },
];


const Projects = () => {


useEffect(() => {
  const cards = gsap.utils.toArray(".project-card");

  cards.forEach((card, index) => {
    let fromVars = { opacity: 0 };

    if (window.innerWidth >= 1024) {
      // lg:grid-cols-4 → ALL from bottom
      fromVars.y = 60;
    } else {
      // md:grid-cols-2 + mobile
      fromVars.x = index % 2 === 0 ? -80 : 80;
    }

    gsap.fromTo(
      card,
      fromVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.9,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });
}, []);


  return (
    <Layout title="Projects | RossPharma.org">
      {/* ⭐ HEADER SECTION */}
      <section className="bg-[#EAFFF7] mt-4 py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">

          <h1 className="
      text-3xl 
      sm:text-4xl 
      md:text-5xl 
      lg:text-6xl 
      font-extrabold 
      text-[#060C0C] 
      mb-4 md:mb-6
    ">
            Our Projects & Case Studies
          </h1>

          <p className="
      text-base
      sm:text-lg
      md:text-xl
      lg:text-2xl
      font-light 
      text-gray-700 
      max-w-3xl 
      mx-auto
    ">
            We proudly partner with leading biotech and pharmaceutical
            organizations to solve complex challenges with compliant and
            innovative solutions.
          </p>

        </div>
      </section>

      {/* ⭐ PROJECT CARDS SECTION */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group opacity-0 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#EAFFF7] rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#2C5948] ">
                  <img
                    src="./icons/bulb.svg"
                    className="w-6 h-6 group-hover:invert transition-all"
                    alt=""
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#060C0C] mb-3 group-hover:text-[#2C5948] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Link */}
                <Link href={project.link}>
                  <span className="mt-6 inline-block text-[#2C5948] font-semibold hover:underline cursor-pointer">
                    View Case Study →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
