import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticatedAtom } from "../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";


const Loading = (currentRoute:any,destinationRoute:any) => {
    // const [isAuthenticated,setIsAuthenticated] = useRecoilState(isAuthenticatedAtom)
    const navigate = useNavigate();
  
    useEffect(() => {
        const checkAuthentication = async () => {
          try {
            // Make a request to your backend to check for the presence of the HTTP-only cookie
            const response = await axios.get("http://localhost:3000/check-auth",{
                withCredentials:true
            });
            // If the cookie exists, redirect to the feed page
            navigate(currentRoute);
          } catch (error) {
            // If the cookie doesn't exist, redirect to the signin page
            navigate(destinationRoute);
          }
        };
    
        checkAuthentication();
      }, [navigate]);
  };
  
  export default Loading;