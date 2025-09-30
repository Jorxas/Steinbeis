'use client';
import Image from 'next/image';
import Button from '../components/ui/Button';

const ServiceDetailsSection = () => {
  const services = [
    {
      id: 1,
      title: "Wertermittlung und Baukostenplanung",
      description: "Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar. Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl ultrices ac pharetra tellus placerat.",
      image: "/images/pexels_pixabay_162539.png",
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Nachhaltiges Bauen",
      description: "Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar. Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl ultrices ac pharetra tellus placerat.",
      image: "/images/pexels-pixabay-162539 1.jpg",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "Professur für Bau- und Immobilienwirtschaft",
      description: "Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar. Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl ultrices ac pharetra tellus placerat.",
      image: "/images/pexels-pixabay-1625392.png",
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Risk Engineering",
      description: "Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar. Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl ultrices ac pharetra tellus placerat.",
      image: "/images/pexels-pixabay-1625393.png",
      imagePosition: "right"
    }
  ]

  const handleLearnMore = (serviceTitle) => {
    console.log(`Learn more about: ${serviceTitle}`)
  }

  return (
    <section className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className={`w-full ${index > 0 ? 'border-t border-gray-100' : ''}`}>
            {service.imagePosition === "left" ? (
              // Image Left Layout
              <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-[28px] py-[30px] sm:py-[38px] lg:py-[46px]">
                <div className="w-full lg:w-[38%] mb-6 lg:mb-0 lg:ml-[70px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={514}
                    height={524}
                    className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[514px] h-auto rounded-base mx-auto lg:mx-0"
                  />
                </div>
                
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[26px] justify-start items-center w-full lg:w-[48%]">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight sm:leading-tight lg:leading-9xl text-text-primary font-['Red_Hat_Display'] w-full">
                    {service.title}
                  </h3>
                  
                  <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[32px] justify-start items-start w-full">
                    <p className="text-base font-medium leading-6 sm:leading-7 lg:leading-3xl text-text-muted font-['Manrope'] w-full lg:w-[82%]">
                      {service.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="md"
                      className="px-[34px] py-[14px]"
                      onClick={() => handleLearnMore(service.title)}
                    >
                      Mehr erfahren
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // Image Right Layout
              <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 sm:px-6 lg:px-[46px] py-[30px] sm:py-[38px] lg:py-[46px]">
                <div className="flex flex-col justify-start items-start w-full lg:w-[54%] mb-6 lg:mb-[112px] order-2 lg:order-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight sm:leading-tight lg:leading-10xl text-text-primary font-['Red_Hat_Display']">
                    {service.title}
                  </h3>
                  
                  <p className="text-base font-medium leading-6 sm:leading-7 lg:leading-3xl text-text-muted font-['Manrope'] w-full lg:w-[72%] mt-1 lg:mt-[4px]">
                    {service.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="md"
                    className="px-[34px] py-[14px] mt-6 sm:mt-7 lg:mt-[32px]"
                    onClick={() => handleLearnMore(service.title)}
                  >
                    Mehr erfahren
                  </Button>
                </div>
                
                <div className="w-full lg:w-[38%] order-1 lg:order-2 mb-6 lg:mb-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={514}
                    height={524}
                    className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[514px] h-auto rounded-base mx-auto"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceDetailsSection