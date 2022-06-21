import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import NavBar from '../components/navBar'
import { useTheme } from "next-themes"
import { motion } from "framer-motion"


const Home: NextPage = () => {
  const {theme, setTheme} = useTheme() 
  return (
   

      <div className='flex-col min-h-screen items-center justify-center text-white bg-zinc-900 dark:bg-orange-100/[.92] dark:text-neutral-900 m-auto'>
        <div className='flex-col m-auto justify-center items-center max-w-xl'>


          <Main/>



        </div>

      </div>

  )
}

export default Home
