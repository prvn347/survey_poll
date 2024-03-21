import { AppBar } from "../components/AppBar";
import { Auth } from "../components/Auth";

export const Signup = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-lightie dark:bg-darkie dark:text-white">
      <AppBar />
      <div className=" flex justify-center">
        <div>
          <Auth type="signup" />
        </div>
      </div>
    </div>
  );
};
