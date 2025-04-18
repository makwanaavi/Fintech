// import { motion } from 'framer-motion';

// const integrations = [
//     { name: "QuickBooks", logo: "/QuickBooks.png" },
//     { name: "Stripe", logo: "/Stripe.png" },
//     { name: "Plaid", logo: "/Plaid.png" },
//     { name: "Xero", logo: "/Xero.png" },
//     { name: "SAP", logo: "/SAP.png" },
//     { name: "Salesforce", logo: "/Salesforce.png" },
//     { name: "Oracle", logo: "/Oracle.png" },
//     { name: "Bloomberg", logo: "/Bloomberg.png" }
//   ];
  

// const Integrations = () => {
//   return (
//     <section className="py-20 px-4 bg-gray-50">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Seamless Integrations</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Connects with your stack seamlessly.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
//           {integrations.map((integration, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center"
//             >
//               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
//                 {integration.logo}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="md:w-1/2">
//               <h3 className="text-2xl font-bold text-dark mb-4">Custom Integration Solutions</h3>
//               <p className="text-gray-600 mb-6">
//                 Need to connect with a proprietary system? Our API-first approach makes integration simple, 
//                 and our engineering team can build custom connectors for your unique needs.
//               </p>
//               <button className="text-primary font-semibold hover:underline">
//                 Explore API Documentation →
//               </button>
//             </div>
//             <div className="md:w-1/2 bg-gray-100 rounded-lg p-6">
//               <div className="bg-white p-4 rounded-md mb-4">
//                 <div className="text-sm font-mono text-gray-700">
//                   <p className="text-primary font-bold">POST</p>
//                   <p>/api/v1/transactions</p>
//                   <p className="text-gray-400 mt-2"># Analyze transaction in real-time</p>
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-md">
//                 <div className="text-sm font-mono text-gray-700">
//                   <p className="text-green-500 font-bold">GET</p>
//                   <p>/api/v1/forecasts</p>
//                   <p className="text-gray-400 mt-2"># Retrieve AI-generated forecasts</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Integrations;


import { motion } from 'framer-motion';

const integrations = [
    { name: "QuickBooks", logo: "/QuickBooks.png" },
    { name: "Stripe", logo: "/Stripe.png" },
    { name: "Xero", logo: "/Xero.png" },
    { name: "SAP", logo: "/SAP.png" },
    { name: "Salesforce", logo: "/Salesforce.png" },
    { name: "Oracle", logo: "/Oracle.png" },
    { name: "Bloomberg", logo: "/Bloomberg.png" },
    { name: "PayPal", logo: "/PayPal.png" }  // New logo added
  ];
  

const Integrations = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connects with your stack seamlessly.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center"
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="w-36 h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Custom Integration Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-dark mb-4">Custom Integration Solutions</h3>
              <p className="text-gray-600 mb-6">
                Need to connect with a proprietary system? Our API-first approach makes integration simple,
                and our engineering team can build custom connectors for your unique needs.
              </p>
              <button className="text-primary font-semibold hover:underline">
                Explore API Documentation →
              </button>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-6">
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-sm font-mono text-gray-700">
                  <p className="text-primary font-bold">POST</p>
                  <p>/api/v1/transactions</p>
                  <p className="text-gray-400 mt-2"># Analyze transaction in real-time</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md">
                <div className="text-sm font-mono text-gray-700">
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

