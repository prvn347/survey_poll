import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { AppBar } from "../components/AppBar"
import { Card } from "../components/Card"
import { backendUrlAtom, isAuthenticatedAtom, loadingAtom, surveysAtom } from "../store/atoms"
import Loading from "../components/Loading"
import { Spinner } from "../components/Spinner"
import { useEffect, useState } from "react"
import axios from "axios"
import { Skelon } from "../components/Skeleton"



export default function SurveyFeed({}) {
    const [survey,setSurvey] = useRecoilState(surveysAtom)
    const [loading,isloading] = useState(true)
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
  if(loading){
    return <div>
      <AppBar/>
      <div className="flex flex-col min-h-screen py-4 space-y-4 md:py-10 md:space-y-8">
      
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
    <div className="flex flex-col min-h-screen py-4 space-y-4 md:py-10 md:space-y-8">
      <div className="mx-4 space-y-2 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl">Surveys</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Here are the latest surveys. Share your feedback!</p>
        </div>
        <div className="grid gap-4">
            {
                survey.map((survey: { title: string }) =>(
                    // @ts-ignore
<Card key={survey.id} title={survey.title} user={survey.User.name} />
                ))
            }
        </div>
      </div>
    </div>
    </div>
    </RecoilRoot>
  )
}

