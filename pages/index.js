import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { FacebookShareButton, TwitterShareButton, LineShareButton } from 'react-share'
const IconStyleContianer = { padding: 0 }
const IconStyle = {}
export default function Home() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href)
  }, [url]);
  console.log(url)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App Naja</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={"P1 Description International Buffet at Furama Silom Hotel"} />
        <meta name="keywords" content={"test"} />
        <meta property="og:title" content={"P1 International Buffet at Furama Silom Hotel"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://test-meta-demo.herokuapp.com/"} />
        <meta property="og:image" content={"https://d31ivuq27aprwe.cloudfront.net/media/campaign-details/70/700020201001T15480615903.jpg"} />

        <meta property="og:image" content={"https://d31ivuq27aprwe.cloudfront.net/media/campaign-details/70/700020201001T15480615903.jpg"} />
        <meta property="og:description" content={"P1 International Buffet at Furama Silom Hotel"} />

        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className={styles.main}>
        <div>
          version 1.01.15
          <div style={IconStyleContianer}>
            <FacebookShareButton
              url={url}
              style={IconStyle}
            >
              <img src="/static/images/share/icon-facebook.svg" />
            </FacebookShareButton>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
