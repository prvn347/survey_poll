import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { backendUrlAtom } from "../store/atoms";
import { useNavigate, useParams } from "react-router-dom";
import { PollSkeleton } from "./PollSkeleton";
import { SurveyPopUp } from "./SurveyPopup";
import { OptionPopup } from "./OptionPopup";

export function SurveyLanding() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const backendUrl = useRecoilValue(backendUrlAtom);
  const [loading, isLoading] = useState(true);
  const [surveyData, setSurveyData] = useState({
    title: "",
    questions: [
      {
        id: 0,
        text: "",
        options: [{ id: 0, text: "" }],
      },
    ],
  });

  useEffect(() => {
    try {
      axios
        .get(`${backendUrl}/survey/${id}`, { withCredentials: true })
        .then((res) => {
          setSurveyData(res.data);
          isLoading(false);
        });
    } catch (error) {
      console.error("Error voting:", error);
    }
  }, [id, backendUrl]);

  const handleOnSubmit = async () => {
    navigate(`/result/${id}`);
  };

  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleOptionClick = async (questionId: any, optionId: any) => {
    try {
      console.log(questionId);
      if (!localStorage.getItem(`voted-${questionId}`)) {
        await axios.post(`${backendUrl}/vote`, {
          questionId: questionId,
          optionId: optionId,
        });
        localStorage.setItem(`voted-${questionId}`, "true");
      } else {
        setIsOptionSelected(!isOptionSelected);
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };
  const handleOp = () => {
    setIsOptionSelected(!isOptionSelected);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleDisabledOptionClick = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div>
        <div className="container grid items-center gap-4 px-4 md:px-6 ">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {surveyData.title}
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Please vote all questions!
            </p>
          </div>
          <PollSkeleton />
          <PollSkeleton />
          <PollSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div className=" font-bricolage">
      {isOptionSelected && (
        <OptionPopup
          action="Okay"
          description="You already voted this question!"
          toggleModal={handleOp}
        />
      )}

      {isOpen && (
        <SurveyPopUp
          action="See results"
          description="You already voted this survey"
          toggleModal={handleDisabledOptionClick}
        />
      )}

      <div className="container grid items-center gap-4 px-4 md:px-6  ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {surveyData.title}
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Please vote all questions!
          </p>
        </div>
        {surveyData.questions.map((question, index) => (
          <div className="grid gap-4" key={index}>
            <div className="space-y-2">
              <div className="font-medium" id={`question-${index}`}>
                Q.{index} {question.text}
              </div>
              {question.options.map((option, optionIndex) => (
                <div className="grid gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-full h-8">
                      <input
                        onClick={() =>
                          handleOptionClick(question.id, option.id)
                        }
                        type="checkbox"
                        id={`question-${optionIndex}`}
                        name={`question-${index}`}
                        className="appearance-none rounded-lg border dark:border  cursor-pointer h-full w-full 
                bg-darkie     checked:bg-btncolor transition-all duration-200  checked:hover:bg-btncolor  p-4   peer"
                        disabled={
                          localStorage.getItem(`voted-${question.id}`) !== null
                        }
                      ></input>
                      <label
                        onClick={
                          localStorage.getItem(`voted-${question.id}`)
                            ? handleDisabledOptionClick
                            : undefined
                        }
                        htmlFor={`question-${index}-${optionIndex}`}
                        className="absolute top-[50%] cursor-pointer left-3 text-gray-400   -translate-y-[50%]
                     peer-checked:text-gray-100 transition-all duration-200 select-none
                "
                      >
                        {" "}
                        {option.text}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleOnSubmit}
          className=" bg-btncolor dark:bg-btncolor text-white dark:text-black font-bricolage font-semibold text-xl w-48 px-2 py-1 rounded-md"
        >
          See Results!
        </button>
      </div>
    </div>
  );
}
