import { Link } from "react-router-dom";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { SurveyLanding } from "../components/Survey";

export function SurveyPage(){

    return <div>
        <NavBarWrapper>
        <Link to={'/surveys'} className="border p-2 border-black text-md ">⬅</Link>
                <Link to={'/post'} className="border p-2 border-black  bg-yellow-500 text-md ">Post</Link>
        </NavBarWrapper>
        <div className="flex justify-center pt-6">
            <SurveyLanding/>
        </div>
    </div>
}