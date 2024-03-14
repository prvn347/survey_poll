import { AppBar } from "../components/AppBar"
import { Auth } from "../components/Auth"

export const Signin = () => {
    return <div>
        <AppBar/>
        <div className="flex flex-col justify-center h-screen">
        
           
        <div className=" flex justify-center">
            <div>
                <Auth type="signin" />
            </div>
           
        </div>
    </div></div>
}