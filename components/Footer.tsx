import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

export const Footer = () => {
  return (
    <footer className="w-full bg-primary text-secondary">
      <div className="flex flex-col py-6 md:py-8">
        <div className="flex flex-1 flex-col justify-center items-center"></div>
        <div className="flex flex-1 flex-col lg:flex-row space-y-2 lg:space-y-0 text-xs md:text-sm">
          <div className="flex flex-1 flex-col justify-center items-center">
            <p>
              {new Date().getFullYear()} &copy; Egi Gagah Brilliant
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            {/* <p>Egi Gagah Brilliant</p> */}
          </div>
          <div className="flex flex-1 flex-row justify-center items-center space-x-4">
            <a
              href="https://github.com/egigagah"
              target={'_blank'}
              rel="noreferrer"
            >
              <IoLogoGithub className="h-[1.5rem] w-[1.5rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/egi-gagah-brilliant-b0b940132"
              target={'_blank'}
              rel="noreferrer"
            >
              <IoLogoLinkedin className="h-[1.5rem] w-[1.5rem]" />
            </a>
            <a
              href="https://www.instagram.com/egigagah"
              target={'_blank'}
              rel="noreferrer"
            >
              <AiFillInstagram className="h-[1.5rem] w-[1.5rem]" />
            </a>
            <a
              href="https://twitter.com/egigagah"
              target={'_blank'}
              rel="noreferrer"
            >
              <IoLogoTwitter className="h-[1.5rem] w-[1.5rem]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
