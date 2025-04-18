import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    quote: "The AI saved us 20+ hours per month in manual analysis and reduced our fraud cases by 65% in the first quarter.",
    author: "Sarah Johnson",
    role: "CFO, FinTech Innovations Inc.",
    avatar: "SJ"
  },
  {
    quote: "As a financial advisor, the predictive insights have transformed how I serve my clients. My satisfaction scores increased by 30%.",
    author: "Michael Chen",
    role: "Senior Financial Advisor",
    avatar: "MC"
  },
  {
    quote: "Implementation was seamless and the ROI was evident within weeks. The automated reconciliation alone was worth the investment.",
    author: "David Rodriguez",
    role: "COO, Community Credit Union",
    avatar: "DR"
  }
];

const metrics = [
  { value: "65%", label: "Reduction in fraud cases" },
  { value: "20+", label: "Hours saved monthly" },
  { value: "95%", label: "Forecast accuracy" },
  { value: "4.8/5", label: "Customer satisfaction" }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-dark mb-4">Trusted by Financial Professionals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from those who've transformed their financial operations with our AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl"
              aria-labelledby={`testimonial-${index}-author`}
            >
              <FiMessageSquare className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
              <blockquote className="text-gray-700 italic mb-6">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold"
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 id={`testimonial-${index}-author`} className="font-bold text-dark">{testimonial.author}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Metrics */}
        <div className="bg-primary/5 rounded-xl p-8">
          <h3 className="text-center text-2xl font-bold text-dark mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.figure
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                <figcaption className="text-gray-600">{metric.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">Want to see more case studies?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download our full collection of customer success stories and see how AI can transform your financial operations.
          </p>
          <button 
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition"
            aria-label="Download case studies"
          >
            Download Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;