import React from 'react';
import { motion } from 'framer-motion';



const logos = [
  { src: QuickBooks, alt: 'QuickBooks' },
  { src: Stripe, alt: 'Stripe' },
  { src: Xero, alt: 'Xero' },
  { src: SAP, alt: 'SAP' },
  { src: Salesforce, alt: 'Salesforce' },
  { src: Oracle, alt: 'Oracle' },
  { src: Bloomberg, alt: 'Bloomberg' },
  { src: PayPal, alt: 'PayPal' },
];

const Integrations = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connects with your stack seamlessly.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-32 h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Custom Integration Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Text Content */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Integration Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Need to connect with a proprietary system? Our API-first approach makes integration simple,
                and our engineering team can build custom connectors for your unique needs.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Explore API Documentation →
              </button>
            </div>

            {/* API Preview */}
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-6 w-full">
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-sm font-mono text-gray-800">
                  <p className="text-blue-600 font-bold">POST</p>
                  <p>/api/v1/transactions</p>
                  <p className="text-gray-400 mt-2"># Analyze transaction in real-time</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md">
                <div className="text-sm font-mono text-gray-800">
                  <p className="text-green-500 font-bold">GET</p>
                  <p>/api/v1/forecasts</p>
                  <p className="text-gray-400 mt-2"># Retrieve AI-generated forecasts</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Integrations;
