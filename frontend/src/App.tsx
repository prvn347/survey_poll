import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
// import Example from './pages/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import SurveyFeed from './pages/SurveyFeed'
import { RecoilRoot } from 'recoil'
import { Home } from './pages/Home'
import { QuestionAndAnswer } from './components/QuestionandOption'
import { PostSurvey } from './pages/PostSuvey'

function App() {
 return <div>
    <RecoilRoot>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/surveys' element={<SurveyFeed/>}/>
<Route path='/post' element={<PostSurvey/>}/>

{/* <Route path='/' element={}/>

<Route path='/survey' element={}/>
<Route path='/answer' element={}/>
<Route path='/mysuvey' element={}/> */}
  </Routes>
  </BrowserRouter>
  </RecoilRoot>
 </div>
}

export default App
