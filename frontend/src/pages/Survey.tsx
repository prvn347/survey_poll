import { Link, useParams } from "react-router-dom";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { SurveyLanding } from "../components/Survey";
import Loading from "../components/Loading";

export function SurveyPage() {
  const { id } = useParams();
  Loading(`/survey/${id}`, "/signin");

  return (
    <div className="bg-lightie dark:bg-darkie min-h-screen dark:text-white">
      <NavBarWrapper>
        <Link
          to={"/post"}
          className=" inline font-bricolage p-2  text-md  dark:text-white  hover:text-btncolor  dark:hover:text-btncolor   "
        >
          Create Survey
        </Link>
        <Link
          to={"/surveys"}
          className=" inline font-bricolage  p-2    dark:text-white  text-md hover:text-btncolor  dark:hover:text-btncolor  "
        >
          Surveys
        </Link>
      </NavBarWrapper>
      <div className="flex justify-center pt-6 mt-14">
        <SurveyLanding />
      </div>
    </div>
  );
}
