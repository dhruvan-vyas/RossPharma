// components/Navbar.js =======================================( V1 )=======================================

// import Link from 'next/link';
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const pathname = usePathname();
//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Projects', href: '/projects' },
//   ];

//   return (
//     <header className="fixed top-0 mx-auto left-0 right-0 z-50 bg-white/70 ">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo Section */}
//           <div className="flex items-center">
//             {/* Replace this SVG with your actual logo image */}
//             <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
//             <h3 className='uppercase text-[#2C5948] font-bold'>Rosspharma</h3>
//           </div>

//           {/* Navigation Links (Desktop) */}
//           <nav className="hidden links md:flex space-x-8">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;

//               return (
//                 <Link key={item.name} href={item.href} className={`text-[#060C0C] border-b-2 ${isActive ? 'border-[#2C5948]' : 'border-transparent'} hover:text-[#2C5948] transition duration-150`}>
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Contact Button */}
//           <div className="flex items-center">
//             <Link
//               href="/contact"
//               className="pharma-button  items-center gap-2 group"
//             >
//               <span class='text-[#F9FFFD]'>Contact</span>
//               <svg
//                 width="7"
//                 height="12"
//                 viewBox="0 0 7 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="opacity-0 w-0 
//                 transition-all duration-300 ease-out
//                 group-hover:opacity-100 
//                 group-hover:w-3
//                 group-hover:translate-x-1"
//               >
//                 <path
//                   d="M1.70279 0.292176C1.31321 -0.0973966 0.681591 -0.0973968 0.292018 0.292176C-0.0972548 0.681449 -0.0975988 1.31248 0.291249 1.70218L4.1674 5.58679L0.291249 9.47141C-0.097599 9.86111 -0.0972548 10.4921 0.292018 10.8814C0.681591 11.271 1.31321 11.271 1.70279 10.8814L6.6974 5.88679C6.86309 5.72111 6.86309 5.45248 6.6974 5.28679L1.70279 0.292176Z"
//                   fill="#F9FFFD"
//                 />
//               </svg>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;












// components/Navbar.js =======================================( V2 )=======================================


// import Link from 'next/link';
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const pathname = usePathname();
//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Projects', href: '/projects' },
//   ];

//   return (
//     <header className="fixed top-0 mx-auto left-0 right-0 z-50 bg-white/70 ">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo Section */}
//           <div className="flex items-center">
//             {/* Replace this SVG with your actual logo image */}
//             <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
//             <h3 className='uppercase text-[#2C5948] font-bold text-2xl ml-2'>Rosspharma</h3>
//           </div>

//           {/* Navigation Links (Desktop) */}
//           <nav className="hidden links md:flex space-x-8">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;

//               return (
//                 <Link key={item.name} href={item.href} className={`text-[#060C0C] border-b-2 ${isActive ? 'border-[#2C5948]' : 'border-transparent'} hover:text-[#2C5948] transition duration-150`}>
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Contact Button */}
//           <div className="flex items-center">
//             <Link
//               href="/contact"
//               className="pharma-button  items-center gap-2 group"
//             >
//               <span class='text-[#F9FFFD]'>Contact</span>
//               <svg
//                 width="7"
//                 height="12"
//                 viewBox="0 0 7 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="opacity-0 w-0 
//                 transition-all duration-300 ease-out
//                 group-hover:opacity-100 
//                 group-hover:w-3
//                 group-hover:translate-x-1"
//               >
//                 <path
//                   d="M1.70279 0.292176C1.31321 -0.0973966 0.681591 -0.0973968 0.292018 0.292176C-0.0972548 0.681449 -0.0975988 1.31248 0.291249 1.70218L4.1674 5.58679L0.291249 9.47141C-0.097599 9.86111 -0.0972548 10.4921 0.292018 10.8814C0.681591 11.271 1.31321 11.271 1.70279 10.8814L6.6974 5.88679C6.86309 5.72111 6.86309 5.45248 6.6974 5.28679L1.70279 0.292176Z"
//                   fill="#F9FFFD"
//                 />
//               </svg>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;










// components/Navbar.js =======================================( V3 )=======================================

import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    // { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contect', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 mx-auto left-0 right-0 z-50 bg-white/70 ">
      <div className="container mx-auto px-4">


        <div className="flex justify-between items-center h-16">

          {/* Left side: Logo + Nav */}
          <div className="flex items-center space-x-6">

            {/* Logo */}
            {/* <div className="flex items-center">
              <img src="/logo.png" alt="Rosspharma Logo" className="h-9" />
              <h3 className='uppercase text-[#2C5948] font-bold text-2xl ml-2'>
                Rosspharma
              </h3>
            </div> */}

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
                    className={`text-[#060C0C] border-b-2 ${
                      isActive ? 'border-[#2C5948]' : 'border-transparent'
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
  );
};

export default Navbar;
