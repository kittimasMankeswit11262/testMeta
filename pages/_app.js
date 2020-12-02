import '../styles/globals.css'
import React, { Fragment } from 'react'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
      <title>{"International Buffet at Furama Silom Hotel"}</title>
				<meta name="description" content={"Description International Buffet at Furama Silom Hotel"} />
				<meta name="keywords" content={"test"} />
				<meta property="og:title" content={"International Buffet at Furama Silom Hotel"} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={"https://test-meta-demo.herokuapp.com/"} />
				<meta property="og:image" content={"https://firebasestorage.googleapis.com/v0/b/lancher-2ab37.appspot.com/o/10020200430T18331657332.jpg?alt=media&token=f70cfd2c-b0cc-4191-b48c-8b44e0d41faf"} />

				<meta property="og:image" content={"https://firebasestorage.googleapis.com/v0/b/lancher-2ab37.appspot.com/o/10020200430T18331657332.jpg?alt=media&token=f70cfd2c-b0cc-4191-b48c-8b44e0d41faf"} />
				<meta property="og:description" content={"International Buffet at Furama Silom Hotel"} />

				<meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
