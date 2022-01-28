import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import DividerSvg from "../svg/Divider";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Jakevo from "@/public/images/jakevo.png";
import JakevoUi from "@/public/images/jakevo-ui.png";
import Plasma from "@/public/images/plasma.png";
import Pelayanan from "@/public/images/pelayanan.png";
import Pelaporan from "@/public/images/pelaporan-covid19.png";
import Jaksehat from "@/public/images/jaksehat.png";

export default function Portofolio() {
  
  const portoData = [
    {name: "Jakevo Remake", link: "https://jakevo-ui-dev.vercel.app/home/", status: "development", src: JakevoUi },
    {name: "Jakevo", link: "https://jakevo.jakarta.go.id/", status: "on air", src: Jakevo},
    {name: "Pelayanan", link: "https://pelayanan.jakarta.go.id/", status: "on air", src: Pelayanan},
    {name: "Screening Plasma Konvalesen", link: "https://plasmakonvalesen.jakarta.go.id/", status: "on air", src: Plasma},
    {name: "Jaksehat", link: "https://jaksehat.jakarta.go.id/", status: "development", src: Jaksehat},
    {name: "Pelaporan Covid19", link: "https://pelaporan-covid19.jakarta.go.id/", status: "on air", src: Pelaporan},
  ]

  useEffect(() => {
    const mobileBreakPoints = window.matchMedia('(max-width: 640px)').matches
    if (!mobileBreakPoints) {
      gsap.utils.toArray<HTMLElement>('.porto-cards').forEach( el => {
        gsap.fromTo(el, {yPercent: 50, autoAlpha: 0},
          {
            yPercent: 0, autoAlpha: 1,
            scrollTrigger: {
              trigger: '#portofolio-section',
              start: 'top center',
              end: '20% center',
              scrub: true,
              // markers: true,
            }
          }
        )
      })
    }
  }, [])

  return (
    <section id="portofolio-section" className="min-h-screen flex flex-col relative">
      <DividerSvg isTop={true} />
      <div className="flex flex-col mt-[120px] md:mt-[230px] space-y-16 bg-primary">
        <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-2xl md:text-4xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-br from-white to-secondary drop-shadow-lg">Portofolio</h3>
        </div>
        <div className="flex flex-row justify-center items-center px-8 md:px-16 lg:px-32 pb-[120px] md::pb-[230px]">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
            {portoData.map((item, idx) => (
              <a key={idx} href={item.link} target={"_blank"} id={`porto-cards-${idx}`} className="porto-cards overflow-hidden w-full h-[12rem] lg:h-[13.5rem] xl:h-[15rem] relative bg-gray-200 rounded-xl shadow-lg flex flex-col justify-end">
                <Image
                  src={item.src}
                  layout="fill"
                  objectFit="cover"
                  className=" transform hover:scale-[1.02]"
                />
                <div className="absolute top-10 left-0 bg-secondary p-2 drop-shadow-xl rounded-r-lg development-tag text-xs text-primary font-bold">
                  <p>{item.status}</p>
                </div>
                <div className="h-1/3 z-[1] w-full bg-gray-100 bg-opacity-50 rounded-b-xl flex flex-col justify-center px-4 text-black">
                  <h3 className="font-semibold text-md">{item.name}</h3>
                  <p className="text-sm">descripsi aplikasi</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}