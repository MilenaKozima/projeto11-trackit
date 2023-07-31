import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HistoryPage"
import { useState } from "react"
import { UserContext } from "./contexts/UserContext"
import { ProgressContext } from "./contexts/ProgressContext"



function App() {

  const [user, setUser] = useState({});
  const [progress, setprogress] = useState(0);



  return (
    <BrowserRouter>
    <ProgressContext.Provider value={{progress, setprogress}}>
    <UserContext.Provider value={{user, setUser}}>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cadastro' element={<RegistrationPage/>}/>
      <Route path='/habitos' element={<HabitsPage/>}/>
      <Route path='/hoje' element={<TodayPage/>}/>
      <Route path='/historico' element={<HistoryPage/>}/>
    </Routes>
    </UserContext.Provider>
    </ProgressContext.Provider>
    </BrowserRouter>
  )
}

export default App
