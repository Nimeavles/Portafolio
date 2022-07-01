import About_Me from "./components/About_Me"
import Home from "./components/Home"
import MyNav  from "./components/Navbar"
import Habilities from "./components/Habilities"
import Proyectos from "./components/Proyectos"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About_Me />
        <Habilities />
        <Proyectos />
        <Contact />
      </main>
    </div>
  )
}

export default App
