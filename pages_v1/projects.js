import Layout from '../components/Layout';
import Link from 'next/link';

const projects = [
  {
    title: 'Biomanufacturing Facility Audit',
    description: 'A comprehensive QA audit to ensure compliance with global GMP regulations.',
    link: '#', 
  },
  {
    title: 'Clinical Trial Data Management',
    description: 'Developed a robust system to streamline clinical trial reporting and data integrity.',
    link: '#',
  },
  {
    title: 'New Drug Application (NDA) Support',
    description: 'Provided full regulatory support and documentation for a successful NDA submission.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Layout title="Projects | RossPharma.org">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 mb-6 text-center">Our Work</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          A selection of our recent projects where we partnered with clients to achieve their quality and compliance goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <Link href={project.link}>
                <div className="mt-4 inline-block text-sky-500 font-normal hover:underline cursor-pointer">
                  Learn More →
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