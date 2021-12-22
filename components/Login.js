import Image from "next/image"
import {useMoralis} from 'react-moralis'

function Login() {
   const {authenticate} = useMoralis()

    return (
        <div className="bg-black relative ">
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
                <Image src="https://links.papareact.com/3pi" width={100} height={100} className="object-cover rounded-full"/>
                <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse" onClick={authenticate}>Login to Metaverse</button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" 
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
