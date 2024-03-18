import { Link } from "react-router-dom";
import { NavBarWrapper } from "./NavbarWrapper";
import { Hamburger } from "./Hamburger";
import ThemeSwitcher from "./Switcher";

export function AppBar(){

    return <div>
        <NavBarWrapper>
            <Hamburger onClick={function (): void {
                throw new Error("Function not implemented.");
            } }/>
            <Link className="font-bold text-xl font-mono" to={'/'}>Survey</Link>
            <div>
                <Link to={'/signin'} className=" inline border p-2 border-black text-md ">Log in</Link>
                <Link to={'/signup'} className=" inline border p-2 border-black bg-purple-500 text-md ">Sign up</Link>
                <Link to={'/surveys'} className=" inline border p-2 border-black text-md ">Surveys</Link>
                <Link to={'/post'} className=" inline border p-2 border-black  bg-yellow-500 text-md ">Post</Link>
                <ThemeSwitcher/>

            </div>
        </NavBarWrapper>
    </div>
}