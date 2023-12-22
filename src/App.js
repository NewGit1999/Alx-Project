
import './App.css';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />}/>
          <Route path='/Menu' element={<Menu />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
          
          <Route path='/sign-up' element={<SignUp />}/>

        </Routes>
        <Footer />
      </Router>

    </div>
  
  
    

     

      
      
      
        
      

     
   
     
   
  );
}

export default App;
