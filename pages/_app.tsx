import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navBar'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps, }: AppProps) {
  return <>
  <ThemeProvider attribute='class'>

    <NavBar/>
  
    <Component {...pageProps}> 
    </Component>
    

  </ThemeProvider>
  
  </>

    

    
}

export default MyApp
