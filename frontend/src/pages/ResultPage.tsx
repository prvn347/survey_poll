import { Link } from "react-router-dom";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { Result } from "../components/Result";

export function ResultPage() {
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
        <Result />
      </div>
    </div>
  );
}
