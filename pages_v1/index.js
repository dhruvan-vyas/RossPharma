// // ... (imports) ...
import Layout from '../components/Layout';
import Link from 'next/link';
import LogoScroller from '../components/LogoScroller'; 
// import LogoCarousel from '../components/LogoCarousel'; 
const PRIMARY_COLOR = 'bg-[#204A3C]';
const HOVER_COLOR   = 'hover:bg-[#347460]'; 

const Home          = () => {
  return (
    <Layout>
      
      {/* 1. Hero Section - Centered Content */}
        {/* ... (Hero content) ... */}
       <section className="container mx-auto px-4 text-center pt-24 pb-16"> 
      {/* <section className="text-center pt-24 pb-16 max-w-5xl mx-auto">  */}
        <h1 className="text-6xl md:text-7xl text-gray-800 leading-snug tracking-tighter">
          {/* Elevating Quality. Securing the Future of Biotech Innovation. */}

          HEALING THE FUTURE
        </h1>
        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Empowering next-generation pharmaceutical and biotech innovators with strategic solutions from discovery to clinical success.
          {/* We are RossPharma—your trusted consulting partner for precise QA, rigorous compliance, and strategic growth in life sciences. */}
        </p>
        <Link href="/contact">
          <div className={`mt-12 inline-block ${PRIMARY_COLOR} text-white font-medium py-3 px-10 rounded-full ${HOVER_COLOR} transition-colors cursor-pointer shadow-lg tracking-wider`}>
            Schedule a Private Consultation
          </div>
        </Link>
      </section>

      {/* 2. LOGO SCROLLER (FULL WIDTH) - Placed OUTSIDE of any centering container */}
      {/* Note: This section will stretch to 100% width */}
      <div className="w-full">
        <LogoScroller /> 
        {/* <LogoCarousel />  */}
      </div>

      {/* The remaining sections continue inside the centered Layout content */}
      {/* 3. Trust Metrics Section */}
      <section className="py-20 border-t border-b border-gray-100 my-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-8 text-center">
          {/* ... (Trust Metrics content) ... */}
        </div>
      </section>

      {/* 4. Core Services Overview */}
      <section className="py-20 max-w-5xl mx-auto">
        {/* ... (Core Services content) ... */}
      </section>      
    </Layout>
  );
};


export default Home;


