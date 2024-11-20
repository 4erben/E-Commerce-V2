
import { useSelector } from "react-redux"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"
import "./assets/styles/App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home.page";
function App() {
  const isDark = useSelector(state=>state.appUI.isDark);

  return (
  <div className="App font-josefin min-h-screen flex flex-col bg-surfaceA20" data-theme={`${isDark? "dark":"light"}`}>
    <Header/>
    <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
      </Routes>
      
    </main>
    <Footer/>
  </div>
  )
}

export default App
