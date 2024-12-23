import React, { useEffect, useRef } from 'react';

 export const userchart = [
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow mmmmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkkkkkk"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi"
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "hellow"
  },
  {
    sender: "Pabitra",
    reciver: "Arpita",
    message: "hi pabi hw are you "
  },
  {
    sender: "Arpita",
    reciver: "Pabitra",
    message: "i am good and you"
  },
];

export const Chart = () => {
    const lstmessage=useRef(null);
    useEffect(()=>{
       if(lstmessage.current){
        lstmessage.current.scrollIntoView({behavior:"smooth"})
       }
    },[])
  return (
    <div className="relative p-4 text-2xl h-[85vh] bg-white overflow-y-auto ">
      {userchart.map((c, index) => {
        return (
          <div key={index} className={`text-white w-full mb-4 flex ${c.sender=='Pabitra'?"justify-start ":"justify-end"}`}>
            <p className={`break-words whitespace-normal max-w-xs min-w-16   p-2 rounded-2xl ${c.sender=='Pabitra'?"bg-gray-700":"bg-green-800"} text-lg`}>
              {c.message}
            </p>
          </div>
        );
      })}
      <div ref={lstmessage}></div>
    </div>
  );
};
