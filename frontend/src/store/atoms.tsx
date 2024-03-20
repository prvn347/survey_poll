import { atom } from "recoil";
// import {  surveysSelector } from "./selectors";


export const stickyAtom = atom({
    key:"sticky",
    default:false
})
export const postInputAtom = atom({
    key:'postinput'
    ,default: {
        email: "",
        name: "",
        password: ""
    }
})

export const backendUrlAtom = atom({
    key:"backendUrl",
    default:"https://survey-poll-backend.onrender.com/api/v1"
})
export const isAuthenticatedAtom = atom<Boolean>({
    key: "isAuthenticated",
    default: false,
  });
  
export const surveysAtom = atom({
    key: "surveys",
    default: []

})
export const loadingAtom = atom({
    key:'loading',
    default:true
})
