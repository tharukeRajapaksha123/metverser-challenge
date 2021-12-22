import { useState } from "react"
import { useMoralis } from "react-moralis"


function SendMessage({endOfMessagesRef}) {
    const [message,setMessage] = useState("")
    const {Moralis,user} =  useMoralis()
    const sendMessage = (e)=>{
        e.preventDefault()
        if(!message) return

        const Messages = Moralis.Object.extend('Messages') // create a tabe named messages
        const messages = new Messages()
        messages.save({
            message : message,
            username : user.get("username"),
            ethAddress : user.get('ethAddress')
        }).then((message)=>{

        }).catch(err=>{
            console.log(err)
        })

        endOfMessagesRef.current.scrollIntoView({behavior : "smooth"})

        setMessage("")
    }
    return (
        <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
            <input 
                type="text" 
                className="flex-grow outline-none bg-transparent text-white placeholder-grey-500 pr-5"
                placeholder="Enter a message"
                onChange={(e)=>{setMessage(e.target.value)}}
                value={message}
            />
            <button type="submit" onClick={sendMessage} className="font-bold text-pink-500">Send</button>
        </form>
    )
}

export default SendMessage
