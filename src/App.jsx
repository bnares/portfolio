
import { BrowserRouter } from "react-router-dom";
// import {About, Contact, Experience, Feedbacks,
// Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import StarsCanvas from "./components/StarsCanvastest";
import Works from "./components/Works";
import Stars from "./components/canvas/Stars"
const App =()=>{

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <Stars />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
