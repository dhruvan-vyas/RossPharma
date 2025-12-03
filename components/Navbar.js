import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* ------------------- DESKTOP NAVBAR ------------------- */}
      <header className="hidden lg:flex absolute top-0 left-0 w-full z-50 h-20 items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">

          {/* Left side */}
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className="inline-flex items-center cursor-pointer select-none active:scale-95 transition"
            >
              <img src="/logo.png" alt="Rosspharma Logo" className="h-10 pointer-events-none" />
              <h3 className="uppercase text-[#2C5948] font-bold text-2xl ml-2 pointer-events-none">
                Rosspharma
              </h3>
            </Link>

            <nav className="flex space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[#060C0C] border-b-2 ${
                      isActive ? "border-[#2C5948]" : "border-transparent"
                    } hover:text-[#2C5948] transition`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div> 

          {/* Right button */}
          <Link href="/contact" className="pharma-button flex items-center gap-2 group">
            <span className="text-white">Contact</span>
          </Link>
        </div>
      </header>

      {/* ------------------- MOBILE NAVBAR ------------------- */}
      <header className="block lg:hidden absolute top-0 left-0 w-full z-50 h-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
              <h3 className="uppercase text-[#2C5948] text-xl font-bold ml-1">
                Rosspharma
              </h3>
            </div>

            {/* Hamburger */}
            <div onClick={() => setMenuOpen(true)} className="cursor-pointer">
              <svg fill="#2C5948" width="22px" height="22px" viewBox="0 0 52 52">
                <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------- MOBILE MENU ------------------- */}
      <div
        className={`fixed lg:hidden top-0 left-0 z-50 h-full w-full bg-white/70 backdrop-blur-md
          transition-all duration-300 ease-in
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="container mx-auto px-4">

          {/* Mobile close bar */}
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
              <h3 className="uppercase text-[#2C5948] text-xl font-bold ml-1">Rosspharma</h3>
            </div>

            <div onClick={() => setMenuOpen(false)} className="cursor-pointer">
              <svg fill="#2C5948" width="20px" height="20px" viewBox="0 0 52 52">
                <path d="M28.94,26,51.39,3.55A2.08,2.08,0,0,0,48.45.61L26,23.06,3.55.61A2.08,2.08,0,0,0,.61,3.55L23.06,26,.61,48.45A2.08,2.08,0,0,0,2.08,52a2.05,2.05,0,0,0,1.47-.61L26,28.94,48.45,51.39a2.08,2.08,0,0,0,2.94-2.94Z"/>
              </svg>
            </div>
          </div>

          {/* Menu items */}
          <div className="flex justify-center mt-12">
            <nav className="flex flex-col gap-10 text-center">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`text-[#060C0C] text-2xl  hover:text-[#2C5948] transition`}
              >
                Home
              </Link>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-[#060C0C] text-2xl border-b-2 ${
                      isActive ? "border-[#2C5948]" : "border-transparent"
                    } hover:text-[#2C5948] transition`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="pharma-button flex justify-center text-xl"
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