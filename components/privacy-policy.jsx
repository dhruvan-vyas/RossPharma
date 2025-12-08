export const metadata = {
  title: "Privacy Policy | RossPharma Consulting",
  description: "RossPharma Biotech Consulting Privacy Policy — USA-compliant data handling and confidentiality standards.",
};

const PrivacyPolicy = () => {
  return (
    // <section className="bg-[#F9FFFD] text-[#060C0C] py-16">
    <section className="bg-[#FFFFFF] text-[#060C0C] py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#2C5948] mb-6 tracking-wide">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-10">
          <span className="font-semibold">Last Updated:</span> January 2025
        </p>

        {/* CONTENT BLOCKS */}
        <div className="space-y-10 text-gray-800 leading-relaxed">

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              1. Who We Are
            </h2>
            <p>
              RossPharma Consulting is a U.S.–based biotechnology and pharmaceutical
              consulting firm that follows industry-standard privacy and confidentiality
              requirements, including FTC guidelines, HIPAA compliance (where applicable),
              and business data protection practices.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              2. Information We Collect
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Personal and professional contact details</li>
              <li>Company information and project details provided by you</li>
              <li>Website analytic data including device and browser info</li>
              <li>
                Sensitive or regulated data (PHI) only when contractually required and
                protected under HIPAA-compliant agreements
              </li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide scientific, regulatory, and operational consulting services</li>
              <li>Respond to inquiries and project communication</li>
              <li>Improve user experience and website functionality</li>
              <li>Maintain legal and compliance obligations</li>
              <li>Conduct secure internal analytics</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              4. Sharing of Information
            </h2>
            <p className="mb-3">We may share information only under these conditions:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>With your consent for project collaboration</li>
              <li>With approved service providers following strict confidentiality agreements</li>
              <li>To comply with legal obligations or regulatory authorities (FDA, NIH, etc.)</li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              5. Data Security
            </h2>
            <p>
              We implement secure storage, encrypted systems, access-controlled environments,
              and HIPAA-aligned methods for handling sensitive data. While we maintain high
              security standards, no system can guarantee absolute protection.
            </p>
          </div>

          {/* SECTION 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              6. Cookies & Tracking
            </h2>
            <p>
              Our website uses cookies to enhance performance and analyze user interactions.
              You may disable cookies through your browser settings.
            </p>
          </div>

          {/* SECTION 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may request:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access to the personal data we hold</li>
              <li>Correction or deletion of your data</li>
              <li>Opt-out of communication</li>
              <li>Information on how your data is used</li>
            </ul>
            <p className="mt-3">
              California residents may have additional rights under CCPA/CPRA.
            </p>
          </div>

          {/* SECTION 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              8. Data Retention
            </h2>
            <p>
              We retain data only as long as necessary for regulatory, legal, or operational
              requirements. Once no longer needed, data is securely deleted.
            </p>
          </div>

          {/* SECTION 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              9. Children’s Privacy
            </h2>
            <p>
              Our services are intended for professional use. We do not collect information
              from children under 13.
            </p>
          </div>

          {/* SECTION 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C5948] mb-3">
              10. Contact Us
            </h2>
            <p>
              For privacy-related questions or requests, contact us at:
            </p>
            <p className="mt-2 font-semibold text-[#2C5948]">
              privacy@rosspharma.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;