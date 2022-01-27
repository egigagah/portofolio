import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id='main' className='font-[Montserrat] flex flex-row justify-center w-screen bg-secondary'>
      <div className='min-h-screen w-screen max-w-screen-2xl'>
      <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
