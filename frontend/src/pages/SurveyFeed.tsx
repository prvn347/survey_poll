import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { Card } from "../components/Card";
import { backendUrlAtom, surveysAtom } from "../store/atoms";
import Loading from "../components/Loading";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { Skelon } from "../components/Skeleton";
import { totalSurveysSelector } from "../store/selectors";
import { Pagination } from "../components/Pagination";
import { NavBarWrapper } from "../components/NavbarWrapper";
import { Link } from "react-router-dom";
import { PopUpLogOut } from "../components/Popup";

export default function SurveyFeed({}) {
  const [survey, setSurvey] = useRecoilState(surveysAtom);
  const totalSuveys = useRecoilValue(totalSurveysSelector);
  const [loading, isloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const backendUrl = useRecoilValue(backendUrlAtom);
  Loading("/surveys", "/signin");
  useEffect(() => {
    axios
      .get(backendUrl + "/survey", {
        withCredentials: true,
      })
      .then((res) => {
        setSurvey(res.data);
        isloading(false);
      });
  }, []);
  // @ts-ignore
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = survey.slice(indexOfFirstPost, indexOfLastPost);
  const handlePagination = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };
  const [isOpen, setIsOpen] = useState(false);
  const hancleOnclick = async () => {
    setIsOpen(!isOpen);
  };
  if (loading) {
    return (
      <div className=" font-bricolage">
        <NavBarWrapper>
          <Link
            to={"/post"}
            className=" inline font-bricolage p-2  text-md  dark:text-white  hover:text-btncolor  dark:hover:text-btncolor   "
          >
            Create Survey
          </Link>
          <Link
            to={"/surveys"}
            className=" inline font-bricolage  p-2   dark:text-white  text-md hover:text-btncolor  dark:hover:text-btncolor  "
          >
            Surveys
          </Link>
        </NavBarWrapper>
        <div className="flex flex-col min-h-screen py-4 space-y-4 md:py-10 md:space-y-8 mt-16 bg-lightie dark:bg-darkie dark:text-white">
          <div className="mx-4 space-y-2 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <div className="grid gap-2">
              <h1 className="font-bold text-2xl">Surveys</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Here are the latest surveys. Share your feedback!
              </p>
            </div>
            <Skelon />
            <Skelon />
            <Skelon />
            <Skelon />
            <Skelon />
            <Skelon />
          </div>
        </div>
      </div>
    );
  }
  return (
    <RecoilRoot>
      <div className=" font-bricolage">
        <NavBarWrapper>
          <Link
            to={"/post"}
            className=" inline font-bricolage p-2  text-md   dark:text-white  hover:text-btncolor  dark:hover:text-btncolor   "
          >
            Create Survey
          </Link>
          <Link
            to={"/surveys"}
            className=" inline font-bricolage text-md p-2   dark:text-white   hover:text-btncolor  dark:hover:text-btncolor  "
          >
            Surveys
          </Link>
          <Link
            to={""}
            onClick={hancleOnclick}
            className=" inline font-bricolage  p-2  dark:text-white  text-md hover:text-btncolor  dark:hover:text-btncolor  "
          >
            Logout
          </Link>
        </NavBarWrapper>
        {isOpen && (
          <PopUpLogOut
            action="Logout"
            description="Are you sure you want to logout?"
            toggleModal={hancleOnclick}
          />
        )}
        <div className="flex flex-col min-h-screen py-4 space-y-4 md:py-10 md:space-y-8 mt-16 bg-lightie dark:bg-darkie dark:text-white">
          <div className="mx-4 space-y-2 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <div className="grid gap-2">
              <h1 className="font-bold text-2xl">Surveys</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Here are the latest surveys. Share your feedback!
              </p>
              <p className=" font-mono font-semibold">
                Total Surveys: {totalSuveys}
              </p>
            </div>
            <div className="grid gap-4 ">
              {currentPage === 1
                ? currentPosts
                    .slice(0)
                    .reverse()
                    .map((survey: { title: string }) => (
                      // @ts-ignore
                      <Card // @ts-ignore
                        key={survey.id}
                        title={survey.title} // @ts-ignore
                        id={survey.id} // @ts-ignore
                        user={survey.User.name}
                      />
                    ))
                : currentPosts.map((survey: { title: string }) => (
                    // @ts-ignore
                    <Card // @ts-ignore
                      key={survey.id}
                      title={survey.title} // @ts-ignore
                      id={survey.id} // @ts-ignore
                      user={survey.User.name} // @ts-ignore
                    />
                  ))}
            </div>

            <Pagination
              currentpage={currentPage}
              handlePagination={handlePagination}
              postPerPage={postsPerPage}
              length={totalSuveys}
            />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}
