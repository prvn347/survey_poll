import { TypeAnimation } from "react-type-animation";
import { AppBar } from "../components/AppBar";
import { Link } from "react-router-dom";

export function Home(){
    return <div className="  font-bricolage bg-lightie dark:bg-darkie dark:text-lightie ">
        <AppBar></AppBar>
        <div className="p-20 mt-16">
            <section className=" gap-6">
              <div className=" h-64 text-darkie dark:text-lightie  text-xl sm:text-3xl  font-bold font-bricolage leading-tight sm:leading-10 max-w-md sm:max-w-lg">
            <TypeAnimation
  sequence={[
    'Create survey polls for employees feedback.',
    1000,
    
    'Create survey polls for customer satisfaction.',
    1000,
    
    'Create survey polls for market research.',
    1000,
    
    'Create survey polls for event planning.',
    1000,
    
    'Create survey polls for student engagement.',
    1000,
    
    'Create survey polls for product feedback.',
    1000,
    
    'Create survey polls for course evaluations.',
    1000,
    
    'Create survey polls for team decision-making.',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/></div>
<div>
          <Link className="inline-flex w-64  dark:bg-btncolor h-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  font-bold dark:text-darkie dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            to={'/signup'}>
         Take surveys
          </Link></div>
            </section>
            <section>
            <div className="w-full py-12 md:py-24">
        <div className="container  flex flex-col gap-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 ">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Features to Love</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Easy survey creation. Real-time insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1  border border-darkie dark:border-lightie rounded-lg p-4">
              <h3 className="text-lg font-bold">Create Survey Polls</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Users can create new survey polls by providing a title, questions, and options for each question.              </p>
            </div>
            <div className="grid gap-1 border  border-darkie dark:border-lightie rounded-lg p-4">
              <h3 className="text-lg font-bold">Vote on Survey Polls</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
Users can vote on published survey polls by selecting options for each question.              </p>
            </div>
            <div className="grid gap-1 border  border-darkie dark:border-lightie rounded-lg p-4">
              <h3 className="text-lg font-bold">Prevent Duplicate Votes</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              The application prevents users from voting more than once per question and survey.              </p>
            </div>
            <div className="grid gap-1 border  border-darkie dark:border-lightie rounded-lg p-4">
              <h3 className="text-lg font-bold">Responsive Design</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              The web app is designed with a responsive layout using Tailwind CSS, ensuring a seamless experience across devices.              </p>
            </div>
           
          </div>
        </div>
      </div>
            </section>
            <footer>
                <div className="flex justify-center">
                    <span>Made with ❤ by <a href="https://twitter.com/prvn347" className="text-btncolor">@prvn</a></span>
                </div>
            </footer>
        </div>
    </div>
}