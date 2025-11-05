import Image from'next/image';

const CertificationSection = () => {
  return (
    <section id="certification" className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] py-[60px] sm:py-[80px] lg:py-[106px]">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[92%] mx-auto">
          {/* Certification Image */}
          <div className="w-full lg:w-[282px] mb-8 lg:mb-0">
            <Image
              src="/images/wagener_christo.png"
              alt="Certification Badge"
              width={282}
              height={282}
              className="w-full max-w-[250px] sm:max-w-[282px] h-auto rounded-lg mx-auto lg:mx-0"
            />
          </div>

          {/* Certification Content */}
          <div className="flex flex-col gap-8 sm:gap-9 lg:gap-[40px] justify-start items-center w-full lg:w-[64%]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight sm:leading-tight lg:leading-7xl text-text-primary font-['Red_Hat_Display'] w-full">
              Zertifizierung als Gutachter<br />
              Höchste internationale Anerkennung für Gutachter und Sachverständige.
            </h2>
            
            <p className="text-base font-normal leading-6 sm:leading-7 lg:leading-2xl text-text-muted font-['Albert_Sans'] w-full">
              Zertifiziert als Sachverständiger für Wertermittlung und Baukostenermittliung und -abrechnung sowie Bauablaufstörungen nach DIN EN ISO/IEC 17024 (Personnel Certification No. 1-24-1113 EUcert)
              <br /><br />
              Nach Prüfung und Empfehlung durch das European Committee for Quality Assurance EUC in Brüssel ist Prof. Dr. Christoph Wagener am 14.08.2024 von der Zertifizierungsstelle des EUC, European Certification EU Cert CYF., Regus House Malthouse Avenue, Cardiff Gate Business Park, Pontprennau- Cardiff Wales CF 238RU GB nach DIN EN ISO/ IEC 17024 zertifiziert worden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationSection