import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface MetaHeadTypes extends HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  imgUrl?: string
  googleFontUrl?: string
  children?: ReactNode
}

export const MetaHead: FC<MetaHeadTypes> = ({
  title,
  description,
  imgUrl = 'https://i.im.ge/2022/01/09/X1nLGa.png',
  googleFontUrl = '',
  children,
}: MetaHeadTypes) => {
  const route = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://portal-jakevo.vercel.app${route.asPath}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://portal-jakevo.vercel.app${route.asPath}`}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgUrl} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/default.min.css"></link> */}
      <link
        href={`https://fonts.googleapis.com/css2?family=Georama:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Hahmlet:wght@100;200;300;400;500;600;700;800;900${
          googleFontUrl == '' ? '' : '&' + googleFontUrl
        }&display=swap`}
        rel="stylesheet"
      />
      {children}
    </Head>
  )
}
