import Head from "next/head";
import Image from "next/image";

const Main = () => {
    return(
        <div className="flex flex-col min-h-screen justify-items-start p-7 md:p-0">
            <h1 className=" flex flex-col p-4 bg-zinc-600 rounded-xl mb-5 md:mb-0 text-center mt-10">Hello, I'm an indie app developer based in México.</h1>
                <section className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className=" flex flex-col">
                        <h1 className="text-2xl font-semibold">Jorge Delgadillo</h1>
                        <h2 className="">Digital Craftsman ( Artist / Developer / Designer )</h2>

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
                            <h1 className="underline-offset-4 underline font-semibold decoration-2 mb-2">Work</h1>
                            <p className="text-justify">Jorge is a freelance and a full-stack developer based in Mexico City with a passion for building digital services/stuff he wants.
                                He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. 
                                When he is not online, he loves writing music.
                                </p>
        </div>
    )
}

export default Main