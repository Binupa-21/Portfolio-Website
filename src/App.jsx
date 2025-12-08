import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Spacer for next steps */}
      <div className="h-screen bg-black"></div>
    </div>
  );
}

export default App;