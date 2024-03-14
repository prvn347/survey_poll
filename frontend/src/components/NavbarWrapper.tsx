import { Children, useEffect } from "react";
import { useRecoilState } from "recoil";
import { stickyAtom } from "../store/atoms";

export function NavBarWrapper({children}:any){
const [sticky,setSticky] = useRecoilState(stickyAtom)
    useEffect(
        ()=>{
            const handleScroll = ()=>{
                if(window.scrollY > 0){
                    setSticky(true)

                }else{
                    setSticky(false);
                }

         }
                window.addEventListener("scroll",handleScroll)
                return () =>{
                window.removeEventListener('scroll',handleScroll)
                }
        },[setSticky]
    )
    
    return (
        <div className="wrapper border-b flex justify-between px-10 py-4 ">
          {children}
        </div>
      );
}