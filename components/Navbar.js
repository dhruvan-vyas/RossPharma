// components/Navbar.js
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
   const pathname = usePathname();
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header className="fixed top-0 mx-auto left-0 right-0 z-50 bg-white/70 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            {/* Replace this SVG with your actual logo image */}
            <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
            <h3 className='uppercase text-[#2C5948] font-bold'>Rosspharma</h3>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden links md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.name} href={item.href} className={`text-[#060C0C] border-b-2 ${isActive ? 'border-[#2C5948]' : 'border-transparent'} hover:text-[#2C5948] transition duration-150`}>
                  {item.name}
                </Link>
              );
            } )}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center">
            <Link
            href="/contact"
            className="pharma-button"
          >
            Contact
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;