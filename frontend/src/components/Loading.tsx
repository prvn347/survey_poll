import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Loading = (currentRoute: any, destinationRoute: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await axios.get("https://survey-poll-backend.onrender.com/check-auth", {
          withCredentials: true,
        });
        navigate(currentRoute);
      } catch (error) {
        navigate(destinationRoute);
      }
    };

    checkAuthentication();
  }, [navigate]);
};

export default Loading;
