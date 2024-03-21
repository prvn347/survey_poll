import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useRecoilValue } from "recoil";
import { backendUrlAtom } from "../store/atoms";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";

export function QuestionAndAnswer() {
  const navigate = useNavigate();
  const [loading, isloading] = useState(false);
  const backendUrl = useRecoilValue(backendUrlAtom);
  const [surveyData, setSurveyData] = useState({
    title: "",
    questions: [
      {
        text: "",
        options: [{ text: "" }],
      },
    ],
  });
  const handleTitleChange = (event: { target: { value: any } }) => {
    setSurveyData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const handleQuestionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newQuestions = [...surveyData.questions];
    newQuestions[index].text = event.target.value;
    setSurveyData((prevState) => ({
      ...prevState,
      questions: newQuestions,
    }));
  };
  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newQuestions = [...surveyData.questions];
    newQuestions[questionIndex].options[optionIndex].text = event.target.value;
    setSurveyData((prevState) => ({
      ...prevState,
      questions: newQuestions,
    }));
  };
  const addQuestion = () => {
    setSurveyData((prevState) => ({
      ...prevState,
      questions: [
        ...prevState.questions,
        { text: "", options: [{ text: "" }] },
      ],
    }));
  };
  const addOption = (questionIndex: number) => {
    const newQuestions = [...surveyData.questions];
    newQuestions[questionIndex].options.push({ text: "" });
    setSurveyData((prevState) => ({
      ...prevState,
      questions: newQuestions,
    }));
  };

  const handleSubmit = async () => {
    try {
      isloading(true);
      console.log("Survey Data:", surveyData);
      const response = await axios.post(`${backendUrl}/survey`, surveyData, {
        withCredentials: true,
      });
      console.log(response.data);
      setSurveyData({
        title: "",
        questions: [
          {
            text: "",
            options: [{ text: "" }],
          },
        ],
      });

      navigate("/surveys");
      // isloading(false)
    } catch (error) {
      console.error("Error:", error);
    }
  };
  if (loading) {
    return (
      <div className="flex flex-col h-screen justify-center bg-lightie dark:bg-darkie">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-lightie dark:bg-darkie font-bricolage">
      <div className="space-y-4 flex flex-col pt-6 ">
        <div className="space-y-2 flex flex-col">
          <label className="space-y-1 font-medium text-lg" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            placeholder="Survey Title"
            required
            className="px-2 font-medium py-2 placeholder:text-sm placeholder:font-medium rounded-sm text-black border dark:bg-darkie dark:text-lightie shadow-[3px_3px_rgba(0,_98,_90,_0.4),_6px_6px_rgba(0,_98,_90,_0.3)] outline-none border-black w-96 focus:shadow-purple-700"
            value={surveyData.title}
            onChange={handleTitleChange}
          />
        </div>

        {surveyData.questions.map((question, index) => (
          <div key={index} className="space-y-2 flex flex-col">
            <label
              className="space-y-1 font-medium text-lg"
              htmlFor={`question-${index}`}
            >
              Question
            </label>
            <input
              id={`question-${index}`}
              placeholder="Question"
              required
              className="px-2 font-medium py-2 placeholder:text-sm placeholder:font-medium rounded-sm text-black border dark:bg-darkie dark:text-lightie border shadow-[3px_3px_rgba(0,_98,_90,_0.4),_6px_6px_rgba(0,_98,_90,_0.3)] outline-none border-black w-96 focus:shadow-purple-700"
              value={question.text}
              onChange={(e) => handleQuestionChange(index, e)}
            />

            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="space-y-1 flex flex-col">
                <label
                  className="space-y-1 font-medium text-lg"
                  htmlFor={`option-${index}-${optionIndex}`}
                >
                  Option
                </label>
                <input
                  id={`option-${index}-${optionIndex}`}
                  placeholder="Option"
                  required
                  className="px-2 font-medium py-2 placeholder:text-sm placeholder:font-medium rounded-sm text-black border dark:bg-darkie dark:text-lightie shadow-[3px_3px_rgba(0,_98,_90,_0.4),_6px_6px_rgba(0,_98,_90,_0.3)] outline-none border-black w-96 focus:shadow-purple-700"
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                />
              </div>
            ))}
            <div className="flex justify-center items-center pt-4">
              <button
                className="  text-pinkish w-36 px-2 py-2 rounded-md "
                onClick={() => addOption(index)}
              >
                {" "}
                <span className="flex gap-1 justify-center items-center">
                  Add Option{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-center  items-center">
          <button
            className="  text-btncolor w-36 px-2 py-2 rounded-md"
            onClick={addQuestion}
          >
            <span className="flex gap-1 justify-center items-center">
              Add Question{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </button>
          <button
            className=" bg-black dark:bg-btncolor text-white mt-5 w-36 px-2 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
