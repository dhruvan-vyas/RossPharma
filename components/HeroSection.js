// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  const stats = [
    { value: '99%', label: 'Audit Success Rate' },
    { value: '50+', label: 'Clinical Trials Supported' },
    { value: '15+', label: 'Years Average Experience' },
  ];

  return (
    <section className="pt-24"> {/* Add top padding to clear the fixed navbar */}
      
      {/* --- Main Hero Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Pioneering Pharmaceutical Pathways
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Expert consulting in **Biotech**, **cGMP**, **Quality Assurance**, and **Project Solutions** for tomorrow's therapies.
          </p>
          <button className="px-8 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300 font-medium shadow-lg">
            Our Services
          </button>
        </div>

        {/* Right Image Content */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          {/* Replace src and alt with your actual image */}
          <div className="w-full max-w-md h-96 relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/path/to/scientist-image.jpg" // CHANGE THIS PATH
              alt="Scientist working in a lab with advanced equipment"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* --- Stats Section (Light Green Background) --- */}
      <div className="bg-green-50 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-around text-center">
            {stats.map((stat) => (
              <div key={stat.value} className="p-4 flex-1">
                <p className="text-5xl font-extrabold text-green-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- What We Do Header --- */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          What We Do.
        </h2>
        <p className="text-lg text-gray-600">
          We provide end-to-end consulting for the pharmaceutical and biotech industries, ensuring quality and compliance at every stage of development.
        </p>
        {/* Placeholder for the grey arrow graphic */}
        <div className="h-10 mt-10 opacity-30">
            {/* Graphic Placeholder */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;