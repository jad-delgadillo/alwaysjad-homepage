

const NavBar = () => {
    return(
        <nav className=" flex flex-col items-center bg-zinc-900 rounded-b-md pb-0 md:pb-7">

            

                <div className="flex flex-row w-screen max-w-2xl justify-between items-center fixed bg-zinc-900 py-4 opacity-90">
                    <p className="font-semibold italic hover:tracking-wider transition-all md:px-2 pl-7 cursor-default">
                        Alwaysjad
                    </p>
                    <p className=" font-semibold italic md:px-2 pr-7 cursor-default">
                        Info
                    </p>

                </div>

            

        </nav>
    )
}

export default NavBar