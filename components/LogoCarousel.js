import React from 'react';
import Slider from 'react-slick';

const clientLogos = [
  { id: 1, name: 'BioTech Corp', src: '/logos/logo-1.svg' },
  { id: 2, name: 'Pharma Solutions', src: '/logos/logo-2.svg' },
  { id: 3, name: 'Global R&D', src: '/logos/logo-3.svg' },
  { id: 4, name: 'Innovate Life', src: '/logos/logo-4.svg' },
  { id: 5, name: 'MediFuture', src: '/logos/logo-5.svg' },
  { id: 6, name: 'Apex Health', src: '/logos/logo-6.svg' },
  { id: 7, name: 'Clear Science', src: '/logos/logo-7.svg' },
  // NOTE: You can add more here if needed
];

const LogoCarousel = () => {
  const settings = {
    // dots: false,
    infinite: true, // Seamless loop
    speed: 3000,
    slidesToShow: 5, // Show 5 logos at a time on desktop
    slidesToScroll: 1,
    autoplay: true, // Auto-scroll feature
    autoplaySpeed: 1, // Set to 0 for continuous scroll
    // cssEase: "linear", // Smooth, non-jerky movement
    arrows: true, // Hide navigation arrows for a cleaner look
    pauseOnHover: true, // Crucial: Pauses when the user hovers over it
    draggable: true, // Allows the user to drag/swipe
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 bg-gray-50 border-y border-gray-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings} className="grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
          {clientLogos.map((logo, index) => (
            <div key={index} className="px-4 py-2">
              <div className="w-full h-10 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-700 font-semibold">
                {logo.name}
              </div>
              {/* Uncomment this line once you add your images: */}
              {/* <img src={logo.src} alt={logo.name} className="max-h-10 max-w-full mx-auto" /> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
