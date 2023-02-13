import './App.css'
import  {Navbar , Header , About , Timeline , Events , Talks  , Pitches, Contact}  from "./Components"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Timeline />
      <Events />
      <Talks />
      <Pitches />
      <Contact />
    </div>
  )
}
export default App
