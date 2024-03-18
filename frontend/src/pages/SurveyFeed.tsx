import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { AppBar } from "../components/AppBar"
import { Card } from "../components/Card"
import { backendUrlAtom, surveysAtom } from "../store/atoms"
import Loading from "../components/Loading"
import { SetStateAction, useEffect, useState } from "react"
import axios from "axios"
import { Skelon } from "../components/Skeleton"
import { totalSurveysSelector } from "../store/selectors"
import { Pagination } from "../components/Pagination"


export default function SurveyFeed({}) {
    const [survey,setSurvey] = useRecoilState(surveysAtom)
    const totalSuveys = useRecoilValue(totalSurveysSelector)
    const [loading,isloading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(10);
    const backendUrl = useRecoilValue(backendUrlAtom)
 Loading("/surveys","/signin")
  useEffect( ()=>{
    const response =   axios.get(backendUrl+ "/survey",{
      withCredentials: true
  }).then((res)=>{
    setSurvey(res.data)
      isloading(false)
  })

  
  },[])
  // @ts-ignore
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = survey.slice(indexOfFirstPost, indexOfLastPost);
  const handlePagination = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };
  if(loading){
    return <div>
      <AppBar/>
      <div className="flex flex-col min-h-screen py-4 space-y-4 md:py-10 md:space-y-8 mt-16">
      
      <div className="mx-4 space-y-2 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div className="grid gap-2">
          <h1 className="font-bold text-2xl">Surveys</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Here are the latest surveys. Share your feedback!</p>
        </div>
      <Skelon/>
      <Skelon/>
      <Skelon/>
      <Skelon/>
      <Skelon/>
      <Skelon/>


      </div>
      </div>
      </div>
  }
  return (<RecoilRoot><div>
    <AppBar/>
    <div className="flex flex-col min-h-screen py-4 space-y-4 md:py-10 md:space-y-8 mt-16">
      <div className="mx-4 space-y-2 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl">Surveys</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Here are the latest surveys. Share your feedback!</p>
          <p  className=" font-mono font-semibold">Total Surveys: {totalSuveys}</p>
        </div>
        <div className="grid gap-4 ">
            { currentPage===1?
                (currentPosts.slice(0).reverse().map((survey: { title: string }) =>(
                    // @ts-ignore
<Card key={survey.id} title={survey.title} id={survey.id} user={survey.User.name} />
                ))):(currentPosts.map((survey: { title: string }) =>(
                  // @ts-ignore
<Card key={survey.id} title={survey.title} id={survey.id} user={survey.User.name} />
              )))
            }
        </div>
        <Pagination currentpage={currentPage} handlePagination={handlePagination} postPerPage={postsPerPage}  length={totalSuveys}/>
      </div>
    </div>
    </div>
    </RecoilRoot>
  )
}

