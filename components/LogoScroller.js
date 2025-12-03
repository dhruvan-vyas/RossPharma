// import React from 'react';

// const clientLogos = [
//   { id: 1, name: 'BioTech Corp', src: '/logos/logo-1.svg' },
//   { id: 2, name: 'Pharma Solutions', src: '/logos/logo-2.svg' },
//   { id: 3, name: 'Global R&D', src: '/logos/logo-3.svg' },
//   { id: 4, name: 'Innovate Life', src: '/logos/logo-4.svg' },
//   { id: 5, name: 'MediFuture', src: '/logos/logo-5.svg' },
//   { id: 6, name: 'Apex Health', src: '/logos/logo-6.svg' },
//   { id: 7, name: 'Clear Science', src: '/logos/logo-7.svg' },
// ];

// const LogoScroller = () => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap py-8 bg-gray-50 border-y border-gray-200">
//       <div className="scrolling-logos flex">
//         {/* Render Logos Twice for the Infinite Loop Effect */}
//         {[...clientLogos, ...clientLogos].map((logo, index) => (
//           <div key={index} className="w-[250px] flex justify-center items-center px-10 grayscale opacity-40 hover:opacity-100 transition-opacity duration-300">
//             {/* NOTE: You MUST create a folder named 'logos' inside your 'public' folder
//               and place 7 simple, white background logos there.
//               For now, this uses a placeholder box.
//             */}
//             <div className="w-40 h-10 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-700 font-semibold">
//               {logo.name}
//             </div>
//             {/* Uncomment this line once you add your images: */}
//             {/* <img src={logo.src} alt={logo.name} className="max-h-10 max-w-full" /> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LogoScroller;


// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const clientLogos = [
//   { id: 1, name: "BioTech Corp", src: "/logos/logo-1.svg" },
//   { id: 2, name: "Pharma Solutions", src: "/logos/logo-2.svg" },
//   { id: 3, name: "Global R&D", src: "/logos/logo-3.svg" },
//   { id: 4, name: "Innovate Life", src: "/logos/logo-4.svg" },
//   { id: 5, name: "MediFuture", src: "/logos/logo-5.svg" },
//   { id: 6, name: "Apex Health", src: "/logos/logo-6.svg" },
//   { id: 7, name: "Clear Science", src: "/logos/logo-7.svg" },
// ];

// const LogoScroller = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 6000, // smooth continuous motion
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0, // makes it continuous
//     cssEase: "linear",
//     pauseOnHover: true, // stop scroll when hover
//     arrows: false, // no arrows
//     swipeToSlide: true, // allow touch or drag scroll
//     draggable: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 5 } },
//       { breakpoint: 768, settings: { slidesToShow: 3 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <div className="overflow-hidden py-10 bg-gray-50 border-y border-gray-200">
//       <Slider ref={sliderRef} {...settings}>
//         {[...clientLogos, ...clientLogos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex justify-center items-center px-12 md:px-16 lg:px-20 grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
//           >
//             <img
//               src={logo.src}
//               alt={logo.name}
//               className="h-10 w-auto object-contain"
//             />
//             <div className="w-40 h-10 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-700 font-semibold">
//               {logo.name}
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           display: inline-flex;
//           animation: scroll 25s linear infinite;
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>


//   );
// };

// export default LogoScroller;





// import React from 'react';

// const clientLogos = [
//   { id: 1, name: 'BioTech Corp',      src: './logo.png' },
//   { id: 2, name: 'Pharma Solutions',  src: './logo.png' },
//   { id: 3, name: 'Global R&D',        src: './logo.png' },
//   { id: 4, name: 'Innovate Life',     src: './logo.png' },
//   { id: 5, name: 'MediFuture',        src: './logo.png' },
//   { id: 6, name: 'Apex Health',       src: './logo.png' },
//   { id: 7, name: 'Clear Science',     src: './logo.png' },
// ];

// const LogoScroller = () => {
//   return (
//     <div className="overflow-hidden py-10 bg-[#F9FFFD] border-y border-[#DDE7E3]">
//       <div className="scrolling-logos flex gap-16">
        
//         {[...clientLogos, ...clientLogos].map((logo, index) => (
//           <div 
//             key={index}
//             className="
//               w-[200px] 
//               flex flex-col items-center 
//               px-6
//               grayscale opacity-60 
//               hover:opacity-100 hover:grayscale-0
//               transition duration-300
//             "
//           >
//             {/* Logo Image */}
//             <img 
//               src={logo.src} 
//               alt={logo.name} 
//               className="h-12 w-auto object-contain mb-3"
//             />

//             {/* Company Name */}
//             <p className="text-sm text-gray-700 font-medium text-center">
//               {logo.name}
//             </p>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default LogoScroller;













import React from "react";

const clientLogos = [
  { id: 1, name: "BioTech Corp", src: "./logo.png" },
  { id: 2, name: "Pharma Solutions", src: "./logo.png" },
  { id: 3, name: "Global R&D", src: "./logo.png" },
  { id: 4, name: "Innovate Life", src: "./logo.png" },
  { id: 5, name: "MediFuture", src: "./logo.png" },
  { id: 6, name: "Apex Health", src: "./logo.png" },
  { id: 7, name: "Clear Science", src: "./logo.png" },
];

const LogoScroller = () => {
  // duplicate list for seamless infinite scroll
  const loopLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="overflow-hidden py-10 bg-[#F9FFFD] border-y border-[#DDE7E3]">
      <div className="marquee flex items-center">
        <div className="marquee-inner flex items-center gap-16">
          {loopLogos.map((logo, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center
                w-[180px] shrink-0
                opacity-70 hover:opacity-100
                transition-opacity duration-300
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto object-contain mb-2 select-none pointer-events-none"
              />
              <p className="text-sm text-gray-700 font-medium text-center select-none">
                {logo.name}
              </p>
            </div>
          ))}
        </div>

        {/* duplicate track again for *true seamless loop* */}
        <div className="marquee-inner flex items-center gap-16">
          {loopLogos.map((logo, index) => (
            <div
              key={"second-" + index}
              className="
                flex flex-col items-center justify-center
                w-[180px] shrink-0
                opacity-70 hover:opacity-100
                transition-opacity duration-300
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto object-contain mb-2 select-none pointer-events-none"
              />
              <p className="text-sm text-gray-700 font-medium text-center select-none">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;