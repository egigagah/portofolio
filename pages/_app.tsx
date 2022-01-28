import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    gsap.registerPlugin(TextPlugin, ScrollTrigger)
  }, []);

  return (
    <div id='main' className='font-[Montserrat] flex flex-row justify-center w-screen bg-secondary'>
      <div className='min-h-screen w-screen max-w-screen-2xl'>
      <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
