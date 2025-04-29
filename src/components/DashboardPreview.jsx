import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPieChart, FiDollarSign, FiActivity, FiBarChart2, FiCheckCircle } from 'react-icons/fi';

const DashboardPreview = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const metrics = [
    { icon: <FiPieChart className="w-5 h-5" />, value: "95%", label: "Forecast Accuracy" },
    { icon: <FiDollarSign className="w-5 h-5" />, value: "24/7", label: "Market Monitoring" },
    { icon: <FiActivity className="w-5 h-5" />, value: "2.5M+", label: "Transactions Analyzed" },
    { icon: <FiBarChart2 className="w-5 h-5" />, value: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="py-20 px-4 bg-white" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Real-Time Financial Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See your financial data come to life with our interactive AI-powered dashboard
          </p>
        </motion.div>

        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
          {/* Dashboard Header */}
          <div className="bg-dark text-white p-4 flex justify-between items-center">
           
            <h3 className="font-medium">AI Financial Dashboard</h3>
            <div className="w-8"></div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                >
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    {metric.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">{metric.value}</p>
                    <p className="text-gray-500 text-sm">{metric.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main Dashboard Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Portfolio Analysis */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-4 rounded-xl shadow-sm lg:col-span-2"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-dark">Portfolio Analysis</h4>
                  <select className="bg-gray-100 text-sm p-1 rounded">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                    <option>Last Year</option>
                  </select>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Interactive Portfolio Chart</p>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>Conservative</span>
                  <span>Balanced</span>
                  <span>Aggressive</span>
                </div>
              </motion.div>

              {/* AI Suggestions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <h4 className="font-bold text-dark mb-4">AI-Generated Suggestions</h4>
                <div className="space-y-4">
                  {['Rebalance portfolio', 'Increase tech exposure', 'Consider tax-loss harvesting', 'Review emerging markets'].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <FiCheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-primary/10 text-primary font-medium py-2 rounded-lg hover:bg-primary/20 transition">
                  View All Recommendations
                </button>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Risk Scoring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <h4 className="font-bold text-dark mb-4">Risk Scoring</h4>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-dark">7.2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-500">Market Risk</span>
                      <span className="text-sm font-medium">High</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    
                    <div className="flex justify-between mb-1 mt-3">
                      <span className="text-sm text-gray-500">Credit Risk</span>
                      <span className="text-sm font-medium">Medium</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-1/2"></div>
                    </div>
                    
                    <div className="flex justify-between mb-1 mt-3">
                      <span className="text-sm text-gray-500">Liquidity Risk</span>
                      <span className="text-sm font-medium">Low</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Transaction Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <h4 className="font-bold text-dark mb-4">Transaction Categorization</h4>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Income</span>
                  </div>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Investments</span>
                  </div>
                  <span className="text-sm font-medium">28%</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">Expenses</span>
                  </div>
                  <span className="text-sm font-medium">18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm">Taxes</span>
                  </div>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="h-32 mt-4 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition">
            Watch Full Dashboard Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;