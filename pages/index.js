import Layout from '../components/Layout';
import LogoScroller from '../components/LogoScroller';

import Link from 'next/link';

const Home = () => {

  const serviceCards = [{
    title: 'Strategic QA Consulting',
    description: 'We build scalable Quality Management Systems and provide strategic guidance to ensure compliance from development to commercial launch.',
    img: '/icons/bulb.svg',
  },{
    title: 'Clinical Trial Support',
    description: 'Our team offers end-to-end support for clinical trials, including protocol development, site audits, and regulatory compliance to ensure successful study execution.',
    img: '/icons/search.svg',
  },{
    title: 'Global GMP Audits',
    description: 'We conduct comprehensive cGMP audits for internal and external facilities, identifying gaps and ensuring you\'re prepared for global regulatory inspections.',
    img: '/icons/service.svg',
  },{
    title: 'Biotech Project Management',
    description: 'Our experts manage timelines, risks, and communication to keep your development programs on track, on time, and on budget.',
    img: '/icons/shield.svg',
  }]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-18 h-[80vh]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row items-center gap-4 h-full">

            {/* 70% TEXT SECTION */}
            <div className="w-full md:w-[70%] h-full flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#060C0C] leading-tight">
                Pioneering Pharmaceutical Pathways        </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                We provide expert consulting to ensure compliance, integrity, and operational excellence in the biotech and pharmaceutical industries.
              </p>
              <span className="mt-8 pharma-button w-fit">
                <Link href="/services">
                  Our Services
                </Link>
              </span>
            </div>

            {/* 30% VIDEO SECTION */}
            <div className="w-full md:w-[30%] h-full">
              <div className="h-full w-full">
                <video
                  src="./videos/sample.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistic section */}
      <section className="max-h-[427px] bg-[#EAFFF7] mb-16">
        <div className="container mx-auto px-4 h-[307px] flex justify-center items-center">
          <div className='flex justify-around items-center w-full'>
            <div className='statistic-card flex flex-col justify-center items-center gap-1.5'>
              <h3 className='text-5xl font-bold text-[#2C5948]'>99%</h3>
              <p className='font-[#1A2E2C]'>Audit Success Rate</p>
            </div>

            <div className='statistic-card flex flex-col justify-center items-center gap-1.5'>
              <h3 className='text-5xl font-bold text-[#2C5948]'>99%</h3>
              <p className='font-[#1A2E2C]'>Clinical Trials Supported</p>
            </div>
            <div className='statistic-card flex flex-col justify-center items-center gap-1.5'>
              <h3 className='text-5xl font-bold text-[#2C5948]'>99%</h3>
              <p className='font-[#1A2E2C]'>Years Average Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className='flex flex-col justify-center items-center mb-12 gap-4'>
            <h2 className="text-5xl w-1/2 font-bold text-center text-[#060C0C]">
              What We Do.
            </h2>
            <p className='text-center w-1/2'>We provide end-to-end consulting for the pharmaceutical and biotech industries, ensuring quality and compliance at every stage of development.</p>
          </div>
            {/* Services cards container */}
          <div className=" w-full h-82 flex justify-between items-start gap-6">
            {/* Service Card*/}
            {
              serviceCards.map((card, index) => (
                <div key={index} className={`bg-white p-6 min-h-68 ${index%2!=0 ? 'translate-y-22' : ''} rounded-lg shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-lg border w-1/4 border-gray-200`}>
                  {/* You can replace the img src with relevant icons for each service */}
                  <img src={card.img} alt={`${card.title} Icon`} className="h-10 p-2 mb-4 bg-[#EAFFF7] rounded-full" />
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">{card.title}</h3>
                  <p className="text-gray-800 text-md tracking-tight">
                    {card.description}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
            {/* CEO Section  */}
      <section className='py-16 mb-16'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
              {/* Image Section */}
              <div className="w-full h-64 md:w-1/2 flex justify-center items-center">
                <img
                  src="./ceo_profile.jpeg"
                  alt="CEO Joseph Ross"
                  className="w-1/2 h-auto object-fill rounded-full shadow-xl"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#060C0C] mb-4">
                  Joseph Ross, PMP | Founder & CEO
                </h2>
                <p className="text-gray-800  mb-4">
                 Our philosophy is built on a foundation of deep scientific expertise and an unwavering commitment to quality. We believe in proactive partnership, embedding ourselves with our clients to navigate the complex journey from discovery to market.
                </p>
                <p className="text-[#2C5948] font-semibold p-3 border-l-3 border-[#2C5948] ">
                 "Our vision is to be the catalyst for your success, turning scientific discovery into life-changing therapies."
                </p>
              </div>
            </div>  
      </section>
      

      {/* Testimonial Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto">
            "RossPharma's expertise was invaluable. Their guidance on our QA processes saved us months of work and ensured we passed our audit with flying colors."
          </p>
          <p className="mt-4 font-light">- Joseph Ross, PMP & CEO of BioSolutions Inc.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;