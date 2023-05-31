import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HistoryPage"



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cadastro' element={<RegistrationPage/>}/>
      <Route path='/habitos' element={<HabitsPage/>}/>
      <Route path='/hoje' element={<TodayPage/>}/>
      <Route path='/historico' element={<HistoryPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
