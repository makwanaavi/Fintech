import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from 'react';



const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    trigger: 'onEnter',
    rootMargin: '200px 0px'
  });

  return (
    <section 
      ref={ref}
      className="bg-blue-900 text-white py-16 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold">
            Smarter Finance.
            Powered by AI.
          </h1>
          <p className="text-lg text-blue-200">
            Automate, predict, and grow with AI-driven insights built for modern
            finance.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              aria-label="Request a demo"
            >
              Request Demo
            </button>
            <button 
              className="bg-transparent hover:bg-blue-800 text-white py-2 px-6 border border-white rounded-lg transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Try for free"
            >
              Try for Free
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <Suspense fallback={
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 animate-pulse">
              <div className="bg-blue-800/50 rounded-lg p-4 h-64"></div>
            </div>
          }>
            {inView && (
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="bg-blue-800/50 rounded-lg p-4 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="space-y-4">
                      <div className="h-4 bg-blue-400 rounded w-3/4 mx-auto"></div>
                      <div className="h-4 bg-blue-400 rounded w-full"></div>
                      <div className="h-4 bg-blue-400 rounded w-5/6 mx-auto"></div>
                      <div className="h-32 bg-blue-600 rounded-lg mt-2"></div>
                    </div>
                    <p className="text-blue-200 mt-4">AI Dashboard Preview</p>
                  </div>
                </div>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;