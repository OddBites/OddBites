import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import App from './_app'
import Link from 'next/link';
import { useRouter } from 'next/router';

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
            Hello Everyone!
          </p>
          </div>
    </main>
    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJgOybNOb9-nAD3Rxb2avRCktO6nymPU&callback=initMap"></script>

    </>
  )
}