'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from '../components/ui/Button';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { href: '#services', label: 'Dienstleistungen' },
    { href: '#certification', label: 'Zertifizierung' },
    { href: '#numbers', label: 'Zahlen' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById('kontakt');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleGetQuote = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section 
      className="w-full relative min-h-[600px] sm:min-h-[700px] lg:min-h-[900px]"
      style={{
        backgroundImage: "url('/images/Header.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Navigation Header */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px] relative z-50">
        <div className="flex justify-between items-center py-6 sm:py-8 lg:py-[32px]">
          {/* Logo */}
          <div className="w-full sm:w-auto lg:w-[28%]">
            <Image
              src="/images/logo_sbz_2522 1.svg"
              alt="Company Logo"
              width={338}
              height={42}
              className="w-[200px] sm:w-[250px] lg:w-[338px] h-auto"
              priority
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block w-[66%]">
            <div className="flex flex-row justify-between items-center mr-[26px]">
              {/* Navigation Links */}
              <div className="flex flex-row justify-between items-center w-[46%] mb-[4px]">
                {navigationItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-base font-bold leading-base text-white font-['Manrope'] hover:text-primary-light transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Contact Button */}
              <div className="w-auto">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-auto px-6 py-[6px] shadow-[0px_2px_4px_#06394014] font-bold font-['Manrope']"
                  onClick={handleContactClick}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-primary-light w-full py-4">
            <div className="px-4 sm:px-6">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-base font-bold text-secondary-dark py-3 border-b border-white/30 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="dark"
                  size="md"
                  className="w-full"
                  onClick={handleContactClick}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col justify-start items-start w-full">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-tight sm:leading-tight lg:leading-[58px] text-primary-foreground font-['Manrope'] mt-[20px] sm:mt-[30px] lg:mt-[40px] ml-4 sm:ml-8 lg:ml-[100px] max-w-[90%] sm:max-w-[80%] lg:max-w-none">
            Wir sind Ihr Partner für<br />
            Bau- & Immobilienökonomie
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[27px] font-medium leading-6 sm:leading-7 lg:leading-[36px] text-primary-foreground font-['Manrope'] mt-6 sm:mt-7 lg:mt-[24px] ml-4 sm:ml-8 lg:ml-[100px] w-full sm:w-[80%] lg:w-[46%]">
            Spezialisiert auf Bau- & Investitionskosten und Risk Engineering
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-9 lg:mt-[32px] ml-4 sm:ml-8 lg:ml-[100px]">
            <Button
              variant="dark"
              size="md"
              className="gap-[10px] px-[34px] pr-[50px] py-[14px] flex items-center justify-center transition-colors duration-200"
              onClick={handleGetQuote}
            >
              <span>Jetzt Angebot einholen</span>
              <Image
                src="/images/arrowright.svg"
                alt="Arrow right"
                width={16}
                height={16}
                className="ml-2"
              />
            </Button>
          </div>

          {/* Expert Profile */}
          <div className="flex flex-col sm:flex-row justify-start items-start lg:items-center w-full mt-[80px] sm:mt-[100px] lg:mt-[134px] mx-4 sm:mx-8 lg:mx-[110px] mb-[40px] sm:mb-[50px] lg:mb-[68px]">
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <Image
                src="/images/wagener_christo.png"
                alt="Wagener Christo"
                width={154}
                height={154}
                className="w-[120px] sm:w-[140px] lg:w-[154px] h-[120px] sm:h-[140px] lg:h-[154px] rounded-lg"
              />
            </div>
            
            <div className="flex flex-col gap-1 lg:gap-[4px] justify-start items-start px-4 sm:px-6 lg:px-[28px] mb-0 lg:mb-[16px]">
              <Image
                src="/images/bildschirmfoto_2025_02_03.svg"
                alt="University Logo"
                width={188}
                height={82}
                className="w-[150px] sm:w-[170px] lg:w-[188px] h-auto rounded-base"
              />
              <p className="text-xs sm:text-sm lg:text-[11px] font-medium leading-3 sm:leading-4 lg:leading-[16px] text-primary-foreground font-['Manrope'] ml-0 lg:ml-[6px] mt-2 lg:mt-0">
                Professur für Immobilienwirtschaft
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection