import Image from "next/image"
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import ChangeUserName from "./ChangeUserName"

function Header() {
    const {user} = useMoralis()
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-small border-b-2 border-pink-700  text-pink-500"> 
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid ">
                    <Image 
                        src="https://links.papareact.com/3pi" 
                        layout="fill" 
                        className="rounded-full" 
                        objectFit="cover"
                    />
                </div>
                <div className="text-left lg:text-center">
                    <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress={true}/>
                    </div>
                    <h1 className="text-3xl">Welcome to WEB 3.0 Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.get("username")}</h2>
                    <ChangeUserName />
                </div>
            </div>
        </div>
    )
}

export default Header
