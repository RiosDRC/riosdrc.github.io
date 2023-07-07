import './App.css'
import Navbar from './componets/Navbar/Navbar'
import {
  Education,
  Introduction,
  Presentation,
  Projects,
  Skills,
  Work
} from "./containers"

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Presentation />
      <Work />
      <Education />
      <Skills />
      <Projects />
    </>
  )
}

export default App
