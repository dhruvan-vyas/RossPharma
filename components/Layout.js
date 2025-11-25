import Head from 'next/head';
import Link from 'next/link';

// NOTE: Using the deep green color directly in Tailwind classes
const PRIMARY_COLOR = 'bg-[#204A3C]';
const HOVER_COLOR = 'hover:bg-[#347460]'; // Mid-tone green for hover
const font_falimy = "ha"
const Layout = ({ children, title = 'RossPharma.org' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Biotech consulting for QA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Subtle Background Shapes - Light Grey for Minimalist Look */}
      <div className="absolute top-0 left-0 w-full h-full z-[-10] overflow-hidden">
        {/* Light Grey Square Element */}
        <div className="absolute w-96 h-96 bg-gray-100 top-10 left-1/4 opacity-30 transform rotate-12"></div>
        {/* Light Grey Circle Element */}
        <div className="absolute w-72 h-72 bg-gray-100 bottom-20 right-10 rounded-full opacity-30"></div>
      </div>
{/* 
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img src="/logo.svg" alt="Rosspharma Logo" className="h-8" />
              <span className="text-xl font-semibold text-cyan-600" >ROSSPHARMA</span>
              <ul className="pl-8 flex space-x-8 text-gray-600 font-medium tracking-wide">
                <li><Link href="/about"><div className="hover:text-[#204A3C] transition-colors">About</div></Link></li>
                <li><Link href="/services"><div className="hover:text-[#204A3C] transition-colors">Services</div></Link></li>
                <li><Link href="/projects"><div className="hover:text-[#204A3C] transition-colors">Projects</div></Link></li>
                <li><Link href="/projects"><div className="hover:text-[#204A3C] transition-colors">Contact</div></Link></li>
              </ul>
            </div>
          </Link>
            <ul className="flex space-x-8 text-gray-600 font-medium tracking-wide">
            <li><Link href="/contact"><div className="border border-[#204A3C] text-[#204A3C] px-4 py-1 rounded-full hover:bg-gray-50 transition-colors">Contact</div></Link></li>
            </ul>
        </nav>
      </header> */}

<header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* 1. Logo/Home Link - Correctly Isolated */}
        <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
                {/* Replaced text-cyan-600 with the brand's dark green for consistency */}
                <span className="text-xl font-semibold text-[#204A3C]">ROSSPHARMA</span>
            </Link>
            
            {/* 2. Main Navigation Links - Placed NEXT to the Logo on desktop */}
            {/* Added 'hidden md:flex' to assume these links hide on mobile */}
            <ul className="hidden md:flex pl-8 space-x-8 text-gray-600 font-medium tracking-wide">
                <li>
                    {/* Simplified link structure: Link directly to the path */}
                    <Link href="/about" className="hover:text-[#204A3C] transition-colors">About</Link>
                </li>
                <li>
                    <Link href="/services" className="hover:text-[#204A3C] transition-colors">Services</Link>
                </li>
                <li>
                    <Link href="/projects" className="hover:text-[#204A3C] transition-colors">Projects</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-[#204A3C] transition-colors">Contact</Link>
                </li>
                {/* If 'Contact' is a button, remove it from the main ul and keep it separate */}
                {/* If it's a regular link, use: <Link href="/contact" ...>Contact</Link> */}
            </ul>
        </div>
        
        {/* 3. Contact Button/Link - Correctly Isolated */}
        <Link 
            href="/contact" 
            className="border border-[#204A3C] text-[#204A3C] px-4 py-1 rounded-full hover:bg-gray-50 transition-colors font-medium tracking-wide"
        >
            Contact
        </Link>
    </nav>
</header>



      <main className="container mx-auto px-4 py-16 min-h-screen">
        {children}
      </main>

      {/* <main className="py-16 min-h-screen"> 
        {children}
      </main> */}

      <footer className="bg-gray-100 p-8 text-center text-gray-600 mt-16">
        <p>Healing The Future | &copy; {new Date().getFullYear()} RossPharma. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;