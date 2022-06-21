import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navBar'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { Router } from 'next/router'


function MyApp({ Component, pageProps, }: AppProps) {
  return <>
  <ThemeProvider attribute='class'>

    <NavBar/>
      <AnimatePresence exitBeforeEnter >
        <Component {...pageProps}/> 

      </AnimatePresence>
    

  </ThemeProvider>
  
  </>

    

    
}

export default MyApp
