import './App.css';
import Navbar from './componentes/section/Navbar';
import Footer from './componentes/section/Footer';
import Presentation from './componentes/section/Presentation';
import Project from './componentes/section/Projects';
import Skills from './componentes/section/Skills';


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
