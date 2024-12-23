import gsap from 'gsap'
import React, { useEffect, useRef ,useState} from 'react'
import { MdSend } from 'react-icons/md'
import axios from "axios"
import { Link,useNavigate } from 'react-router-dom'
export const Login = () => {
    const circle1 = useRef(null)
    const circle2 = useRef(null)
    const circle3 = useRef(null)
    const circle4 = useRef(null)
    const sendbutton = useRef(null)
    const mobileInputRef = useRef(null)
    // const nameInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    // const [name, setname] = useState({value:'',visible:false})
    const [password, setpassword] = useState({value:'',visible:false})
    const [mobile, setmobile] = useState({value:'',visible:true})
const navigate=useNavigate();
    const apicall=async(e)=>{
        e.preventDefault();
        if (mobile.visible && mobile.value) {
            setmobile((prev) => ({ ...prev, visible: false }));
            // setname((prev) => ({ ...prev, visible: true }));
            setpassword((prev) => ({ ...prev, visible: true }));
        }else if (password.visible && password.value) {
            if(mobile.value.length!=10){
                alert("Enter valid mobile number");
                setmobile({visible:true});
                setpassword((prev) => ({ ...prev, visible: false }));
            }
            else if(password.value.length<=6){
                alert("password shoud be 7 or more charector");
            }
            else{
                try {
                    const response = await axios.post("http://localhost:5000/api/auth/login", {
                        mobile: mobile.value,
                        password: password.value,
                        
                      });
                     
                    if(response.status==200){
                        navigate("/home");
                    }
                } catch (error) {
                    alert(error?.response?.data?.message);
                    console.log(error);
                }
            }
            // Reset form
            setmobile({ value: "", visible: true });
            
            setpassword({ value: "", visible: false });
          } else {
            alert("Please fill out all fields!");
          }

    }
       useEffect(()=>{
        if(circle1.current){
            gsap.fromTo(circle1.current,{rotate:360},{
                rotate:0,
                duration:10,
                repeat:50,
                ease:"linear"
            })
            gsap.fromTo(circle2.current,{rotate:-360},{
                rotate:0,
                duration:8,
                repeat:50,
                ease:"linear",
                
            })
            gsap.fromTo(circle3.current,{rotate:360},{
                rotate:0,
                duration:8,
                repeat:50,
                ease:"linear"
            })
            gsap.fromTo(circle4.current,{rotate:-360},{
                rotate:0,
                duration:10,
                repeat:50,
                ease:"linear"
            })
           
        }
        
       },[])


       useEffect(() => {
        if (mobile.visible) {
          animateField(mobileInputRef,sendbutton);
        } else if (password.visible) {
          animateField(passwordInputRef,sendbutton);
        }
      }, [mobile.visible, name.visible, password.visible]);
    
      const animateField = (ref,bref) => {
        if (ref?.current) {
          gsap.fromTo(
            ref.current,
            { x: 300, opacity: 0 },
            { x: 0, opacity: 1, duration:1, ease: "linear" }
          );
          gsap.fromTo(
            bref.current,
            { x: -300, opacity: 0 },
            { x: 0, opacity: 1, duration:1, ease: "linear" }
          );
        }

      };
    
  return (
    <div className='w-full h-[100vh]  bg-gradient-to-t from-gray-900 via-gray-600 to-black flex justify-center items-center overflow-hidden fixed'>
        <div className='w-[30vh] h-[30vh] rounded-3xl bg-pink-500 absolute rotate-45' ref={circle1} ></div>
        <div className='w-[30vh] h-[30vh] rounded-3xl bg-teal-400 absolute rotate-90' ref={circle2} ></div>
        <div className='w-[30vh] h-[30vh] rounded-3xl bg-amber-400 absolute  rotate-180' ref={circle3} ></div>
        <div className='w-[30vh] h-[30vh] rounded-3xl bg-indigo-500 absolute rotate-180' ref={circle4} ></div> 
            <div className="bg-white w-72  h-72 flex flex-col items-center rounded-full  absolute " >
            <header className='uppercase text-2xl font-bold underline mt-6 text-blue'>login</header>
            <form action="" className=' mt-8 w-9/12'>

                {/* input mobile */}
                {(mobile.visible)&&<div className='flex-col flex mb-5'>
                    <label htmlFor="mobile" className=' mb-2 uppercase font-semibold opacity-70'>mobile-no</label>
                    <input type="number" className=' p-2 border border-green-400 rounded-md shadow-sm shadow-black outline-none pl-3 opacity-1 transform translate-x-[246px] ' name='mobile' ref={mobileInputRef} onChange={(e)=>setmobile((p)=>({...p,value:e.target.value}))} />
                </div>}
              {/* input name  */}
             {/* {(name.visible)&&<div className='flex-col flex mb-5'>
                    <label htmlFor="mobile" className='mb-2 uppercase font-semibold opacity-70'>name</label>
                    <input type="text" className=' p-2 border border-green-400 rounded-md shadow-sm shadow-black outline-none pl-3 opacity-1 transform translate-x-[246px]' name='name' ref={nameInputRef} onChange={(e)=>setname((p)=>({...p,value:e.target.value}))}/>
                </div>} */}
              {/* input password */}
             {(password.visible)&&<div className='flex-col flex mb-5'>
                    <label htmlFor="mobile" className='mb-2 uppercase font-semibold opacity-70'>password</label>
                    <input type="password" className=' p-2 border border-green-400 rounded-md shadow-sm shadow-black outline-none pl-3 opacity-1 transform translate-x-[246px]' name='password' ref={passwordInputRef} onChange={(e)=>setpassword((p)=>({...p,value:e.target.value}))}/>
                </div>}

            {<div className='flex justify-center items-center'> <button className='p-2 border-green-400 rounded-md shadow-sm shadow-black w-full  border bg-green-400 text-white  uppercase font-bold text-xl flex justify-center transform translate-x-[-240px]' ref={sendbutton} onClick={apicall}>{!password.visible==true?<MdSend/>:"submit"}</button></div>}
            <div className='flex justify-center'><Link to="/signup" className="uppercase text-center mt-4 block bg-indigo-600 p-2 text-white rounded-lg">signup</Link></div>
            </form>
        </div>
           
    </div>
  )
}