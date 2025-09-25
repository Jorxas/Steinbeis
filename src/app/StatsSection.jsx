'use client';
import Image from'next/image';
 import List from'../components/ui/List';
 import Line from'../components/ui/Line';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      number: "1100",
      label: "Transferunternehmen"
    },
    {
      id: 2,
      number: "5100",
      label: "Expertinnen und Experten"
    },
    {
      id: 3,
      number: "40 Jahre",
      label: "Erfolgreicher Wissenstransfer"
    },
    {
      id: 4,
      number: "159,7",
      numberSuffix: "Millionen Euro",
      label: "Gesamtumsatz"
    }
  ]

  return (
    <section className="w-full bg-background-card mt-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-[40px] sm:py-[45px] lg:py-[50px]">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[52px] justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[86%] mt-4 sm:mt-6 lg:mt-[26px]">
            <div className="flex flex-col gap-1 lg:gap-[4px] justify-start items-start w-full lg:flex-1 mb-6 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight sm:leading-tight lg:leading-10xl text-text-primary font-['Red_Hat_Display']">
                Steinbeis Erfolg in Zahlen
              </h2>
              <p className="text-base font-normal leading-6 sm:leading-7 lg:leading-2xl text-text-muted font-['Albert_Sans'] w-full lg:w-[88%] mt-4 sm:mt-6 lg:mt-[77px]">
                Steinbeis ist ein weltweiter Verbund aus über 1.100 Transferunternehmen, in dem 5.100 Expertinnen und Experten ihr Know-how einbringen. Wir erarbeiten in interdisziplinären Teams individuelle Problemlösungen, die Kunden einen echten Mehrwert bringen und Steinbeis den Erfolg ermöglichen – damit sind wir zu einem der weltweit erfolgreichsten Dienstleister im Wissens- und Technologietransfer geworden. Entscheidend bei allen Projekten: der Erfolg der Kunden, Mitarbeiter und Partner.
              </p>
            </div>
            
            <div className="w-full lg:w-[26%] mt-1 lg:mt-[4px]">
              <Image
                src="/images/img_125992_logo_sbz_2522.png"
                alt="Steinbeis Logo"
                width={338}
                height={42}
                className="w-full max-w-[338px] h-auto"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <List direction="row" gapClass="gap-5" className="w-full max-w-[1242px] flex-wrap lg:flex-nowrap">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px] justify-center items-start w-full sm:w-[48%] lg:w-[294px] h-auto bg-primary-light rounded-base p-6 sm:p-7 lg:p-[32px]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-8xl text-text-primary font-['Albert_Sans']">
                  {stat.number}
                  {stat.numberSuffix && (
                    <span className="text-lg font-bold leading-8xl text-text-primary font-['Albert_Sans'] ml-1">
                      {stat.numberSuffix}
                    </span>
                  )}
                </div>
                
                <Line width="230px" height="1px" className="w-full" />
                
                <p className="text-base font-medium leading-sm text-text-muted font-['Albert_Sans']">
                  {stat.label}
                </p>
              </div>
            ))}
          </List>
        </div>
      </div>
    </section>
  )
}

export default StatsSection