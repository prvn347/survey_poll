import { RecoilRoot } from "recoil"
import { AppBar } from "../components/AppBar"
import { Card } from "../components/Card"
import { useEffect, useState } from "react"
import axios from "axios"



export default function SurveyFeed({}) {
    const [survey,serSurvey] = useState([])
    useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/survey')
    .then((resp)=>{
        serSurvey(resp.data)

    })
},[])

  return (<RecoilRoot><div>
    <AppBar/>
    <div className="flex flex-col min-h-screen w-full py-4 space-y-4 md:py-10 md:space-y-8">
      <div className="mx-4 space-y-2 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl">Surveys</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Here are the latest surveys. Share your feedback!</p>
        </div>
        <div className="grid gap-4">
            {
                survey.map(survey =>(
                    // @ts-ignore
<Card title={survey.title}/>
                ))
            }

        </div>
      </div>
    </div>
    </div>
    </RecoilRoot>
  )
}

