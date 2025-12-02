// components/Navbar.js
"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <>
      {/* ------------------- DESKTOP NAVBAR ------------------- */}
      <header className="hidden fixed top-0 mx-auto lg:block left-0 right-0 z-50 bg-white/70 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side: Logo + Nav */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="items-center flex"
                >
                  <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
                  <h3 className='uppercase text-[#2C5948] font-bold text-2xl ml-2'>
                    Rosspharma
                  </h3>
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6 ">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-[#060C0C] border-b-2 ${isActive ? 'border-[#2C5948]' : 'border-transparent'
                        } hover:text-[#2C5948] transition duration-150`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right side: Contact button */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="pharma-button items-center gap-2 group"
              >
                <span className='text-[#F9FFFD]'>Contact</span>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 w-0 
                transition-all duration-300 ease-out
                group-hover:opacity-100 
                group-hover:w-3
                group-hover:translate-x-1"
                >
                  <path
                    d="M1.70279 0.292176C1.31321 -0.0973966 0.681591 -0.0973968 0.292018 0.292176C-0.0972548 0.681449 -0.0975988 1.31248 0.291249 1.70218L4.1674 5.58679L0.291249 9.47141C-0.097599 9.86111 -0.0972548 10.4921 0.292018 10.8814C0.681591 11.271 1.31321 11.271 1.70279 10.8814L6.6974 5.88679C6.86309 5.72111 6.86309 5.45248 6.6974 5.28679L1.70279 0.292176Z"
                    fill="#F9FFFD"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------- MOBILE TOP BAR ------------------- */}
      <header className='fixed block lg:hidden top-0 mx-auto left-0 right-0 z-50 bg-white/70 '>
        <div className="container mx-auto px-4">
          <div className='flex justify-between h-16 items-center'>
            <div className="flex items-center ">
              <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
              <h3 className='uppercase text-[#2C5948] text-xl font-bold'>Rosspharma</h3>
            </div>

            {/* Hamburger Button */}
            <div onClick={() => setMenuOpen(true)} className="cursor-pointer">
              <svg fill="#2C5948" width="18px" height="18px" viewBox="0 0 52 52" stroke="#2C5948">
                <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------- MOBILE MENU PANEL ------------------- */}
      <div
        className={`fixed lg:hidden top-0 left-0 z-100 h-full w-full bg-[#ffffff]  transition-all ease-in duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className='flex justify-between h-16 items-center'>
            <div className="flex items-center ">
              <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
              <h3 className='uppercase text-[#2C5948] text-xl font-bold'>Rosspharma</h3>
            </div>

            {/* Close Button */}
            <div className='cursor-pointer' onClick={() => setMenuOpen(false)}>
              <svg fill="#2C5948" width="18px" height="18px" viewBox="0 0 52 52" stroke="#2C5948">
                <path d="M28.94,26,51.39,3.55A2.08,2.08,0,0,0,48.45.61L26,23.06,3.55.61A2.08,2.08,0,0,0,.61,3.55L23.06,26,.61,48.45A2.08,2.08,0,0,0,2.08,52a2.05,2.05,0,0,0,1.47-.61L26,28.94,48.45,51.39a2.08,2.08,0,0,0,2.94-2.94Z"></path>
              </svg>
            </div>
          </div>

          <div className='items-center flex justify-center mt-8'>
            <nav className="flex flex-col gap-10 text-center">

              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-[#060C0C] text-2xl border-b-2 ${isActive ? 'border-[#2C5948]' : 'border-transparent'
                      } hover:text-[#2C5948] transition duration-150`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="pharma-button flex justify-center"
              >
                Contact
              </Link>

            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
