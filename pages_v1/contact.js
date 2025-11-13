import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout title="Contact Us | RossPharma.org">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          We'd love to hear from you. Please fill out the form below or reach out directly.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition-colors shadow-md">
              Send Message
            </button>
          </form>
          
          <div className="mt-8 text-center text-gray-600">
            <p>Or contact us directly:</p>
            <p className="mt-2 font-medium">something@gmail.com</p>
            <p>+91 1234567890</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;