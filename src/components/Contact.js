import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Contact Me</h2>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="p-2 border border-gray-700 bg-gray-600 rounded w-full mb-4 text-white" />
          <input type="email" placeholder="Your Email" className="p-2 border border-gray-700 bg-gray-600 rounded w-full mb-4 text-white" />
          <textarea placeholder="Your Message" className="p-2 border border-gray-700 bg-gray-600 rounded w-full mb-4 text-white" rows="4"></textarea>
          <button type="submit" className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;