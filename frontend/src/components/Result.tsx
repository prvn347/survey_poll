import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { backendUrlAtom } from "../store/atoms";
import axios from "axios";
import Loading from "./Loading";

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
    // const {id} = useParams()
Loading(`/result/${id}`,"/signin")
    const handleOnClick = ()=>{
        navigate('/surveys')
    }
    const totalVotes = surveyData.questions.reduce((total, question) => {
      return total + question.options.reduce((acc, option) => acc + option.votes, 0);
    }, 0);
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
              <div className='relative w-full h-8 border rounded-lg'>
				<input  type='checkbox' id={`question-${optionIndex}`} name={`question-${index}`} className='appearance-none rounded-lg bg-teal-100 cursor-pointer h-full w-full 
                    transition-all duration-200   hover:bg-gray-200   peer' disabled style={{
                      width: `${(option.votes / totalVotes) * 100}%` 
                    }}></input>
				<label htmlFor={`question-${index}-${optionIndex}`} className='absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                     peer-checked:text-gray-100 transition-all duration-200 select-none
                '> {option.text} <span className="text-blue-500  text-xs">({option.votes}{option.votes>1?"votes":"vote"})</span></label>
			</div>
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