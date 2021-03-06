import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content="Alice Russell's projects page" />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Link href='cat'>Cat</Link>
  </div>
  )
}

export default Home
