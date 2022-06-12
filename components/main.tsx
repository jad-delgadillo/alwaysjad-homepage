import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
    return(
        <div className="flex flex-col min-h-screen justify-items-start p-7 md:p-0">
            <h1 className=" flex flex-col p-4 bg-zinc-600 rounded-xl mb-5 md:mb-0 text-center mt-10">Hello, I'm an indie app developer based in México.</h1>
                <section className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className=" flex flex-col">
                        <h1 className="text-2xl font-semibold">Jorge Delgadillo</h1>
                        <h2 className="font-extralight">Digital Craftsman ( Artist / Developer / Designer )</h2>

                    </div>
                        <div className="flex flex-col items-center md:mb-5">
                            <div className="border-white border-2 rounded-full items-center justify-center mt-5 w-[100px] h-[100px] inline-block sticky">

                                <Image
                                src="/assets/profile-2.jpeg"
                                alt="profile picture"
                                width={100}
                                height={100}
                                layout="fill"

                                className="rounded-full inline-block sticky"
                                
                                />
                            </div>


                        </div>

                </section>
                            <h1 className="text-md underline-offset-4 underline font-semibold decoration-2 mb-2">Work</h1>
                            <p className="text-justify font-extralight">Jorge is a freelance and a full-stack developer based in Mexico City with a passion for building digital services/stuff he wants.
                                He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. 
                                When he is not online, he loves writing music.
                            </p>

                                <div className="flex flex-col items-center justify-center">
                                    <button className=" flex flex-col items-center justify-center w-32 m-5 p-2 rounded-xl bg-cyan-500 hover:ring-1 ring-white transition-all text-neutral-100 hover:text-neutral-100 hover:scale-[105%]">
                                        <Link href={"/portfolio"}>
                                            <a><h1 className="font-bold">My portfolio</h1></a>
                                        
                                        </Link>
                                    </button>

                                </div>

                            <h1 className=" text-md underline-offset-4 underline font-semibold decoration-2 mb-2">Bio</h1>
                            
                            <div className="flex flex-row text-justify font-extralight">
                                <h2 className="mr-4 font-bold">1996</h2>
                                <p>Born in Guadalajara, México.</p>
                            </div>
                            <div className="flex flex-row text-justify font-extralight">
                                <h2 className="mr-4 font-bold">2014</h2>
                                <p>Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology.</p>
                            </div>
                            <div className="flex flex-row text-justify font-extralight">
                                <h2 className="mr-4 font-bold">2015</h2>
                                <p>Worked at Google México</p>
                            </div>
                            <div className="flex flex-row text-justify font-extralight">
                                <h2 className="mr-4 font-bold">2018 to present</h2>
                                <p>Working as a freelancer.</p>
                            </div>
                            <div className="p-4"></div>
                            <h1 className=" text-md underline-offset-4 underline font-semibold decoration-2 mb-2">I ❤️</h1>
                            <p className="text-justify font-extralight">Art, Music, Drawing, Playing Guitar, Photography, Leica, Machine Learning.</p>

                            <div className="p-4"></div>
                                <h1 className=" text-md underline-offset-4 underline font-semibold decoration-2 mb-2">On the web</h1>
                                    <div className="flex flex-col font-medium justify-center items-start">
                                        <button className=" flex justify-between border text-cyan-300 hover:bg-cyan-800 px-2 rounded-lg">
                                            <div className="flex items-center justify-center w-[15px] mr-3">
                                                <Image
                                                src={"/assets/github.png"}
                                                alt="logo"
                                                height={15}
                                                width={15}
                                                layout="intrinsic"
                                                className="invert"
                                                />

                                            </div>
                                            @jad-delgadillo
                                        </button>
                                        <button className="text-justify text-cyan-300 hover:bg-cyan-800 p-1 px-2 rounded-lg">@alwaysjad</button>
                                        <button className="text-justify text-cyan-300 hover:bg-cyan-800 p-1 px-2 rounded-lg">@alwaysjad</button>

                                    </div>
        </div>
    )
}

export default Main