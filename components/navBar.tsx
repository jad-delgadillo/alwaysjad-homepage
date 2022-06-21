import Link from "next/link"
import Image from "next/image"
import { HamburgerIcon } from "@chakra-ui/icons"
import { useTheme } from "next-themes"

const NavBar = () => {
    const {theme, setTheme} = useTheme()
    return(
        

            <div className="flex-shrink-0 justify-center items-center fixed z-10 opacity-90 ">

  

                <nav className="block flex-row  justify-between w-screen items-center bg-zinc-900 dark:bg-orange-50/[.70] dark:text-neutral-700 text-slate-300 py-4  ">
                    <div className=" flex flex-row justify-between items-center m-auto max-w-2xl">

                        <div className="flex flex-row">
                            <Link href={"/"}>
                                <a>
                                    <h1 className="font-bold italic text-white dark:text-black rounded-full transition-all hover:scale-[105%] md:px-2 ml-4 md:ml-0 px-2 mr-5">
                                        Alwaysjad
                                    </h1>

                                </a>
                            
                            </Link>
                            
                            <Link href="/works" >
                                <a className=" underline-offset-4  decoration-2 hover:text-white dark:hover:text-black decoration-teal-300 hover:underline transition-all md:px-2 pl-7 sm:block hidden">
                                    Works
                                </a>
                            </Link>

                            <Link href="/posts">
                                <a className=" underline-offset-4 mx-4 decoration-2  hover:text-white dark:hover:text-black decoration-teal-300 hover:underline transition-all md:px-2 pl-7 sm:block hidden">
                                    Posts
                                </a>
                            </Link>
                            
                            
                                
                            
                            <a className=" underline-offset-4 decoration-2  hover:text-white dark:hover:text-black decoration-teal-300 hover:underline transition-all md:px-2 pl-7 sm:block hidden cursor-pointer">
                                Source
                            </a>

                        </div>
                            <button
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className="flex font-semibold italic p-1 rounded-lg items-center justify-center hover:ring-1 bg-orange-50 dark:bg-indigo-400 hover:bg-orange-50 hover:scale-[103%] transition-all md:mr-0 mr-5">
                                <div className="block w-[25px] h-[25px] p-[10%] transition-all">

                                    <Image
                                    src={"/assets/light.png"}
                                    alt=""
                                    width={20}
                                    height={20}
                                    layout="responsive"
                                    className="rounded-xl dark:invert"
                                    />
                                </div>
                                {theme === 'light' ? '' : ''}
                            </button>
                    </div>

                </nav>
            </div>

              
            

        
    )
}

export default NavBar