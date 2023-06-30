import Header from '@/components/header/Header'
import ThemeProvider from '@/hooks/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      {/* <Home {...pageProps} /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
