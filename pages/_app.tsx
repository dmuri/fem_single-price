import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Karla} from 'next/font/google'
import Head from 'next/head'


const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
    <Head>
      <title>Frontend Mentor Challenge</title>
    </Head>
    <main className={`${karla.variable}`}>
      <Component {...pageProps} />
    </main>
  </>
  )
}
