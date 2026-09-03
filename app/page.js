"use client"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import MyWork from "./components/MyWork"

function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <About/>
     <Services/>
    <MyWork/>
    </>
  )
}

export default Home
