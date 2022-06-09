

const NavBar = () => {
    return(
        <nav className=" flex flex-col items-center bg-zinc-900 rounded-b-md pb-0 md:pb-7">

            

                <div className="flex flex-row w-screen max-w-2xl justify-between items-center fixed bg-zinc-900 py-4 opacity-90">
                    <div className="flex flex-row">
                        <h1 className="font-bold italic hover:ring-2 ring-teal-300 rounded-full transition-all md:px-2 pl-7 mr-5 cursor-default">
                            Alwaysjad
                        </h1>
                        <h1 className=" underline-offset-4 decoration-2 hover:font-semibold hover:underline transition-all md:px-2 pl-7 cursor-pointer">
                            Work
                        </h1>
                        <h1 className=" underline-offset-4 mx-4 decoration-2 hover:font-semibold hover:underline transition-all md:px-2 pl-7 cursor-pointer">
                            Posts
                        </h1>
                        <h1 className=" underline-offset-4 decoration-2 hover:font-semibold hover:underline transition-all md:px-2 pl-7 cursor-pointer">
                            Source
                        </h1>

                    </div>
                    <p className=" font-semibold italic md:px-2 pr-7 cursor-default">
                        Info
                    </p>

                </div>

            

        </nav>
    )
}

export default NavBar