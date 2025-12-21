import Layout from "../components/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center px-6 py-16">
        
        {/* Soft White Background */}
        <div className="absolute inset-0 bg-white opacity-95"></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl mx-auto">

          {/* MAIN HEADING */}
          <h1
            className="
              text-6xl 
              sm:text-7xl 
              md:text-8xl 
              font-extrabold 
              text-[#2C5948]
              mb-4
            "
          >
            404
          </h1>

          {/* SUB HEADING */}
          <h2
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-semibold
              text-[#060C0C]
              mb-5
            "
          >
            Page Not Found
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-700 
              text-sm 
              sm:text-base 
              md:text-lg 
              leading-relaxed 
              mb-10
            "
          >
            The page you’re looking for may have been moved, deleted,
            or is temporarily unavailable.
            <br />
            Let’s help you get back to where you belong.
          </p>

          {/* BUTTON */}
          <div className="pharma-button w-fit mx-auto">
            <Link href="/">Go Back Home</Link>
          </div>
        </div>

      </section>
    </Layout>
  );
}
