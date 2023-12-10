
import './App.css';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  
  
    

     

      
      
      
        
      

     
   
     
   
  );
}

export default App;
