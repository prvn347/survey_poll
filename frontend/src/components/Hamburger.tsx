import axios from "axios";
import {  useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PopUpLogOut } from "./Popup";



export interface HamburgerProps {
    onClick: () => void;

    isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps ) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);
 
    const handleClick = () => {
        setIsOpen((prev: any) => !prev);
        onClick(  );
    };

    return (<div className="">
        <button
            onClick={handleClick}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer visible sm:invisible `}
        >
            <div
                className={`bg-black dark:bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
            />
            <div
                className={`bg-black dark:bg-white block block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0'
                }`}
            />
            <div
                className={`bg-black dark:bg-white block block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-[-45deg]' : 'rotate-0'
                }`}
            />
            
        </button>
        {isOpen && <SideBar setIsOpen={setIsOpen} />}</div>
    );
}

export function SideBar({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }){
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [name,setName] = useState("")
    const [ auth,setAuth] = useState(false)

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          // Make a request to your backend to check for the presence of the HTTP-only cookie
         await axios.get("https://survey-poll-backend.onrender.com/check-auth",{
              withCredentials:true
          });
          // If the cookie exists, redirect to the feed page
          setAuth(true)
        } catch (error) {
          // If the cookie doesn't exist, redirect to the signin page
     setAuth(false)
        }
      };
  
      checkAuthentication();
    }, []);
    useEffect(()=>{
      axios.get('https://survey-poll-backend.onrender.com/api/v1/me',{withCredentials:true})
      .then((res)=>{
        setName(res.data.name)
        
  
      })
    },[])
    console.log(name)
 
 const [iso, setISO] = useState(false);
 const hancleOnclick = ()=>{
   setISO(!iso);


}
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsOpen]);

    return  <div ref={sidebarRef}
    className={`fixed font-bricolage left-0 h-screen top-0 w-64 bg-lightie dark:bg-darkie text-black dark:text-white p-4 transition-all ease-in-out duration-300  `}
  >

<div className="flex flex-col gap-2 border-b-2 ">
{auth?<><div className="w-16 h-16 rounded-full bg-black dark:bg-btncolor flex items-center justify-center ">
          <span className="text-xl font-semibold text-white">{name[0]}</span>
        </div>
        <span className=" px-1 py-3 text-lg font-bricolage">Hi,{name}</span>
</>:<span className="text-xl font-bricolage font-semibold text-btncolor">Please Signup</span>}
</div>
<div className=" pt-4">
    <ul className="flex flex-col">
    {iso && ( <PopUpLogOut action="Logout" description="Are you sure you want to logout?" toggleModal={hancleOnclick}/>)}

      {auth? <><Link to={'/post'} className="py-2 text-xl font-semibold font-bricolage  hover:text-btncolor"> Create Survey</Link>
      <Link to={'/surveys'} className="py-2 text-xl font-semibold font-bricolage  hover:text-btncolor"> Surveys</Link>
      <Link to={''} onClick= {hancleOnclick} className="py-2 text-xl font-semibold font-bricolage  hover:text-btncolor"> log out</Link></>
      : <><Link to={'/signup'}  className="py-2 text-xl font-semibold font-bricolage  hover:text-btncolor"> Sign up</Link><Link to={'/signin'} className="py-2 text-xl font-semibold font-bricolage  hover:text-btncolor"> Login</Link></> }
      

    </ul>

   </div>
  </div>
}