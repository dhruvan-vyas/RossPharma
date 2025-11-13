import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="About Us | RossPharma.org">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About RossPharma</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          Founded by a team of industry veterans, RossPharma is dedicated to elevating quality assurance and regulatory compliance standards in the biotech sector. Our mission is to empower our clients with the knowledge and tools they need to bring life-changing innovations to market safely and efficiently.
        </p>
        
        {/* Our Mission */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To be the leading biotech consulting partner, providing unparalleled expertise and strategic guidance to ensure the integrity, safety, and quality of our clients' products.
          </p>
        </div>

        {/* Our Expertise */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <p>
              With over a decade of hands-on experience in global regulatory frameworks, GMP, and clinical development, our team brings a deep understanding of the challenges and opportunities within the industry. We work collaboratively to deliver tailored solutions that meet your unique needs.
            </p>
            <p>
              We believe that quality is not just a standard—it's a commitment. Our consultants stay at the forefront of industry trends and regulatory changes to provide you with the most current and effective advice.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;