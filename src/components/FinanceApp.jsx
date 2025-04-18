import { motion } from "framer-motion";
import { FaAndroid, FaApple } from "react-icons/fa";
import { FiPhone, FiBarChart, FiTrendingUp } from "react-icons/fi";

const features = [
  {
    icon: <FiPhone className="text-4xl text-primary mb-4" aria-hidden="true" />,
    title: "Instant Alerts",
    description: "Get real-time notifications for your account activity, ensuring you're always in control."
  },
  {
    icon: <FiBarChart className="text-4xl text-primary mb-4" aria-hidden="true" />,
    title: "AI Portfolio Rebalancing",
    description: "Let AI intelligently rebalance your portfolio for optimal returns, based on your goals."
  },
  {
    icon: <FiTrendingUp className="text-4xl text-primary mb-4" aria-hidden="true" />,
    title: "Spend Insights",
    description: "Track your spending habits with insightful reports and discover areas to save more."
  }
];

const FinanceApp = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" aria-labelledby="finance-app-heading">
      <div className="container mx-auto text-center">
        <h2 id="finance-app-heading" className="text-3xl md:text-4xl font-bold text-dark mb-6">
          Mobile-First Finance App
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Manage your finances effortlessly with our cutting-edge mobile app.
          Stay ahead with features powered by AI and personalized insights.
        </p>

        {/* Simplified Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* App Download Links */}
        <div className="mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Download the app now and start managing your finances on the go.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors w-full sm:w-auto"
              aria-label="Download on the App Store"
            >
              <FaApple className="mr-2 text-xl" aria-hidden="true" />
              <span>App Store</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto"
              aria-label="Get it on Google Play"
            >
              <FaAndroid className="mr-2 text-xl" aria-hidden="true" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceApp;