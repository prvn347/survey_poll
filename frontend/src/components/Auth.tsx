import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { backendUrlAtom, postInputAtom } from "../store/atoms"
import axios from "axios"
import Loading from "./Loading"
import { Spinner } from "./Spinner"

export function Auth({ type }: { type: "signup" | "signin" } ){
    const navigate = useNavigate()
    const [loading,isloading]= useState(false)

   {type === "signup"? Loading("/surveys","/signup"):Loading("/surveys","/signin")}
    const [postInput,setPostInput] = useRecoilState(postInputAtom)
    const backendUrl = useRecoilValue(backendUrlAtom)
    async function handleInput(){try {
        isloading(true)
        await   axios.post(`${backendUrl}/user/${type==="signup"?"signup":"signin"}`,postInput,{
            withCredentials: true
        })
        isloading(false)
        navigate('/surveys')
    } catch (error) {
        alert(error)
    }
}
if(loading){
    return <div className="flex flex-col h-screen justify-center bg-white dark:bg-darkie">
      <div className="flex justify-center">
      <Spinner/></div>
      
      </div>
  }
     return <div>
        <div className=" ">
            <div><div className="text-center mb-16">
                <span className="text-2xl   font-medium font-mono ">{type==="signin"?"Hello,who's this?":"Welcome!"}</span>
                </div>
                <LabeledInput onchange={(e)=>{
                    setPostInput({...postInput,email:e.target.value})

                }} label="Email" placeholder="prvn@gmail.com" type="email"/>
                <LabeledInput onchange={(e)=>{
                    setPostInput({...postInput,password:e.target.value})

                }} label="Password" type="password" placeholder="password"/>
                {type === "signup" ? <LabeledInput onchange={(e)=>{
                                        setPostInput({...postInput,name:e.target.value})


                }}  label="Name" placeholder="pravin" type="text"/>:null}
                <button onClick={handleInput} type="button" className="mt-8 w-full text-white  bg-black dark:bg-btncolor hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                <div>
                <span className="text-md   font-medium ">{type==="signin"?"Don't have an account yet?":"Already have an account?"}</span>
                <Link className="px-2 py-1 mx-2 border-black text-sm  dark:border-white hover:text-btncolor hover:border-btncolor underline  " to={ type === "signin" ? "/signup":"/signin"}>{ type === "signin" ? "Sign up":"Log in"}</Link>
                </div>
            </div>

        </div>
     </div>

}

interface post{
    placeholder:string,
    type:string,
    label:string,
    onchange :(e: ChangeEvent<HTMLInputElement>) => void
}
export function LabeledInput({label,type,placeholder,onchange}:post){
    return <div className="flex flex-col ">
        <label className=" pt-2text-md font-medium pb-3  text-black  dark:text-white " htmlFor="input">{label} </label>
        <input onChange={onchange} className="px-2 font-medium py-2 placeholder:text-sm placeholder:font-medium rounded-sm dark:text-stone-50 dark:bg-darkie text-black border shadow-[3px_3px_rgba(0,_98,_90,_0.4),_6px_6px_rgba(0,_98,_90,_0.3)] outline-none border-black w-72 focus:shadow-purple-700" id="input" type={type} placeholder= {placeholder} required />
    </div>
}
