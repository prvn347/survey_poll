import { selector, useRecoilState, useSetRecoilState } from "recoil";
import { backendUrlAtom, isAuthenticatedAtom, loadingAtom, postInputAtom, surveysAtom } from "./atoms";
import axios from "axios";



// export const surveysSelector = selector({
//     key:"SurveysSelector",
//     get: async({get})=>{
//         const backendUrl = get(backendUrlAtom)
//         const surveys = get(surveysAtom)
//         const setSurveys = useSetRecoilState(surveysAtom);      
//           try {
//            const response = await  axios.get(backendUrl+ "/survey",{
//             withCredentials: true
//         })
        

//            const surveys = response.data;
//             setSurveys(surveys)
          
//         } catch (error) {
//             console.log(error)
//             return []
//         }

//     }
// })

// export const isAuthenticatedSelector = selector({
//     key:"authincatedCookie"
//     ,get: async ({get})=>{
//         const isAuthenticated = get(isAuthenticatedAtom)
//         try {
//             const response =  await axios.get("http://localhost:3000/check-auth",{
//                 withCredentials: true
//             });
//             console.log(response.data)
//             if(response.data = "Unauthorized"){
                
//             }
//             return true;
            


//         } catch (error) {
//             console.log(error)
           
            
//         }
       
//     }
// })


