
import './App.css';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  
  
    

     

      
      
      
        
      

     
   
     
   
  );
}

export default App;
