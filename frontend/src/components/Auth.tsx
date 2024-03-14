import { Link } from "react-router-dom"

export function Auth({ type }: { type: "signup" | "signin" } ){

    async function sendRequest() {
        


    }

     return <div>
        <div>
            <div><div className="text-center mb-16">
                <span className="text-2xl   font-medium font-mono ">{type==="signin"?"Hello,who's this?":"Welcome!"}</span>
                </div>
                <LabeledInput label="Email" placeholder="prvn@gmail.com" type="email"/>
                <LabeledInput label="Password" type="password" placeholder="password"/>
                {type === "signup" ? <LabeledInput label="Name" placeholder="pravin" type="text"/>:null}
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                <div>
                <span className="text-md   font-medium ">{type==="signin"?"Don't have an account yet?":"Already have an account?"}</span>
                <Link className="px-2 py-1 mx-2 border-black text-sm border " to={ type === "signin" ? "/signup":"/signin"}>{ type === "signin" ? "Sign up":"Log in"}</Link>
                </div>
            </div>

        </div>
     </div>

}

interface post{
    placeholder:string,
    type:string,
    label:string
}
export function LabeledInput({label,type,placeholder}:post){
    return <div className="flex flex-col">
        <label className=" pt-2text-md font-medium pb-3 text-black " htmlFor="input">{label} </label>
        <input className="px-2 font-medium py-2 placeholder:text-sm placeholder:font-medium rounded-sm  text-black border shadow-[3px_3px_rgba(0,_98,_90,_0.4),_6px_6px_rgba(0,_98,_90,_0.3)] outline-none border-black w-72 focus:shadow-purple-700" id="input" type={type} placeholder= {placeholder} required />
    </div>
}
