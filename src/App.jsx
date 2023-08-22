import './App.css'
import Navbar from './componets/Navbar/Navbar'
import {
  Introduction,
  Presentation,
  Projects,
  Skills,
} from "./containers"

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Presentation />
      <Skills />
      <Projects />
    </>
  )
}

export default App
