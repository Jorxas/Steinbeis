'use client';
import Image from 'next/image';
import Button from '../components/ui/Button';

const ExpertSection = () => {
  const handleLearnMore = () => {
    // Handle learn more about expert
    console.log('Learn more about Christoph Wagener');
  };

  return (
    <section className="w-full bg-background-main mt-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-[50px] sm:py-[67px] lg:py-[84px]">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          {/* Expert Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-normal leading-tight sm:leading-tight lg:leading-[72px] text-text-primary font-['Red_Hat_Display'] w-full lg:w-[44%] mt-4 sm:mt-6 lg:mt-[30px] mb-8 lg:mb-0">
            Ihr Experte für Wertermittlung, Baukostenplanung<br />
            & Abrechnung
          </h2>

          {/* Expert Profile */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[36px] justify-start items-start w-full lg:w-[46%] mt-4 sm:mt-6 lg:mt-[30px]">
            <div className="flex flex-col gap-8 sm:gap-9 lg:gap-[38px] justify-start items-center w-full mr-0 lg:mr-[26px]">
              {/* Profile Info */}
              <div className="flex flex-col sm:flex-row lg:flex-row justify-start items-start lg:items-center w-full">
                <div className="flex flex-col sm:flex-row lg:flex-row gap-6 sm:gap-7 lg:gap-[32px] justify-start items-start lg:items-center w-full">
                  <Image
                    src="/images/img_ellipse_72.png"
                    alt="Christoph Wagener"
                    width={96}
                    height={96}
                    className="w-[80px] sm:w-[88px] lg:w-[96px] h-[80px] sm:h-[88px] lg:h-[96px] rounded-2xl"
                  />
                  
                  <div className="flex flex-col justify-start items-start w-full lg:flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-7 sm:leading-8 lg:leading-4xl text-text-primary font-['Manrope']">
                      Christoph Wagener
                    </h3>
                    <p className="text-base sm:text-lg lg:text-lg font-medium leading-5 sm:leading-6 lg:leading-base text-text-muted font-['Manrope'] w-full lg:w-[70%] mt-1 lg:mt-[35px]">
                      Leiter Steinbeis-Beratungszentrum Bau- und Immobilienökonomie
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert Description */}
              <p className="text-lg sm:text-xl lg:text-[22px] font-normal leading-8 sm:leading-9 lg:leading-6xl text-text-primary font-['Manrope'] w-full">
                Leiter Steinbeis-Beratunsgzentrum Bau- und Immobilienökonomie und Prof. Dr. Christoph Wagener ist ein erfahrener Architekt und einem Doktorat in management und economics. Mit jahrelanger Erfahrung in führenden Positionen im Immobilien- und Bauwesen. Er war eingebunden in Bauvorhaben von beträchtlichem Umfang.
              </p>
            </div>

            {/* Learn More Button */}
            <Button
              variant="dark"
              size="md"
              className="gap-[10px] px-[34px] pr-[50px] py-[14px] flex items-center justify-center shadow-[0px_2px_4px_#06394014]"
              onClick={handleLearnMore}
            >
              <span>Mehr über Christoph Wagener</span>
              <Image
                src="/images/img_arrowright.svg"
                alt="Arrow right"
                width={16}
                height={16}
                className="ml-2"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;