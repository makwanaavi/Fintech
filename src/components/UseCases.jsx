import { motion } from 'framer-motion';
import { FiBriefcase, FiDollarSign, FiTrendingUp, FiCreditCard } from 'react-icons/fi';

const useCases = [
  {
    icon: <FiCreditCard className="w-8 h-8" aria-hidden="true" />,
    title: "Banks & Credit Unions",
    description: "AI-based fraud detection and prevention systems that reduce false positives by 40%.",
    benefits: [
      "Real-time transaction monitoring",
      "Anomaly detection algorithms",
      "Regulatory compliance automation"
    ]
  },
  {
    icon: <FiBriefcase className="w-8 h-8" aria-hidden="true" />,
    title: "Financial Advisors",
    description: "Predictive client insights and personalized wealth management recommendations.",
    benefits: [
      "Client behavior analysis",
      "Portfolio optimization",
      "Next-best-action suggestions"
    ]
  },
  {
    icon: <FiDollarSign className="w-8 h-8" aria-hidden="true" />,
    title: "SMBs",
    description: "Automated cash flow forecasting and intelligent invoice management.",
    benefits: [
      "30-day cash flow predictions",
      "Vendor payment optimization",
      "Expense categorization"
    ]
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" aria-hidden="true" />,
    title: "Investors & Traders",
    description: "Real-time AI signals and market sentiment analysis for better decisions.",
    benefits: [
      "Algorithmic trading signals",
      "News sentiment scoring",
      "Risk-adjusted return analysis"
    ]
  }
];

const UseCases = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Tailored Solutions for Every Financial Role</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI adapts to your specific needs and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              aria-labelledby={`usecase-${index}-title`}
            >
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center text-primary mb-4">
                  {useCase.icon}
                </div>
                <h3 id={`usecase-${index}-title`} className="text-xl font-bold text-dark mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1" aria-hidden="true">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <button 
                  className="text-primary font-semibold hover:underline flex items-center gap-1"
                  aria-label={`Learn more about ${useCase.title}`}
                >
                  Learn more <span aria-hidden="true">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-blue">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not sure which solution fits your needs?</h3>
            <p className="text-gray-600 mb-6">Our AI specialists will analyze your requirements and recommend the perfect setup</p>
            <button 
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
              aria-label="Get personalized recommendation"
            >
              Get Personalized Recommendation
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default UseCases;