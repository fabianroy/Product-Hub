import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
