"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // 🔥 Navbar entrance animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      {/* ================= NAVBAR WRAPPER ================= */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        {/* ---------------- DESKTOP ---------------- */}
        <div className="hidden lg:flex h-20 items-center">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" className="h-10" alt="logo" />
                <span className="ml-2 font-bold text-2xl text-[#2C5948] uppercase">
                  Rosspharma
                </span>
              </Link>

              <nav className="flex space-x-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`border-b-2 ${
                        isActive
                          ? "border-[#2C5948] text-[#2C5948]"
                          : "border-transparent text-[#060C0C]"
                      } hover:text-[#2C5948] transition`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <Link href="/contact" className="pharma-button">
              Contact
            </Link>
          </div>
        </div>

        {/* ---------------- MOBILE ---------------- */}
        <div className="flex lg:hidden h-16 items-center px-4 justify-between">
          <div className="flex items-center">
            <img src="/logo.png" className="h-9" alt="logo" />
            <span className="ml-1 text-xl font-bold text-[#2C5948] uppercase">
              Rosspharma
            </span>
          </div>

          <button onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 bg-white/80 backdrop-blur-md transition-all duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#060C0C]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;