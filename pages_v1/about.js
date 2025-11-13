import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="About Us | RossPharma.org">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 mb-6 text-center">Our Story</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Founded on the principles of quality, integrity, and client success, RossPharma is a trusted partner in the biotech industry.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-700">
              To empower our clients to innovate with confidence by providing strategic quality assurance and regulatory guidance. We believe that robust compliance practices are the foundation of a successful and ethical business.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of seasoned professionals with deep expertise in regulatory affairs, clinical trials, and quality management systems. We stay up-to-date with industry changes to provide the most current and effective solutions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;