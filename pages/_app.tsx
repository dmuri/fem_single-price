import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Karla} from 'next/font/google'

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${karla.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
