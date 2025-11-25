import Layout from '../components/Layout';
import LogoScroller from '../components/LogoScroller'; 

import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Your Trusted Partner in Biotech Quality Assurance
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            We provide expert consulting to ensure compliance, integrity, and operational excellence in the biotech and pharmaceutical industries.
          </p>
          <Link href="/contact">
            <div className="mt-10 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Schedule a Consultation
            </div>
          </Link>
        </div>
      </section>
      
   

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Audits</h3>
              <p className="text-gray-600">
                Comprehensive and objective audits to ensure compliance with global regulatory standards.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">R&D Consulting</h3>
              <p className="text-gray-600">
                Guidance and support for research and development processes, from concept to commercialization.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Submissions</h3>
              <p className="text-gray-600">
                Streamline your regulatory approval process with our expert support and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-10">
        <LogoScroller /> 
        {/* <LogoCarousel />  */}
      </div>


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