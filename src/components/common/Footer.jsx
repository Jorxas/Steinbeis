'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Line from '../ui/Line';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: 'Vorname Nachname',
    email: 'name@gmail.com',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="w-full mt-[90px]">
      {/* Contact Form Section */}
      <section 
        id="kontakt"
        className="w-full relative"
        style={{
          backgroundImage: "url('/images/kontakt.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[92px] py-[50px] sm:py-[66px] lg:py-[82px]">
          <div className="flex flex-col lg:flex-row justify-start items-start w-full">
            <div className="w-full lg:w-[48%]">
              <div className="bg-background-card rounded-base p-6 sm:p-8 lg:p-[38px] lg:pt-[32px] lg:pb-[32px]">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal leading-8 sm:leading-10 lg:leading-10xl text-text-primary font-['Red_Hat_Display'] mb-4 sm:mb-6 lg:mb-[22px]">
                  Kontaktieren Sie uns
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-[20px]">
                  {/* Name Field */}
                  <div className="flex flex-col justify-start items-start w-full">
                    <label className="text-base font-semibold leading-base text-text-light font-['Red_Hat_Display'] mb-2">
                      Vor- &amp; Nachname
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full text-lg font-normal leading-lg text-text-primary font-['Red_Hat_Display'] bg-transparent border-none outline-none pb-2"
                    />
                    <Line width="548px" height="1px" className="w-full mt-[10px]" />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-[6px] justify-start items-start w-full">
                    <label className="text-base font-semibold leading-base text-text-light font-['Red_Hat_Display']">
                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full text-lg font-normal leading-lg text-text-primary font-['Red_Hat_Display'] bg-transparent border-none outline-none"
                    />
                    <Line width="548px" height="1px" className="w-full" />
                  </div>

                  {/* Subject Field */}
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <label className="text-base font-semibold leading-base text-text-light font-['Red_Hat_Display']">
                      Betreff
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full text-lg font-normal leading-lg text-text-primary font-['Red_Hat_Display'] bg-transparent border-none outline-none pb-2"
                    />
                    <Line width="548px" height="1px" className="w-full" />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <label className="text-base font-semibold leading-base text-text-light font-['Red_Hat_Display']">
                      Nachricht
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full text-lg font-normal leading-lg text-text-primary font-['Red_Hat_Display'] bg-transparent border-none outline-none pb-2 resize-none min-h-[80px]"
                      rows={3}
                    />
                    <Line width="548px" height="1px" className="w-full" />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-[36px] mb-[4px]">
                    <Button
                      text="Senden"
                      text_font_size="text-base"
                      text_font_family="Manrope"
                      text_font_weight="font-bold"
                      text_line_height="leading-base"
                      text_color="text-primary-foreground"
                      fill_background_color="bg-background-dark"
                      border_border_radius="rounded-xl"
                      effect_box_shadow="shadow-[0px_2px_4px_#06394014]"
                      className="w-full gap-[10px] px-[34px] pr-[50px] py-[14px] flex items-center justify-center"
                      type="submit"
                      layout_width="w-full"
                      padding="px-[34px] pr-[50px] py-[14px]"
                      position="relative"
                      layout_gap="gap-[10px]"
                      margin=""
                      variant="dark"
                      size="medium"
                      onClick={handleSubmit}
                    >
                      <span>Senden</span>
                      <Image
                        src="/images/arrowright.svg"
                        alt="Arrow right"
                        width={16}
                        height={16}
                        className="ml-2"
                      />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="w-full bg-background-accent">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-7 lg:py-[28px]">
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px] justify-start items-center w-full">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[86%] mt-6 sm:mt-8 lg:mt-[36px]">
              {/* Company Info */}
              <div className="flex flex-col justify-start items-start w-full lg:w-[24%] mb-8 lg:mb-0">
                <div className="mr-0 lg:mr-[30px] mb-8 sm:mb-12 lg:mb-[62px]">
                  <Image
                    src="/images/logo_sbz_2522 1.svg"
                    alt="Company Logo"
                    width={278}
                    height={34}
                    className="w-full max-w-[278px] h-auto"
                  />
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-5 lg:gap-[20px] justify-start items-start lg:items-center w-full mb-8 sm:mb-12 lg:mb-[54px]">
                  <Image
                    src="/images/wagener_christo.png"
                    alt="Wagener Christo"
                    width={100}
                    height={100}
                    className="w-[80px] sm:w-[90px] lg:w-[100px] h-[80px] sm:h-[90px] lg:h-[100px] rounded-lg"
                  />
                  <Image
                    src="/images/bildschirmfoto_2025_02_03.svg"
                    alt="Screenshot"
                    width={154}
                    height={66}
                    className="w-full sm:w-[60%] lg:w-[154px] h-auto rounded-base"
                  />
                </div>

                <p className="text-sm font-normal leading-sm text-text-primary font-['Manrope'] mb-[6px]">
                  Members area:
                </p>

                <div className="flex flex-col sm:flex-row lg:flex-row justify-start items-start lg:items-center w-full gap-4 lg:gap-0">
                  <div className="w-[22px] h-[22px] bg-accent-color rounded-base"></div>
                  <Image
                    src="/images/vector.svg"
                    alt="Vector"
                    width={100}
                    height={20}
                    className="w-[80px] sm:w-[100px] h-[16px] sm:h-[20px] ml-0 lg:ml-4"
                  />
                  <Image
                    src="/images/luckycloud_logo.svg"
                    alt="Lucky Cloud Logo"
                    width={130}
                    height={30}
                    className="w-[110px] sm:w-[130px] h-[25px] sm:h-[30px] ml-0 lg:ml-8"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col sm:flex-row lg:flex-row gap-6 sm:gap-8 lg:gap-[32px] justify-center items-start w-full lg:w-[36%] mt-0 lg:mt-[12px]">
                {/* Company Links */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] justify-center items-start w-full">
                  <h3 className="text-lg font-medium leading-xl text-text-primary font-['Manrope']">
                    Unternehmen
                  </h3>
                  <div className="flex flex-col gap-3 sm:gap-3.5 lg:gap-[14px] justify-start items-start w-full">
                    <a href="#philosophy" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors">
                      Philosophie
                    </a>
                    <a href="#team" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors">
                      Team
                    </a>
                    <a href="#contact" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors">
                      Kontakt
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[24px] justify-center items-start w-full">
                  <h3 className="text-lg font-medium leading-xl text-text-primary font-['Manrope']">
                    Kontaktinformationen
                  </h3>
                  <div className="flex flex-col gap-4 sm:gap-4.5 lg:gap-[18px] justify-start items-start w-full">
                    <address className="text-base font-medium leading-base text-text-secondary font-['Manrope'] not-italic">
                      Priminstraße 143,<br />
                      D-78479 Reichenau Insel
                    </address>
                    <a href="tel:+4915678971391" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors">
                      +49 15678 971391
                    </a>
                    <a href="mailto:christoph.wagener@stw.de" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors">
                      christoph.wagener@stw.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px] justify-start items-center w-full max-w-[1242px]">
              <Line width="1238px" height="1px" className="w-full" />
              
              <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center w-full gap-4 sm:gap-6">
                <p className="text-lg font-normal leading-xl text-text-primary font-['Manrope']">
                  © 2025 Sebastian Kratz
                </p>
                
                <div className="flex flex-col sm:flex-row lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-0">
                  <a href="#privacy" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors">
                    Datenschutz
                  </a>
                  <a href="#imprint" className="text-base font-medium leading-base text-text-secondary font-['Manrope'] hover:text-primary-background transition-colors ml-0 lg:ml-[26px]">
                    Impressum
                  </a>
                  
                  <div className="flex items-center gap-4 ml-0 lg:ml-[38px]">
                    <a href="#instagram" className="hover:opacity-75 transition-opacity">
                      <Image
                        src="/images/instagramlogo.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#facebook" className="hover:opacity-75 transition-opacity">
                      <Image
                        src="/images/facebooklogo.svg"
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a href="#linkedin" className="hover:opacity-75 transition-opacity">
                      <Image
                        src="/images/linkedinlogo.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;