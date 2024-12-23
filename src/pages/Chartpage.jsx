import React, { useEffect, useRef ,useState} from 'react'
import { Header } from '../components/Header'
import { BiSearch } from 'react-icons/bi';
import gsap from 'gsap';
import {io} from "socket.io-client";
import {Link} from "react-router-dom"
export const Chartpage = () => {
  const [chart,setchart]=useState([]);
    const [searchvalue, setsearchvalue] = useState("");
    const [doanimation,setdoanimation]=useState(true);
    const inputbutton=useRef(null)
    const animation=(e)=>{
        
          e.preventDefault();
          if (doanimation){
            gsap.to(inputbutton.current,{
              width:"30vh",
              opacity:1,
              duration:0.5
          })
          setdoanimation(false)
          }else{
            socket.emit("finduser",{searchvalue})
            socket.on("user",(data)=>{
              setchart(data)
            })
            gsap.to(inputbutton.current,{
              width:"0px",
              opacity:0,
              duration:.5
          })
          setdoanimation(true);
          }
      
    }
  //   const closeanimation=(e)=>{
  //       e.preventDefault();
  //       if(searchvalue){
        
  //     }
  //       setdoanimation(false);
     
  // }
  const setvalueforsearch=(e)=>{
    
    setsearchvalue(e.target.value)
  }
 
    // const chatData = [
    //     { name: "Pabitra", time: "10:00 AM", unreadMessageCount: 2, message: "Hey, how are you doing today?" },
    //     { name: "subham", time: "10:15 AM", unreadMessageCount: 5, message: "Don't forget our meeting at 3 PM." },
    //     { name: "khusi", time: "10:30 AM", unreadMessageCount: 0, message: "Can you check the files I sent?" },
    //     { name: "Ravi", time: "10:45 AM", unreadMessageCount: 1, message: "Let’s catch up this weekend!" },
    //     { name: "Kavita", time: "11:00 AM", unreadMessageCount: 3, message: "Here's the report you requested." },
    //     { name: "Vivek", time: "11:15 AM", unreadMessageCount: 0, message: "Thanks for the update!" },
    //     { name: "Priya", time: "11:30 AM", unreadMessageCount: 4, message: "Can we reschedule the call?" },
    //     { name: "Rahul", time: "11:45 AM", unreadMessageCount: 2, message: "Please review the attached document." },
    //     { name: "Sneha", time: "12:00 PM", unreadMessageCount: 0, message: "Great work on the project!" },
    //     { name: "Amit", time: "12:15 PM", unreadMessageCount: 1, message: "Let’s finalize the design by EOD." },
    //     { name: "Nisha", time: "12:30 PM", unreadMessageCount: 6, message: "Can you share the link again?" },
    //     { name: "Abhishek", time: "12:45 PM", unreadMessageCount: 0, message: "Looking forward to the presentation!" },
    //     { name: "Rajesh", time: "1:00 PM", unreadMessageCount: 2, message: "Do you have any updates on the task?" },
    //     { name: "Megha", time: "1:15 PM", unreadMessageCount: 1, message: "I’ll call you in 10 minutes." },
    //     { name: "Arjun", time: "1:30 PM", unreadMessageCount: 0, message: "Thanks for your help earlier!" },
    //     { name: "Pooja", time: "1:45 PM", unreadMessageCount: 3, message: "Can you send me the meeting link?" },
    //     { name: "Deepak", time: "2:00 PM", unreadMessageCount: 0, message: "The deadline has been extended." },
    //     { name: "Monika", time: "2:15 PM", unreadMessageCount: 5, message: "Let’s discuss the strategy tomorrow." },
    //     { name: "Karan", time: "2:30 PM", unreadMessageCount: 1, message: "The client has approved the changes." },
    //     { name: "Swati", time: "2:45 PM", unreadMessageCount: 0, message: "Do you need help with anything?" },
    //   ];
      // const newdata=chatData.filter((item)=>item.name.toLowerCase().includes(searchvalue.toLowerCase()));
     
      const socket=io("http://localhost:5000")
    useEffect(()=>{
      function fetch(){
        socket.emit("getallusermessage",{userid:"661f1a1a2b1e1d2e1c1f1a01"})
      
        socket.on("charts",(data)=>{
          setchart(data);
        });
  
      }
      fetch();
      
      //  socket.disconnect();
      
    },[])

  return (
    <>
      <div className=' w-full sticky top-0 z-10'> <Header></Header></div>
      <div className='overflow-y-scroll h-[91vh]'>{console.log(chart)}
     {chart.map((c)=>(<>
     
        <Link to={`/chart/${c._id}`} className='bg-white  flex  items-center p-4 justify-between '>
      <img 
      className='h-[6vh] w-[6vh] justify-start rounded-full object-cover bg-green-400 border-2 border-green-600'
      src='data:image/jpeg;base64,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'
      />
      <div>
         <p className='uppercase text-xl font-bold ml-4 '>
         {c.name}<br/>
          <p className='text-sm font-medium capitalize mt-2 text-gray-600 truncate w-56'>{c.latestmessage}</p> 
         </p>
      </div>
      <div className="ml-2 lowercase text-sm opacity-70 max-w-20 ">
         <span>{0||new Date(c.time).toLocaleTimeString("en-us",{hour:'numeric',minute:'numeric',hour12:true,})}</span><br />
         <p className="ml-4 mt-2 bg-green-600 text-white text-sm font-bold rounded-full w-fit px-2.5 py-1 max-w-14 truncate">
         {c.unreadmessage}
       </p>
      </div>
     
   </Link>
     <hr />
     </>))}
     
     </div>
     <div className='right-1 bottom-0  rounded-full w-full  sticky  flex justify-center items-center text-2xl'>
        <button className='bottom-12 right-2 absolute w-14 h-14 bg-green-600 flex items-center justify-center rounded-full text-white font-extrabold' onClick={(e)=>(animation(e))}><BiSearch/></button>
        <input type="text" name="" id=""  className=' absolute bottom-14 right-20 w-0 border-2 p-2 pl-3 rounded-xl  opacity-0 outline-none  text-xl bg-blue-50 border-green-600'ref={inputbutton} onChange={setvalueforsearch} placeholder='Search..'/>
     </div>
    </>
  )
}
 