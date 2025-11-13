import React from 'react';

const clientLogos = [
  { id: 1, name: 'BioTech Corp', src: '/logos/logo-1.svg' },
  { id: 2, name: 'Pharma Solutions', src: '/logos/logo-2.svg' },
  { id: 3, name: 'Global R&D', src: '/logos/logo-3.svg' },
  { id: 4, name: 'Innovate Life', src: '/logos/logo-4.svg' },
  { id: 5, name: 'MediFuture', src: '/logos/logo-5.svg' },
  { id: 6, name: 'Apex Health', src: '/logos/logo-6.svg' },
  { id: 7, name: 'Clear Science', src: '/logos/logo-7.svg' },
];

const LogoScroller = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 bg-gray-50 border-y border-gray-200">
      <div className="scrolling-logos flex">
        {/* Render Logos Twice for the Infinite Loop Effect */}
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div key={index} className="w-[250px] flex justify-center items-center px-10 grayscale opacity-40 hover:opacity-100 transition-opacity duration-300">
            {/* NOTE: You MUST create a folder named 'logos' inside your 'public' folder
              and place 7 simple, white background logos there.
              For now, this uses a placeholder box.
            */}
            <div className="w-40 h-10 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-700 font-semibold">
              {logo.name}
            </div>
            {/* Uncomment this line once you add your images: */}
            {/* <img src={logo.src} alt={logo.name} className="max-h-10 max-w-full" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;

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

