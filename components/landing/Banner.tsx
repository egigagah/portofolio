import Image from "next/image";
import ProfilePict from "@/public/images/egi.jpg";
import DividerSvg from "../svg/Divider";
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Banner() {
  const yearsExp = new Date().getFullYear() - 2017

  useEffect(() => {
    let ready = true;
    if (ready) {
     
      gsap.registerPlugin(TextPlugin, ScrollTrigger)
      const mobileBreakPoints = window.matchMedia('(max-width: 640px)').matches
      // tl.to('#typewiriter', {duration: 10, text: "Hellooo, I'm Egi Gagah Brilliant"})
      // tl.to('#typewiriter', {duration: 10, text: "Hellooo, I'm Egi Gagah Brilliant"})


      const tlWelcome = gsap.timeline()
      
      tlWelcome.to(
        '#divider-svg-banner',
        // {height: '270vh'},
        // {height: mobileBreakPoints ? '250vh' : '150vh'},
        {height: mobileBreakPoints ? '125px' : '235px', delay: 2}
      )
      // .fromTo("#reachme", {zIndex: 0}, {zIndex: 1})
      .to('#typewiriter', {text: ""})
      .fromTo('#typewiriter',
        {text: ""},
        { duration: 4, text: "Hellooo, Welcome to my website",
          // delay: 0.5,
          stagger: {
            from: 'start',
            each: 0.5,
            yoyo: true,
            repeat: 1,
            repeatDelay: 1
          },
        }
      )
      .fromTo('#typewiriter',
        {text: ""},
        { duration: 3, text: "I'm Egi Gagah Brilliant", delay: 0.5,
          stagger: {
            from: 'start',
            each: 0.5,
          }
        }
      )

      const tlBanner = gsap.timeline({})

      tlBanner.add('start')
      .to('#profil-pict',{scale: 1.3 }, 'start')
      .to("#head-detail", {yPercent: 100, ease: 'expo.in'}, 'start')

      ScrollTrigger.create({
        trigger: "#head-section",
        start: 'top top',
        end: "65% top",
        // markers: true,
        scrub: true,
        pin: true,
        animation: tlBanner
      })
    }
    return () => {ready = false}
  }, [])

  return (
    <section id="head-section" className="min-h-screen w-full h-full flex flex-col pt-32 md:pt-16 space-y-8 md:space-y-16 relative">
      <div className="flex flex-col justify-center items-center drop-shadow-xl">
        <div id="profil-pict" className="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] rounded-full relative overflow-clip bg-[#025191]">
          <Image
            src={ProfilePict}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div id="type-wrapper" className="flex flex-row w-full justify-center items-center text-gray-500 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col text-center min-h-[63px] md:min-h-[45px]">
          <h3 id="typewiriter" className="text-2xl md:text-4xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-br from-blue-400 to-primary drop-shadow-lg"></h3>
        </div>
      </div>
      <div id="head-detail" className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-4 text-gray-500 px-4 md:px-16 lg:px-32 text-center drop-shadow-xl">
        <div className="flex flex-col text-lg md:text-xl lg:text-2xl">
          <p>{yearsExp}</p>
          <p className="font-semibold">Years Experiences</p>
        </div>
        <div className="flex flex-col text-lg md:text-xl lg:text-2xl">
          <p>Role</p>
          <p className="font-semibold">Frontend Developer</p>
        </div>
        <div className="flex flex-col text-lg md:text-xl lg:text-2xl">
          <p>Language</p>
          <p className="font-semibold">Bahasa and English</p>
        </div>
      </div>
      {/* <div className="flex flex-row justify-center">
        <button id="reachme" onClick={() => console.log('')} className="py-2 px-4 md:px-8 md:py-4 bg-primary text-secondary rounded-xl font-semibold shadow-xl transform hover:scale-[1.02]" > Reach Me</button>
      </div> */}
      <DividerSvg id='banner' height="h-[270vh]" />
    </section>
  )
}