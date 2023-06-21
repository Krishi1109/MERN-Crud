import React from 'react'
import {Route} from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Login from "./components/Login"
 
export const App = () => {
  return (
    <>
    <Navbar/>

    <Route exact path="/">
      <Home/>
    </ Route>

    <Route path="/About">
      <About/>
    </ Route>

    <Route path="/Contact" >
      <Contact/>
    </ Route>

    <Route path="/Signup">
      <Signup/>
    </ Route>

    <Route path="/Login">
      <Login/>
    </ Route>
    
    </>
  )
}

export default App