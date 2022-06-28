import About_Me from "./components/About_Me"
import Home from "./components/Home"
import MyNav  from "./components/Navbar"
import Habilities from "./components/Habilities"
import Proyectos from "./components/Proyectos"
import Contact from "./components/Contact"

function App() {

  return (
    <div>
      <MyNav />
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
