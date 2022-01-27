import { FC, HTMLAttributes } from 'react'
import { Footer } from './Footer'
import { MetaHead } from './MetaHead'

interface PageWrapperTypes extends HTMLAttributes<HTMLDivElement> {
  titleTag: string
  descriptionTag?: string
  imgUrlTag?: string
  googleFontUrlTag?: string
  noHeading?: boolean
  noFooter?: boolean
}

export const PageWrapper: FC<PageWrapperTypes> = ({
  children,
  titleTag,
  descriptionTag,
  imgUrlTag,
  googleFontUrlTag,
  noHeading = false,
  noFooter = false,
  ...rest
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title={titleTag}
        description={descriptionTag}
        imgUrl={imgUrlTag}
        googleFontUrl={googleFontUrlTag}
      />
      <div
        className="h-full w-full flex flex-col"
        {...rest}
      >
        {!noHeading && (
          <div className="flex flex-col text-center drop-shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent py-2 bg-clip-text bg-gradient-to-br from-primary to-red-600">
              {titleTag}
            </h2>
            <p className="flex-1 text-md md:text-2xl">{descriptionTag}</p>
          </div>
        )}
        {children}
      </div>
      {!noFooter && <Footer />}
    </div>
  )
}
