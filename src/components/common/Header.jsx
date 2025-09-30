'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
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

  return (
    <header className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
        <div className="flex justify-between items-center py-6 sm:py-8 lg:py-[32px]">
          {/* Logo */}
          <div className="w-full sm:w-auto lg:w-[28%]">
            <Image
              src="/images/logo_sbz_25221.svg"
              alt="Company Logo"
              width={338}
              height={42}
              className="w-[200px] sm:w-[250px] lg:w-[338px] h-auto"
              priority
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2 transition-transform duration-200 hover:scale-110" 
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
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
                    className="text-base font-bold leading-base text-text-primary font-['Manrope'] hover:text-primary-background transition-colors cursor-pointer"
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
          <div className="lg:hidden bg-primary-light shadow-lg border-t-2 border-primary-background animate-slideDown">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-base font-bold text-secondary-dark font-['Manrope'] hover:text-primary-background hover:bg-white/50 transition-all duration-200 py-3 px-3 rounded-lg cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  variant="dark"
                  size="md"
                  className="w-full font-bold font-['Manrope']"
                  onClick={handleContactClick}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header