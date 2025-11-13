import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout title="Contact Us | RossPharma.org">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Ready to discuss your next project? Fill out the form below or contact us directly. We look forward to hearing from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Phone:</span>
                <p>+91 1234567890</p>
              </li>
              <li>
                <span className="font-semibold">Email:</span>
                <p>some@gmail.com</p>
              </li>
              <li>
                <span className="font-semibold">Address:</span>
                <p>123 Biotech Lane, Innovation City, India</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;