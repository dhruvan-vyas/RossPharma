import Layout from '../components/Layout';
import Link from 'next/link';

const projects = [
  {
    title: 'Biomanufacturing Facility Audit',
    description: 'Comprehensive QA audit to ensure compliance with global GMP regulations for a leading biopharma company.',
    link: '#', // Placeholder for a detailed case study page
  },
  {
    title: 'Clinical Trial Data Management',
    description: 'Developed a robust data management system to streamline clinical trial reporting and ensure data integrity.',
    link: '#',
  },
  {
    title: 'New Drug Application (NDA) Submission',
    description: 'Provided full regulatory support and documentation for a successful NDA submission, accelerating market entry.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Layout title="Projects | RossPharma.org">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Projects & Case Studies</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          We are proud to partner with leading companies in the biotech industry to solve their most complex challenges. Here is a look at some of our recent work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <Link href={project.link}>
                <div className="mt-4 inline-block text-blue-600 font-semibold hover:underline cursor-pointer">
                  View Case Study →
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;