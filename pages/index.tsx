import Portofolio from '@/components/landing/Portofolio'
import { PageWrapper } from '@/components/PageWrapper'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import { useEffect } from 'react'
import Banner from '../components/landing/Banner'
import DividerSvg from '../components/svg/Divider'

export default function Home() {

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.utils.toArray<HTMLElement>('section').forEach(el => {
  //     ScrollTrigger.create({
  //       trigger: el,
  //       start: 'top top',
  //       // end: el.offsetHeight,
  //       markers: true,
  //       scrub: true,
  //       pin: true
  //     })
  //   })

  // }, [])

  return (
    <PageWrapper titleTag='Egi Gagah Brilliant | Portofolio' noHeading={true}>
      <Banner />
      <Portofolio />
    </PageWrapper>
  )
}
