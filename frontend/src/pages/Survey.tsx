import { Link, useParams, useSearchParams } from "react-router-dom";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { SurveyLanding } from "../components/Survey";
import Loading from "../components/Loading";

export function SurveyPage(){
    const {id} = useParams()
Loading(`/survey/${id}`,"/signin")
    return <div>
        <NavBarWrapper>
        <Link to={'/surveys'} className="border p-2 border-black text-md ">⬅</Link>
                <Link to={'/post'} className="border p-2 border-black  bg-yellow-500 text-md ">Post</Link>
        </NavBarWrapper>
        <div className="flex justify-center pt-6 mt-14">
            <SurveyLanding/>
        </div>
    </div>
}