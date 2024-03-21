import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { QuestionAndAnswer } from "../components/QuestionandOption";

export function PostSurvey() {
  Loading("/post", "/signin");
  return (
    <div className=" bg-lightie   min-h-screen    dark:bg-darkie dark:text-white">
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
      <div className=" flex justify-center pt-5 mt-16">
        <div>
          <div>
            <h1 className="text-3xl font-bold">Create your survey</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your question and options below.
            </p>
          </div>
          <QuestionAndAnswer />
        </div>
      </div>
    </div>
  );
}
