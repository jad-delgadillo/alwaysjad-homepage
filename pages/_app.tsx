import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps, }: AppProps) {
  return (
    <Component {...pageProps}>

        <NavBar/>

      </Component>

    ) 

    
}

export default MyApp
