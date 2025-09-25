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
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ExpertSection />
        <CertificationSection />
        <ServiceDetailsSection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage