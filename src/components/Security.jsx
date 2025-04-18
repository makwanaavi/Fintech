import { motion } from 'framer-motion';
import { FiLock, FiShield, FiAward, FiCheckCircle } from 'react-icons/fi';

const securityFeatures = [
  {
    icon: <FiLock className="w-6 h-6" />,
    title: "Bank-Grade Encryption",
    description: "256-bit SSL encryption for all data in transit and at rest",
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "SOC 2 Certified",
    description: "Regularly audited for security, availability, and confidentiality",
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: "GDPR Compliant",
    description: "Full compliance with EU data protection regulations",
  },
  {
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: "Two-Factor Authentication",
    description: "Optional 2FA for all user accounts",
  },
];

const trustedBy = [
  "Bank of America", "JPMorgan Chase", "Wells Fargo", "Goldman Sachs", "Citibank",
];

const Security = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" aria-labelledby="security-heading">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-16">
          <h2 id="security-heading" className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Security & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your data's security is our top priority
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section aria-label="Security Features">
            <h3 className="text-2xl font-semibold text-dark mb-6">
              We meet the highest security standards
            </h3>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <motion.article
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm" aria-label="Trusted Companies">
            <h3 className="text-2xl font-semibold text-dark mb-6">
              Trusted by financial institutions worldwide
            </h3>
            <ul className="space-y-4">
              {trustedBy.map((company, index) => (
                <li key={index}>
                  <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
                    <div
                      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold"
                      aria-hidden="true"
                    >
                      {company.charAt(0)}
                    </div>
                    <span className="font-medium">{company}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className=" p-8 rounded-xl text-center">
          <h3 className="text-xl font-bold text-dark mb-2">
            Ready to experience secure AI finance?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of financial professionals who trust our platform
          </p>
          <button
            className="bg-primary hover:bg-secondary text-blue font-bold py-3 px-6 rounded-lg transition "
            aria-label="Request security documentation"
          >
            Request Security Documentation
          </button>
        </section>
      </div>
    </section>
  );
};

export default Security;
