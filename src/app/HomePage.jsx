'use client';
 import Footer from'../components/common/Footer';
 import HeroSection from'./HeroSection';
 import ServicesSection from'./ServicesSection';
 import StatsSection from'./StatsSection';
 import ExpertSection from'./ExpertSection';
import CertificationSection from './CertificationSection';
 import ServiceDetailsSection from'./ServiceDetailsSection';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <main className="w-full">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ExpertSection />
        <CertificationSection />
        <ServiceDetailsSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage