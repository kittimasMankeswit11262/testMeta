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
				<meta property="og:image" content={"https://d31ivuq27aprwe.cloudfront.net/media/campaign-details/73/730020201002T15445852065.jpg"} />

				<meta property="og:image" content={"https://d31ivuq27aprwe.cloudfront.net/media/campaign-details/73/730020201002T15445852065.jpg"} />
				<meta property="og:description" content={"International Buffet at Furama Silom Hotel"} />

				<meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
