import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Presentation from './componentes/Presentation';
import Project from './componentes/Projects';
import Skills from './componentes/Skills';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      
      <Skills/>
      
      <Project/>

      <Footer></Footer>
    </div>
  );
}

export default App;
