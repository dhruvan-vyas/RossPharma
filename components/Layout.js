import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// import "./globals.css";
import { Poppins } from "next/font/google";



// import { Red_Hat_Display } from "next/font/google";

// const redHat = Red_Hat_Display({
//   subsets: ["latin"],
//   weight: ["400","500","700"],
// });


// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400","500","700"],
// });





// app/layout.js
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",   // optional for Tailwind usage
});

export const metadata = {
  title: "Your Website",
  description: "Biotech Portfolio",
};


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
     <div>
      <Navbar />
     </div>
    {/* Main Content */}
      {/* <main className={redHat.className}> */}
      <main className={`${poppins.className} pt-16`}>
        {children}
      </main>
      {/* Footer */}
        <Footer />
    </>
  );
};

export default Layout;