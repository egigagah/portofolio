import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import DividerSvg from "../svg/Divider";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Portofolio() {
  
  const portoData = [
    {name: "1", link: "1", status: "on progress"},
    {name: "2", link: "2", status: "development"},
    {name: "3", link: "3", status: "development"},
    {name: "4", link: "4", status: "maintenance"},
    {name: "5", link: "5", status: "maintenance"},
    {name: "6", link: "6", status: "maintenance"},
  ]

  useEffect(() => {
    const tlPorto = gsap.timeline()

    tlPorto
    .fromTo('#porto-cards-wrapper', {yPercent: 50, autoAlpha: 0},
      {yPercent: 0, autoAlpha: 1}
    )
    ScrollTrigger.create({
      trigger: '#profil-pict',
      start: 'top top',
      scrub: true,
      markers: true,
      animation: tlPorto,
    })
  }, [])

  return (
    <section id="portofolio-section" className="min-h-screen flex flex-col relative">
      <DividerSvg isTop={true} />
      <div className="flex flex-col mt-[120px] md:mt-[230px] space-y-16 bg-primary">
        <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-2xl md:text-4xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-br from-white to-secondary drop-shadow-lg">Portofolio</h3>
        </div>
        <div className="flex flex-row justify-center items-center px-8 md:px-16 lg:px-32 pb-[120px] md::pb-[230px]">
          <div id="porto-cards-wrapper" className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {portoData.map((item, idx) => (
              <div key={idx} className="porto-cards w-full h-[12rem] lg:h-[15rem] relative bg-gray-200 rounded-xl transform hover:scale-[1.01] hover:cursor-pointer shadow-lg">
                <div className="absolute top-10 left-0 bg-secondary p-2 drop-shadow-xl rounded-r-lg development-tag">
                  <p>{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}