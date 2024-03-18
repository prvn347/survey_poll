import { AppBar } from "../components/AppBar";
import Loading from "../components/Loading";
import { QuestionAndAnswer } from "../components/QuestionandOption";

export function PostSurvey(){

    Loading("/post","/signin")
    return <div className="">
        <AppBar/>
        <div className= " flex justify-center pt-5 mt-14">
            <div>
        <div>

        <h1 className="text-3xl font-bold">Create your survey</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your question and options below.</p>
       </div>
        <QuestionAndAnswer/>
        </div>
        
        </div>
    </div>
}