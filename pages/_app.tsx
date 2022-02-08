import 'tailwindcss/tailwind.css'
// import 'devices-medias-component/dist/cjs/index.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
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
