import { Children, useEffect } from "react";
import { useRecoilState } from "recoil";
import { stickyAtom } from "../store/atoms";

export function NavBarWrapper({children}:any){
// const [sticky,setSticky] = useRecoilState(stickyAtom)
    // useEffect(
    //     ()=>{
    //         const handleScroll = ()=>{
    //             if(window.scrollY > 0){
    //                 setSticky(true)

    //             }else{
    //                 setSticky(false);
    //             }

    //      }
    //             window.addEventListener("scroll",handleScroll)
    //             return () =>{
    //             window.removeEventListener('scroll',handleScroll)
    //             }
    //     },[setSticky]
    // )
    
    return (
        <div className="wrapper   top-0 border-b flex justify-between px-10 py-4 bg-white/80
        backdrop-blur-md shadow-md w-full
        fixed top-0 left-0 right-0 z-10">
          {children}
        </div>
      );
}