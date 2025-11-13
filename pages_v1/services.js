import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout title="Services | RossPharma.org">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 mb-6 text-center">Our Services</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          We offer specialized consulting to ensure quality and compliance at every stage of your project.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <ul className="space-y-6">
            <li className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">Quality Assurance Audits</h2>
              <p className="text-gray-600">
                Detailed audits to assess compliance with GMP, GLP, and GCP standards, identifying areas for improvement.
              </p>
            </li>
            <li className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">Regulatory Strategy</h2>
              <p className="text-gray-600">
                Strategic guidance on regulatory submissions and navigating complex global requirements.
              </p>
            </li>
            <li className="pb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">Process Validation</h2>
              <p className="text-gray-600">
                Ensure your manufacturing and development processes are robust, repeatable, and compliant.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Services;