import './App.css'
import Navbar from './componets/Navbar/Navbar'
import {
  Education,
  Introduction,
  Presentation,
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
    </>
  )
}

export default App
