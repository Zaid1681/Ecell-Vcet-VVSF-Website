import './App.css'
import  {Navbar , Header , About , Timeline , Events , Talks  , Pitches}  from "./Components"


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
    </div>
  )
}
export default App
