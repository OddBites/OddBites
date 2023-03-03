import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import App from './_app'
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}


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
      <button onClick={myFunction}>Switch Modes</button>
          <p>
            Hello Everyone!
          </p>
          </div>
    </main>
    </>
  )
}