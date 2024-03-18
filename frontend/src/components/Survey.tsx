import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { backendUrlAtom } from "../store/atoms";
import { useNavigate, useParams } from "react-router-dom";

interface survey{
    id:number,
    title:string,
    text:string,
    option:string

}
export function SurveyLanding(){
  const navigate = useNavigate()
    const { id } = useParams();
    console.log(id)
    const backendUrl = useRecoilValue(backendUrlAtom)
    const [surveyData, setSurveyData] = useState({
     
        title: "",
        questions: [{
          id:0,
          text: "",
          options: [{id:0, text: "" }]
        }]
      });

    useEffect(()=>{
      try {
        axios.get(`${backendUrl}/survey/${id}`,{withCredentials:true})
        .then((res)=>{
            setSurveyData(res.data)

        })
      } catch (error) {
        console.error("Error voting:", error);
 
      }
        
        
    }, [id, backendUrl])

    const handleOnSubmit = async ()=>{
      
        navigate(`/result/${id}`)


    }
    const handleOptionClick = async (questionId: any, optionId: any) => {
      try {
        await axios.post(`${backendUrl}/vote`, {
          questionId: questionId,
          optionId: optionId
        });
      } catch (error) {
        console.error("Error voting:", error);
      }
    };
    return <div>
         <div className="container grid items-center gap-4 px-4 md:px-6 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{surveyData.title}</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Please vote all questions!
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
              <div className='relative w-full h-8'>
				<input onClick={()=>handleOptionClick(question,option.id)} type='checkbox' id={`question-${optionIndex}`} name={`question-${index}`} className='appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full 
                    checked:bg-teal-400 transition-all duration-200  checked:hover:bg-teal-400 hover:bg-gray-200   peer'></input>
				<label htmlFor={`question-${index}-${optionIndex}`} className='absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                     peer-checked:text-gray-100 transition-all duration-200 select-none
                '> {option.text}</label>
			</div>
                {/* <label className="flex items-center space-x-2" htmlFor={`question-${optionIndex}`}>
                  <input onClick={()=>handleOptionClick(question,option.id)} className="w-4 h-4 text-primary" id={`question-${optionIndex}`} name={`question-${index}`} type="radio" value="1" />
                  <span className="font-semibold">{optionIndex}</span>
                </label>
                <p className="text-sm text-black dark:text-gray-400">{option.text}</p> */}
              </div>
              
             
            </div>
          ))}
          </div>
    </div>
))}
<button onClick={handleOnSubmit} className=" bg-blue-700 text-white font-semibold text-xl w-48 px-2 py-1 rounded-md">See Results!</button>
    </div>
    </div>
}

