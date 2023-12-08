import './App.css';
import Navbar from './componentes/section/Navbar';
import Footer from './componentes/section/Footer';
import Presentation from './componentes/section/Presentation';
import Project from './componentes/section/Projects';
import Skills from './componentes/section/Skills';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <Skills></Skills>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <Project></Project>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <Footer></Footer>
    </div>
  );
}

export default App;
