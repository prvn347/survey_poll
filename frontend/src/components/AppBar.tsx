import { Link } from "react-router-dom";
import { NavBarWrapper } from "./NavbarWrapper";

export function AppBar(){

    return <div>
        <NavBarWrapper>
            <Link className="font-bold text-xl font-mono" to={'/'}>Survey</Link>
            <div>
                <Link to={'/signin'} className="border p-2 border-black text-md ">Log in</Link>
                <Link to={'/signup'} className="border p-2 border-black bg-purple-500 text-md ">Sign up</Link>
                <Link to={'/surveys'} className="border p-2 border-black text-md ">Surveys</Link>

            </div>
        </NavBarWrapper>
    </div>
}