import React, { useRef, useState } from 'react'
import {gsap} from "gsap"
import { MdSend } from "react-icons/md";
import { userchart } from './Chart';
import  {io} from "socket.io-client";
export const Footer = () => {
   const [Message, setMessage] = useState("")
   const input = useRef(null);
   const inputbutton = useRef(null);
   const socket=io("http://localhost:5000");
 const handelsubmit= async (e) => {
    e.preventDefault();
    if(!Message) return;
     socket.emit("savemessage",{
      userid:"",
      receiverid:"",
      message:Message,
     })
    
     setMessage("")
  }
const animation=(e) => {
    e.preventDefault();
    gsap.to(input.current, 
        { x:0,
        opacity:1,
        duration:0.5,
        })
    gsap.to(inputbutton.current, 
        { rotate:0,
            duration:0.5,
            },)
  }
  return (
    <div className='fixed bottom-0  w-full p-2 flex items-center gap-2'>
        <input type="text" className='border border-black outline-none p-2 pl-4  text-xl text-wrap w-80  overflow-hidden rounded-full  transform translate-x-[350px] opacity-0' ref={input} onChange={(e)=>setMessage(e.target.value)} value={Message} placeholder='Enter Text Here...'/>
        <button className='bg-green-600  rounded-full w-12 h-12 uppercase text-white items-center flex justify-center text-2xl transform rotate-[180deg]' onClick={handelsubmit} onMouseEnter={animation} ref={inputbutton}><MdSend/></button>
    </div>
  )
}
