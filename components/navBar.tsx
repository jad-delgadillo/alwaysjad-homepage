import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
    return(
        <nav className=" flex flex-col items-center bg-zinc-900 rounded-b-md pb-0 md:pb-7 relative z-10 ">

            

                <div className="flex flex-row w-screen max-w-2xl justify-between items-center fixed bg-zinc-900 py-4 opacity-90">
                    <div className="flex flex-row">
                        <h1 className="font-bold italic hover:ring-2 ring-teal-300 rounded-full transition-all hover:scale-[105%] md:px-2 ml-4 md:ml-0 px-2 mr-5 cursor-default">
                            Alwaysjad
                        </h1>
                        
                        <Link href="/works" >
                            <a className=" underline-offset-4 decoration-2 decoration-teal-300 hover:underline transition-all md:px-2 pl-7">
                                Works
                            </a>
                        </Link>

                        <Link href="/posts">
                            <a className=" underline-offset-4 mx-4 decoration-2 decoration-teal-300 hover:underline transition-all md:px-2 pl-7 cursor-pointer">
                                Posts
                            </a>
                        </Link>
                        
                        
                            
                        
                        <a className=" underline-offset-4 decoration-2 decoration-teal-300 hover:underline transition-all md:px-2 pl-7 cursor-pointer">
                            Source
                        </a>

                    </div>
                    <button className="block font-semibold italic p-1 rounded-lg items-center justify-center hover:ring-1 bg-yellow-200 hover:scale-[110%] transition-all md:mr-0 mr-5">
                        <div className="block w-[25px] h-[25px] hover:scale-[115%] transition-all">

                            <Image
                            src={"/assets/light.png"}
                            alt=""
                            width={50}
                            height={50}
                            layout="responsive"
                            className="rounded-xl "
                            />
                        </div>
                    </button>

                </div>

            

        </nav>
    )
}

export default NavBar