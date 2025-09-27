'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
        <div className="flex justify-between items-center py-6 sm:py-8 lg:py-[32px]">
          {/* Logo */}
          <div className="w-full sm:w-auto lg:w-[28%]">
            <Image
              src="/images/img_125992_logo_sbz_2522.png"
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
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-[66%] bg-background-card lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 lg:p-0 mr-0 lg:mr-[26px]">
              {/* Navigation Links */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:w-[46%] space-y-4 lg:space-y-0 mb-4 lg:mb-[4px]">
                <a 
                  href="#services" 
                  className="text-base font-bold leading-base text-text-primary font-['Manrope'] hover:text-primary-background transition-colors"
                >
                  Dienstleistungen
                </a>
                <a 
                  href="#certification" 
                  className="text-base font-bold leading-base text-text-primary font-['Manrope'] hover:text-primary-background transition-colors"
                >
                  Zertifizierung
                </a>
                <a 
                  href="#numbers" 
                  className="text-base font-bold leading-base text-text-primary font-['Manrope'] hover:text-primary-background transition-colors"
                >
                  Zahlen
                </a>
              </div>

              {/* Contact Button */}
              <div className="w-full lg:w-auto">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-auto px-6 py-[6px] shadow-[0px_2px_4px_#06394014] font-bold font-['Manrope']"
                  onClick={() => {
                    // Handle contact button click
                    console.log('Contact button clicked')
                  }}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header