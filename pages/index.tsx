import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import NavBar from '../components/navBar'

const Home: NextPage = () => {
  return (
    <div className='flex-col min-h-screen items-center justify-center text-white bg-zinc-900 m-auto'>
      <div className='flex-col m-auto justify-center items-center max-w-xl'>

        <NavBar/>
        <Main/>

      </div>



      

    </div>
  )
}

export default Home
