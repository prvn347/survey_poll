import { useNavigate } from "react-router-dom";

interface card {
  title: string;
  user: string;
  id: number;
}
export function Card({ title, user, id }: card) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/survey/${id}`);
  };

  return (
    <div className="border shadow-md p-4 rounded-md">
      <div className=" flex flex-col gap-2 max-w-lg text-wrap">
        <span className="text-xl font-semibold">{title}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono">Created by:</span>
          <div className="w-6 h-6 rounded-full bg-black dark:bg-btncolor flex items-center justify-center dark:bg-yello">
            <span className="text-md font-semibold text-white">{user[0]}</span>
          </div>
          <span className="text-md font-mono"> {user}</span>
        </div>
        <div className=" text-right">
          <button
            onClick={handleOnClick}
            className="bg-black text-sm font-medium rounded-md  text-white p-2  dark:bg-btncolor"
          >
            Take Survey
          </button>
        </div>
      </div>
    </div>
  );
}
