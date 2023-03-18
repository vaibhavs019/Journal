//import logo from './logo.svg';
import  { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Alerts from './Components/Alerts';
import About  from './Components/About';
import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import KDR from './Components/KDR';
import Exp1 from './Components/KDR Exp/Exp1';
import Exp2 from './Components/KDR Exp/Exp2';
import Exp3a from './Components/KDR Exp/Exp3A';
import Exp3b from './Components/KDR Exp/Exp3B';
import Exp4a from './Components/KDR Exp/Exp4A';
import Exp4b from './Components/KDR Exp/Exp4B';
import RCS from './Components/RCS';
import Exp1A from './Components/RCS Exp/Exp1A';
import Exp1B from './Components/RCS Exp/Exp1B';
import Exp1C from './Components/RCS Exp/Exp1C';
import Exp2A from './Components/RCS Exp/Exp2A';
import Exp2B from './Components/RCS Exp/Exp2B';
import Exp2C from './Components/RCS Exp/Exp2C';
import Exp3A from './Components/RCS Exp/Exp3A';
import Exp3B from './Components/RCS Exp/Exp3B';
import Exp4A from './Components/RCS Exp/Exp4A';
import Exp4B from './Components/RCS Exp/Exp4B';
import Exp5A from './Components/RCS Exp/Exp5A';
import Exp5B from './Components/RCS Exp/Exp5B';
import Exp6A from './Components/RCS Exp/Exp6A';
import Exp6B from './Components/RCS Exp/Exp6B';
import Exp7A from './Components/RCS Exp/Exp7A';
import Exp7B from './Components/RCS Exp/Exp7B';



function App() {
  const [mode,setMode] = useState("light");


  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }

  }

  
  return (
  <>
  <Router>
  <Navbar title ="Lab Journal" mode={mode} toggleMode={toggleMode}/>
  {/* <Sidebar /> */}

  {/*<Sidebar/>*/}
  <div className='container my-3'>
  <Routes>
        <Route path="/home" element={<Home mode={mode} toggleMode={toggleMode} />} />
        <Route path="#" element={<Home mode={mode} toggleMode={toggleMode} />} />
        <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
        <Route path="/rcs" element={<RCS mode={mode} toggleMode={toggleMode} />} />
        <Route path="/rcs/exp-1a" element={<Exp1A mode={mode} toggleMode={toggleMode} />} />
        <Route path="/rcs/exp-1b" element={<Exp1B mode={mode} toggleMode={toggleMode} />} />
        <Route path="/rcs/exp-1c" element={<Exp1C mode={mode} toggleMode={toggleMode} />} />
        <Route path="/rcs/exp-2a" element={<Exp2A mode={mode} toggleMode={toggleMode} />} />
        <Route path="/rcs/exp-2b" element={<Exp2B mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-2c' element={<Exp2C mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-3a' element={<Exp3A mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-3b' element={<Exp3B mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-4a' element={<Exp4A mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-4b' element={<Exp4B mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-5a' element={<Exp5A mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-5b' element={<Exp5B mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-6a' element={<Exp6A mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-6b' element={<Exp6B mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-7a' element={<Exp7A mode={mode} toggleMode={toggleMode} />} />
        <Route path='/rcs/exp-7b' element={<Exp7B mode={mode} toggleMode={toggleMode} />} />
        <Route path="/kdr" element={<KDR mode={mode} toggleMode={toggleMode} />} />
        <Route path="/kdr/exp-1" element={<Exp1 mode={mode} toggleMode={toggleMode} />} />
        <Route path="/kdr/exp-2" element={<Exp2 mode={mode} toggleMode={toggleMode} />} />
        <Route path="/kdr/exp-3a" element={<Exp3a mode={mode} toggleMode={toggleMode} />} />
        <Route path="/kdr/exp-3b" element={<Exp3b mode={mode} toggleMode={toggleMode} />} />
        <Route path="/kdr/exp-4a" element={<Exp4a mode={mode} toggleMode={toggleMode} />} />
        <Route path='/kdr/exp-4b' element={<Exp4b mode={mode} toggleMode={toggleMode} />} />
        </Routes>
  </div>
  </Router>
  
  </>
  );
}

export default App;
