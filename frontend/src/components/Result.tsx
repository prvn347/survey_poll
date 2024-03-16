import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { backendUrlAtom } from "../store/atoms";
import axios from "axios";

export function Result(){
    const { id } = useParams();
    const navigate = useNavigate()
    const backendUrl = useRecoilValue(backendUrlAtom)
    const [surveyData, setSurveyData] = useState({
     
        title: "",
        questions: [{
          id:0,
          text: "",
          options: [{id:0, text: "",votes:0 }]
        }]
      });

    useEffect(()=>{
      try {
        axios.get(`${backendUrl}/survey/${id}`,{withCredentials:true})
        .then((res)=>{
            setSurveyData(res.data)

        })
      } catch (error) {
        console.error("Error fetching:", error);
 
      }
        
        
    }, [id, backendUrl])

    const handleOnClick = ()=>{
        navigate('/surveys')
    }
    return <div>
        <div>
        <div className="container grid items-center gap-4 px-4 md:px-6 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{surveyData.title}</h1>
          <p className="max-w-[700px] text-2xl text-blue-500 md:text-xl/relaxed dark:text-yellow-400">
            Results!
          </p>
        </div>
        {
            surveyData.questions.map((question, index) => (
        <div className="grid gap-4" key={index}>
          <div className="space-y-2">
            <div className="font-medium"  id={`question-${index}`}>Q.{index} {question.text}</div>
            {question.options.map((option, optionIndex) => (
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <label className="flex items-center space-x-2" htmlFor={`question-${optionIndex}`}>
                  <span className="font-semibold">{optionIndex}</span>
                  
                </label>
                <p className="text-sm text-black dark:text-gray-400">{option.text}</p>
                <p className="text-md font-bold text-blue-700">{option.votes}  Vote</p>
              </div>
              
             
            </div>
          ))}
          </div>
    </div>
))}
<button onClick={handleOnClick} className=" bg-blue-700 w-48 text-white font-semibold text-xl  px-2 py-1 rounded-md">Go to Home</button>
    </div>
    </div>
    </div>
}