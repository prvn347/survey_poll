import { Auth } from "../components/Auth"

export const Signup = () => {
    return <div className="flex flex-col justify-center h-screen">
        <div className=" flex justify-center">
            <div>
                <Auth type="signup" />
            </div>
           
        </div>
    </div>
}