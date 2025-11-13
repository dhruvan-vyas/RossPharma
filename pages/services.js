import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout title="Services | RossPharma.org">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services & Solutions</h1>
      <p className="text-lg text-gray-600 mb-12">
        We provide a full suite of consulting services designed to meet the unique needs of the biotech and pharmaceutical industries.
      </p>

      <div className="space-y-12">
        {/* Service Section 1 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Quality Assurance & Compliance</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>GMP, GLP, & GCP Audits</li>
            <li>Regulatory Strategy & Submissions</li>
            <li>Quality Management Systems (QMS)</li>
          </ul>
        </div>

        {/* Service Section 2 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Research & Development Consulting</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Clinical Trial Support</li>
            <li>Process Validation & Optimization</li>
            <li>Risk Assessment & Mitigation</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Services;