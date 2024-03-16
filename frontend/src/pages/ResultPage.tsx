import { Link, useParams } from "react-router-dom";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { Result } from "../components/Result";

export function ResultPage(){
    const {id} = useParams()

    return <div>
        <NavBarWrapper>
        <Link to={`/survey/${id}`} className="border p-2 border-black text-md ">⬅</Link>
                <Link to={'/post'} className="border p-2 border-black  bg-yellow-500 text-md ">Post</Link>
        </NavBarWrapper>
        <div className="flex justify-center pt-6">
        <Result/>
        </div>
    </div>
}