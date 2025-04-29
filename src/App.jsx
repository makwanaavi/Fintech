import { lazy, Suspense } from 'react';
import './App.css';

// Lazy load components with Suspense fallback
const Hero = lazy(() => import('./components/Hero'));
const Security = lazy(() => import('./components/Security'));
const DashboardPreview = lazy(() => import('./components/DashboardPreview'));
const UseCases = lazy(() => import('./components/UseCases'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Integrations = lazy(() => import('./components/Integrations'));
const FinanceApp = lazy(() => import('./components/FinanceApp'));
const CTA = lazy(() => import('./components/CTA'));

function App() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <Hero />
        <Security />
        <DashboardPreview />
        <UseCases />
        <Testimonials />
        <Integrations />
        <FinanceApp />
        <CTA />
      </Suspense>
    </>
  );
}

export default App;