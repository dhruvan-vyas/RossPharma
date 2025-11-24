import Head from 'next/head';
import Navbar from './Navbar';
// NOTE: Using the deep green color directly in Tailwind classes
const Layout = ({ children, title = 'RossPharma.org' }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Biotech consulting for QA" />
        <link rel="icon" href="/logo.png" />
      </Head>
     {/* Main Header */}
      <Navbar />
    {/* Main Content */}
      <main className="container mx-auto px-4 py-16 min-h-screen relative z-0">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 p-8 text-center text-gray-600 mt-16">
        <p>Healing The Future | &copy; {new Date().getFullYear()} RossPharma. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;