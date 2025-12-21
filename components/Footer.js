"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const pathname = usePathname();
    const footerRef = useRef(null);
    const ctaRef = useRef(null);
    const contentRef = useRef(null);
    const copyrightRef = useRef(null);

    useEffect(() => {
  const ctx = gsap.context(() => {

    // 🔥 CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }

    // 🔥 Footer main content
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    // 🔥 Copyright
    gsap.fromTo(
      copyrightRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: copyrightRef.current,
          start: "top 95%",
          once: true,
        },
      }
    );

  }, footerRef);

  return () => ctx.revert();
}, []);

    return (
        <footer ref={footerRef}>
            <div className="bg-[#1A2E2C] px-6 md:px-18 py-10 text-[#EAFFF7] mt-16 mx-auto">

                {/* TOP SECTION */}
                {pathname !== "/services" && pathname !== "/contact" && (
                    <div ref={ctaRef} className="flex justify-center items-center text-center mb-12">
                        <div className="max-w-[80%] mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mx-auto">
                                Knowledgeable of International Regulations and Standards
                            </h2>

                            <Link
                                href="/contact"
                                className="inline-block bg-[#EAFFF7] hover:bg-transparent hover:border-[#EAFFF7] border-2 hover:text-[#EAFFF7] px-5 py-2 rounded-3xl text-[#1A2E2C] mt-8 font-semibold transition-all"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}

                {/* BOTTOM SECTION */}
                <div ref={contentRef} className="flex flex-col md:flex-row w-full gap-10 my-4 md:gap-0">

                    {/* LEFT SECTION */}
                    <div className="w-full md:w-1/3 flex flex-col gap-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Rosspharma</h3>
                        <p className="text-sm">HEALING THE FUTURE</p>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="w-full md:w-2/3 flex flex-wrap justify-between items-start gap-10">

                        {/* QUICK LINKS */}
                        <div className="flex flex-col gap-1">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">Quick Links</h4>

                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>

                        {/* LEGAL PAGES */}
                        <div className="flex flex-col gap-1">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">Legal Pages</h4>
                            <Link href="/terms-of-service">Terms of Service</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </div>

                        {/* SOCIAL */}
                        <div className="flex flex-col gap-1">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">Follow Us</h4>
                            <Link href='#'>
                                <span className="flex items-center gap-2 cursor-pointer text-[#EAFFF7] hover:scale-105 transition-transform duration-200">

                                    <svg
                                        height="18px"
                                        width="18px"
                                        viewBox="0 0 382 382"
                                    >
                                        <path
                                            style={{ fill: "#EAFFF7" }}
                                            d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 
                                            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,
                                            10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 
                                            c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,
                                            42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,
                                            9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021
                                            c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246
                                            V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,
                                            59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654z"
                                        />
                                    </svg>

                                    {/* FIXED WHITE COLOR TEXT */}
                                    <p className="text-sm text-[#EAFFF7]">LinkedIn</p>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div ref={copyrightRef} className="border-t-2 border-[#EAFFF7] text-center py-5">
                    <p className="text-xs sm:text-sm md:text-base">
                        © 2025 Rosspharma. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
