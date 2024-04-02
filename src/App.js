
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './components/Footer/Footer';


function App() {
 

  return (
    <Router>
    <div >
    <Header/>
   
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    

  
    </div></Router>
  );
}

export default App;
