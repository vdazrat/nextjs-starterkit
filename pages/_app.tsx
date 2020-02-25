import Head from 'next/head'

import { AppType } from 'next/dist/next-server/lib/utils'

import '../styles/theme.scss'

const NextApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <link
          rel="stylesheet"
          href="/static/styles/override-package-themes.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,700,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default NextApp
