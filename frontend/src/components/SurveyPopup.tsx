import { useNavigate, useParams } from "react-router-dom";

interface model {
  toggleModal: () => void;
  description: string;
  action: string;
}

export function SurveyPopUp({ toggleModal, description, action }: model) {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleLogout = () => {
    navigate(`/result/${id}`);
  };
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center font-bricolage bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white dark:bg-darkie  rounded-lg shadow-lg p-8 max-w-md">
          <div className="flex justify-end">
            <button
              onClick={toggleModal}
              className="text-gray-400 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white ">
              {description}
            </h3>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-btncolor text-white  px-4 py-2 rounded-lg mr-2 "
                onClick={handleLogout}
              >
                {action}
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
                onClick={toggleModal}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
