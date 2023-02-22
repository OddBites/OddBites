import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import App from './_app'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>OddBites</title>
        <meta name="description" content="OddBites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.description}>
          <p>
            Hello World!
          </p>
          </div>
    </main>
    </>
  )
}

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.title}>ODD BITES</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className={styles.settings}>
        <i className="fa fa-cog"></i>
      </div>
    </div>
  );
}
