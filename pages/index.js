import Head from 'next/head'
import React ,{useEffect , useState} from 'react'
import styles from '../styles/Home.module.css'
import { FacebookShareButton, TwitterShareButton, LineShareButton } from 'react-share'
const IconStyleContianer = { padding: 0 }
const IconStyle = {}
export default function Home() {
  const [url, setUrl] = useState("");
  useEffect(() => {
     setUrl(window.location.href) 
  }, [url]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          sssss
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
