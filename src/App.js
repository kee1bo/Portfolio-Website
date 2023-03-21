import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className='ini'>
    <Nav/>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>


    </div>
  )
}

export default App;
