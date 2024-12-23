
import React from "react"
import { Layout } from "./components/Layout"
import { Chart } from "./components/Chart"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Chartpage } from "./pages/Chartpage"
import { Mychartpage } from "./pages/Mychartpage"
function App() {
      return (
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/signup" element={<Signup></Signup>}/>
            <Route path={"/home"} element={<Chartpage></Chartpage>}/>
            <Route path={"/"} element={<Chartpage></Chartpage>}/>
            <Route path={"/chart/:id"} element={<Mychartpage></Mychartpage>}/>
          </Routes>
      </BrowserRouter>  
  )
}

export default App
