import Layout from '../components/Layout';
import LogoScroller from '../components/LogoScroller';
// import Navbar from '../components/Navbar';
import PrivacyPolicy from '../components/privacy-policy';
// import { Red_Hat_Display } from "next/font/google";
import Link from 'next/link';

const Home = () => {

  const serviceCards = [
    {
      title: 'Strategic QA Consulting',
      description: 'We build scalable Quality Management Systems and provide strategic guidance to ensure compliance from development to commercial launch.',
      img: '/icons/bulb.svg',
    },
    {
      title: 'Clinical Trial Support',
      description: 'Our team offers end-to-end support for clinical trials, including protocol development, site audits, and regulatory compliance to ensure successful study execution.',
      img: '/icons/search.svg',
    },
    {
      title: 'Global GMP Audits',
      description: 'We conduct comprehensive cGMP audits for internal and external facilities, identifying gaps and ensuring you\'re prepared for global regulatory inspections.',
      img: '/icons/service.svg',
    },
    {
      title: 'Biotech Project Management',
      description: 'Our experts manage timelines, risks, and communication to keep your development programs on track, on time, and on budget.',
      img: '/icons/shield.svg',
    }
  ];

  return (
    <Layout>

<section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // backgroundImage: '/public/Images/lab.jpg'// <-- replace with your image
          backgroundImage: "url('/Images/lab.jpg')"
        }}
        ></div>
      {/* Green Tint Overlay */}
      <div className="absolute inset-0 bg-[#ffffff] opacity-94"></div>
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
        {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#2C5948] mb-5 break-word leading-tight"> */}
          {/* HEALING THE FUTURE */}
        {/* </h1> */}
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-semibold text-[#2C5948] mb-4 break-after-all leading-tight tracking-[0.0em] ">
          HEALING THE FUTURE
          {/* Healing The Future */}
        </h1>

        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-800 font-medium">
          Expert consulting in Biotech, cGMP, Quality Assurance, and Project <br />
          Solutions for tomorrow&apos;s therapies.
        </p>
        
        <span className="mt-8 pharma-button w-fit mx-auto md:mx-0">
          <Link href="/services">Our Services</Link>
        </span>

      </div>
    </section>

    <section className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#060C0C]">
          About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          We are a biotechnology consulting firm dedicated to elevating pharmaceutical 
          and life-science businesses through scientific expertise, regulatory compliance, 
          and operational excellence.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-semibold text-[#2C5948]">
            Who We Are
          </h3>

          <p>
            Our team brings decades of combined experience in cGMP, pharmaceutical 
            manufacturing, quality assurance, clinical operations, and global 
            regulatory frameworks. We partner with organizations across biotechnology, 
            pharma, and healthcare to build safe, efficient, and compliant processes.
          </p>

          <h3 className="text-2xl font-semibold text-[#2C5948] pt-4">
            Our Mission
          </h3>

          <p>
            We aim to bridge the gap between scientific innovation and regulatory clarity. 
            By providing strategic guidance, operational support, and quality leadership, 
            we ensure that every project meets global standards—safely and efficiently.
          </p>
        </div>

        {/* Right Section (Feature Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h4 className="text-xl font-semibold text-[#060C0C] mb-2">15+ Years Expertise</h4>
            <p className="text-gray-600 text-sm">Experience across biotech, pharma, and healthcare projects.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h4 className="text-xl font-semibold text-[#060C0C] mb-2">Global Compliance</h4>
            <p className="text-gray-600 text-sm">Expertise in FDA, EMA, WHO, and ICH regulatory frameworks.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h4 className="text-xl font-semibold text-[#060C0C] mb-2">Quality Leadership</h4>
            <p className="text-gray-600 text-sm">Supporting organizations with QA, QC, validation & documentation.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h4 className="text-xl font-semibold text-[#060C0C] mb-2">Operational Excellence</h4>
            <p className="text-gray-600 text-sm">Improving efficiency, reducing risk, and ensuring cGMP compliance.</p>
          </div>

        </div>

      </div>

    </section>
      {/* ⭐ STATISTICS */}
      {/* <section className="bg-[#EAFFF7] py-10 md:py-20 mb-16"> */}
      <section className="bg-[#EAFFF7] py-10 md:py-40 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

            {Object.entries({
              '99%': 'Audit Success Rate',
              '50+': 'Clinical Trials Supported',
              '15+': 'Years Average Experience'
            }).map(([value, label], i) => (
              <div key={i} className="statistic-card flex flex-col justify-center items-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#2C5948]">{value}</h3>
                <p className="text-gray-900 text-lg">{label}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    {/* ⭐ SERVICES SECTION */}
    {/* Heading */}
    <section className="py-16 mb-16 z-0 relative">
      <div className="container relative z-20 mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-12 gap-4 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#060C0C]">
            What We Do.
          </h2>
          <p className="text-center max-w-2xl">
            We provide end-to-end consulting for the pharmaceutical and biotech
            industries, ensuring quality and compliance at every stage of
            development.
          </p>
        </div>
        
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            xl:grid-cols-4 
            gap-6 
            2xl:gap-x-0 
            xl:gap-x-20 lg:gap-10
            lg:gap-y-10 md:gap-y-10 
            justify-items-center
            p-20px
          "
        >
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`
                /* --- CARD SIZING (Fixed as requested) --- */
                max-h-80 min-h-60
                max-w-80 min-w-80
                
                /* --- STYLING --- */
                bg-white p-6 rounded-2xl 
                shadow-[0px_4px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]

                cursor-pointer
                border border-transparent

                /* --- SMOOTH ANIMATION FIX --- */
                /* 1. Target specific properties to avoid resize glitches */
                transition-[transform,box-shadow] 
                duration-500 
                ease-out
                /* 2. Define the base transform state */
                transform-translate-y-0
                

                /* 3. The Stagger Effect (Only applies on XL screens where grid is 4-cols) */
                ${index % 2 !== 0 ? "xl:translate-y-12" : ""}
                // ${index % 2 !== 0 ? "lg:translate-y-12" : ""}
              `}
            >
              <div 
              className="h-12 w-12 flex items-center justify-center bg-[#EAFFF7] rounded-full mb-5 shadow-sm"
              // className="h-10 w-10 p-2 mb-4 bg-[#EAFFF7] rounded-full"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-6 w-6 opacity-80"
                />
              </div>

              <h3 
              className="text-xl md:text-[22px] font-semibold text-gray-900 mb-3"
              //  className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
              >
                {card.title}
              </h3>

              <p 
              // className="text-gray-800 text-sm md:text-md"
              className="text-gray-700 text-sm leading-relaxed"
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute z-10 top-0 left-0 h-full w-full py-30 pointer-events-none">
        <img src="./Images/Vector2.svg" className="absolute left-0 top-20 " alt="" />
        <img src="./Images/Vector1.svg" className="absolute right-0 pt-[400px] md:pt-0" alt="" />
      </div>
    </section>





      {/* ⭐ CEO SECTION */}
      <section className='py-16 mb-16'>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./Images/team.png"
              alt="CEO Joseph Ross"
              className="w-48 md:w-64 lg:w-72 h-auto rounded-full shadow-xl"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#060C0C] mb-4">
              Joseph Ross, PMP | Founder & CEO
            </h2>
            <p className="text-gray-800 mb-4">
              Our philosophy is built on a foundation of deep scientific expertise and an unwavering commitment to quality. We believe in proactive partnership, embedding ourselves with our clients to navigate the complex journey from discovery to market.
            </p>
            <p className="text-[#2C5948] font-semibold p-3 border-l-4 border-[#2C5948]">
              "Our vision is to be the catalyst for your success, turning scientific discovery into life-changing therapies."
            </p>
          </div>

        </div>
      </section>


      {/* <section className="py-16 bg-[#F9FFFD]"> */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 text-center">

          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-[#2C5948]">
            Trusted By Leading Brands
          </h2>

          <p className="text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
            Our products and solutions are trusted by industry-leading companies 
            across healthcare, pharmaceuticals, and biotechnology.
          </p>

          {/* Logo Scroller Component */}
          <div className="mt-6">
            <LogoScroller />
          </div>

        </div>
      </section>


      {/* ⭐ REGULATORY COMPLIANCE SECTION */}
      <section className="bg-[#EAFFF7] py-16 px-6 md:px-16">
        <div className='flex justify-center'>
          <div className='text-center max-w-3xl'>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#060C0C] leading-tight">
              Knowledgeable of International Regulations and Standards
            </h2>
            <p className="mt-4 font-light text-gray-800 text-sm md:text-lg">
              Our global competence ensures your projects meet the highest standards of compliance across key international markets.
            </p>

            <div className='flex flex-wrap justify-center gap-6 pt-8'>
              {['FDA', 'EMA', 'ICH', 'ISO', 'Health Canada', 'MHRA'].map((label, i) => (
                <span
                  key={i}
                  className='text-base md:text-xl uppercase font-bold text-[#2C5948]'
                >
                  {label}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Home;
