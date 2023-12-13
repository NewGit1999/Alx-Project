
import './App.css';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />}/>
          <Route path='/About' element={<About />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  
  
    

     

      
      
      
        
      

     
   
     
   
  );
}

export default App;
