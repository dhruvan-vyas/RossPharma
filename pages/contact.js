"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../components/Layout";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

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
const headerRef = useRef(null);
const contentRef = useRef(null);
const formRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {

    // 🔹 Header animation
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // 🔹 Left info
    gsap.fromTo(
      ".contact-info",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );

    // 🔹 Right form
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );

    // 🔹 Form fields stagger
    gsap.fromTo(
      formRef.current.querySelectorAll("div"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

  });

  return () => ctx.revert();
}, []);

  return (
    <Layout>
      {/* ⭐ Top Header Section: Let's Talk */}
      <section className="bg-white pt-20 pb-12 px-4 flex flex-col justify-center items-center">
        <div ref={headerRef} className="container mx-auto text-center max-w-4xl pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#060C0C] mb-4">
            Let's Talk
          </h1>
          <p className="text-gray-700 text-lg md:text-xl font-light max-w-xl mx-auto">
            Please complete the form below or give us a call to discuss your
            needs.
          </p>
        </div>
      </section>

      {/* ⭐ Main Contact Form & Info Section */}
      <section className="py-20 px-4 bg-[#EAFFF7]">
        <div className="container mx-auto">
          <div className="bg-[#EAFFF7] p-0 rounded-2xl">
            <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="contact-info flex flex-col justify-start pt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#060C0C] mb-6">
                  Contact Us
                </h2>

                <div className="space-y-6 text-gray-700">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="pharma-contact-detail">
                      <h4 className="font-semibold text-lg text-[#060C0C]">
                        {info.label}
                      </h4>
                      <p className="text-base">
                        {info.multiline ? (
                          <>
                            {info.value.split(", ").map((line, i) => (
                              <span key={i} className="block">
                                {line}
                                {i < info.value.split(", ").length - 1
                                  ? ","
                                  : ""}
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

              <div className="contact-form bg-[#EAFFF7] p-0 rounded-xl">
                <form ref={formRef} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#060C0C] mb-1"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#060C0C] mb-1"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[#060C0C] mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Example Company"
                      className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#060C0C] mb-1"
                    >
                      How can we help?*
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Share some details about your concern..."
                      className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-[#2C5948] focus:border-[#2C5948]"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#2C5948] text-white px-10 py-3 rounded-4xl font-semibold text-lg hover:bg-[#1f4234] hover:-translate-y-px transition-all duration-200 shadow-lg"
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