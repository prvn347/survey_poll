import { selector } from "recoil";
import { surveysAtom } from "./atoms";

export const totalSurveysSelector = selector({
  key: "totalSurveysSelector",
  get: ({ get }) => {
    const surveys = get(surveysAtom);
    return surveys.length;
  },
});

// export const surveysSelector = selector({
//     key:"SurveysSelector",
//     get: async({get})=>{
//         const backendUrl = get(backendUrlAtom)
//           try {
//            const response = await  axios.get(backendUrl+ "/survey",{
//             withCredentials: true
//         })

//            const surveys = response.data;
//           return surveys;

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
