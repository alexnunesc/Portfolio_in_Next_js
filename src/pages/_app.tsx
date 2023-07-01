import Example from '@/components/menu/Menu'
import Projetos from '@/components/projects/Projetos'
import ThemeProvider from '@/hooks/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* <Header /> */}
      <Example />
      <Component {...pageProps} />
      <Projetos />
    </ThemeProvider>
  )
}
