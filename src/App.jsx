import About_Me from "./components/About_Me"
import Home from "./components/Home"
import MyNav  from "./components/Navbar"
import Habilities from "./components/Habilities"

function App() {

  return (
    <div>
      <MyNav />
      <main>
        <Home />
        <About_Me />
        <Habilities />
      </main>
    </div>
  )
}

export default App
