import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export * from 'gsap'
export * from 'gsap/dist/ScrollTrigger'
export * from 'gsap/dist/TextPlugin'
