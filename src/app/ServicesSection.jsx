'use client';
import Button from'../components/ui/Button';
 import Grid from'../components/ui/Grid';
 import Image from'next/image';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Beratung in Bau- und Immobilienökonomie",
      description: "Sie benötigen fundierte Beratung für Ihre Bauprojekte oder Immobilieninvestitionen? Wir unterstützen Sie mit detaillierten Marktanalysen & strategischen Empfehlungen."
    },
    {
      id: 2,
      title: "Bauprojektmanagement",
      description: "Vom ersten Konzept bis hin zur Fertigstellung – wir übernehmen die Gesamtleitung Ihres Bauprojekts. Optimieren Sie Ihre Ressourcen und steigern Sie die Effizienz durch unser professionelles Projektmanagement."
    },
    {
      id: 3,
      title: "Immobilieninvestitionen und -bewertungen",
      description: "Mit präzisen Bewertungen und fundierten Marktanalysen maximieren Sie die Rentabilität Ihrer Immobilieninvestitionen. Wir bieten Ihnen eine umfassende Einschätzung der Werte und Potenziale Ihrer Objekte."
    },
    {
      id: 4,
      title: "Gutachten und Sachverständigentätigkeit",
      description: "Als zertifizierte Sachverständige bieten wir Ihnen objektive Gutachten zu Wertermittlungen, Baukosten, Abrechnungen und Bauablaufstörungen."
    },
    {
      id: 5,
      title: "Risk Engineering und Lean Management",
      description: "Unsere Experten helfen Ihnen, Risiken zu identifizieren und Ihre Bauprozesse effizient und nachhaltig zu gestalten – durch den Einsatz von Risk Engineering, Lean Management und IPD/IPA."
    },
    {
      id: 6,
      title: "Nachhaltigkeitsberatung",
      description: "Wir beraten Sie zu nachhaltigem Bauen, Lebenszyklusanalysen, Ökobilanzierung und der Integration von ESG (Environmental, Social, Governance) in Ihre Bauprojekte."
    }
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById('kontakt')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="w-full bg-background-card mt-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[98px] py-[50px] sm:py-[58px] lg:py-[66px]">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[44px] justify-start items-start w-full max-w-[1242px]">
          {/* Section Header */}
          <div className="flex flex-col gap-1 lg:gap-[4px] justify-start items-center w-full lg:w-[48%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-normal leading-tight sm:leading-tight lg:leading-[77px] text-text-primary font-['Red_Hat_Display']">
              Dienstleistungsangebot
            </h2>
            <p className="text-lg sm:text-xl lg:text-[22px] font-medium leading-6 sm:leading-7 lg:leading-[27px] text-text-primary font-['Red_Hat_Display'] w-full mt-6 sm:mt-8 lg:mt-[100px]">
              Wir bieten ein breites Spektrum an Dienstleistungen für Unternehmen und Institutionen im Bau- und Immobilienbereich. Unsere Expertise umfasst:
            </p>
          </div>

          {/* Services Grid */}
          <Grid columns={2} gapClass="gap-5" className="w-full">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-3 sm:gap-3.5 lg:gap-[14px] justify-start items-start w-full h-auto bg-background-card border-0 border-solid border-border-secondary rounded-base p-4 sm:p-5 lg:p-[24px] lg:pt-[22px] lg:pb-[22px]"
              >
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold leading-6 sm:leading-7 lg:leading-[27px] text-secondary-dark font-['DM_Sans'] mt-2 lg:mt-[10px]">
                  {service.title}
                </h3>
                <p className="text-base font-normal leading-6 sm:leading-7 lg:leading-[27px] text-text-muted font-['DM_Sans'] w-full">
                  {service.description}
                </p>
              </div>
            ))}
          </Grid>

          {/* Contact Button */}
          <div className="mt-8 lg:mt-[44px]">
          <Button
            variant="dark"
            size="md"
            className="gap-[6px] px-[34px] pr-[50px] py-[14px] flex items-center justify-center"
            onClick={handleContactClick}
          >
            <span>Kontakt aufnehmen</span>
            <Image
              src="/images/arrowright.svg"
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
  )
}

export default ServicesSection