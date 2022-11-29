import React from "react"
import Header from "../LoginComponents/Header"
import Login from "../LoginComponents/Login"
import Footer from "../LoginComponents/Footer"
import Sidebar from '../Sidebar'

export default function Admin() {
    return (
        <>
            <Header />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <Login />
            <Footer />
        </>
  
    )
}