import './App.css'
import Navbar from './componets/Navbar/Navbar'
import {
  Education,
  Introduction,
  Presentation,
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
    </>
  )
}

export default App
