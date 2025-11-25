import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
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
      <main >
        {children}
      </main>
      {/* Footer */}
        <Footer />
    </>
  );
};

export default Layout;