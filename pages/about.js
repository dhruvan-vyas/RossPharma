"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import React, { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout';

// Accordion Item Component for Guiding Principles
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power1.out" }
      );
    }
  }, [isOpen]);

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
        <div ref={contentRef} className="pb-4 text-gray-600">
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

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.muted = true;
      video.play().catch(() => { });
    };

    video.addEventListener("loadeddata", playVideo);
    return () => video.removeEventListener("loadeddata", playVideo);
  }, []);


  // GSAP Animations
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.3
      }
    );
  }, []);

  const storyRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 75%",
      },
    });

    tl.from(".story-video", {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }).from(
      ".story-text",
      {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);

  const teamRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      teamRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);


  const principlesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      principlesRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: principlesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const partnersRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      partnersRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: partnersRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <Layout title="About Us | RossPharma.org">

      {/* <Navbar/> */}
      {/* 🧬 About Header Section */}
      <div ref={headerRef} className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 mt-0 h-100 pt-28 sm:pt-32 md:pt-36 lg:pt-40 bg-white text-center">
        {/* <h1 className="text-4xl font-extrabold text-[#060C0C] mb-2"> */}
        {/* About RossPharma */}
        {/* </h1> */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#060C0C] mb-2 wrap-break-word leading-tight">
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
          <div ref={storyRef} className="flex flex-col-reverse lg:flex-row items-center gap-12">

            {/* VIDEO LEFT */}
            <div className="story-video w-full lg:w-[60%]">
              <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => { });
                    }
                  }}
                  src="/videos/sample.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/video-poster.jpg"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>

            {/* TEXT RIGHT */}
            <div className="story-text w-full lg:w-[60%]">
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

          <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        <div ref={principlesRef} className="max-w-3xl mx-auto text-center relative z-10">
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

          <div ref={partnersRef} className="flex flex-wrap justify-center gap-x-12 gap-y-8">
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