import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./LoginComponents/Header"
// import Login from "./LoginComponents/Login"
// import Footer from "./LoginComponents/Footer"
// import Signup from "./SignUpComponents/Signup"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Admin from "./pages/Admin"


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="admin" element={<Admin />} />
            {/* // <Header />
            // <Login />np
            // <span>learn react</span>
            // <Footer /> */}
            
        </Routes>
      </BrowserRouter>
    )
}
