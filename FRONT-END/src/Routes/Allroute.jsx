import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { News } from "../Pages/News"
import { Navbar } from "../HomeComponent/Navbar"
import { MokaExpress } from "../Pages/MokaExpress"
import { About } from "../Pages/About"
import { Shop } from "../Pages/Shop"
import { Login } from "../FourIcon/Login"
import { Signup } from "../FourIcon/Signup"

export const Allroute = () => {
  return (
    <div>
        
        <Navbar/>

    <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/News&Blog" element={<News/>}></Route>
        <Route path="/MokaExpress" element={<MokaExpress/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

    </Routes>
        
    </div>
  )
}
