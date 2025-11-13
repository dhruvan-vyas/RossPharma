// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            {/* Replace this SVG with your actual logo image */}
            <svg className="w-8 h-8 text-green-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618 4.278a11.97 11.97 0 01-1.298 2.062c-1.077 1.076-2.037 1.545-3.003 1.545S9.404 15.361 8.327 14.285c-1.077-1.076-1.545-2.036-1.545-3.002S7.25 8.326 8.327 7.25C9.404 6.173 10.364 5.705 11.33 5.705s1.959.468 3.036 1.545c.745.746 1.13 1.488 1.298 2.062M12 20a8 8 0 100-16 8 8 0 000 16z"></path></svg>
            <span className="text-xl font-bold text-gray-800 tracking-wider">ROSSPHARMA</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 hover:text-green-700 transition duration-150">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center">
            <Link href="/contact" className="px-5 py-2 border-2 border-green-700 text-green-700 rounded-full hover:bg-green-50 transition duration-150 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;