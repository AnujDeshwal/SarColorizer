import React from 'react'
import { Toaster } from "react-hot-toast";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from './pages/Home';
<<<<<<< HEAD
import Main from './pages/Main';
=======
import Main from './pages/main';
import Output from './pages/Output';
>>>>>>> b18c307a1f3e90e16ea8f43ab297f8d901f9461d
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
      <Route path="/output" element={<Output/>}></Route>
    </Routes>
    <Toaster position="bottom-center" />
   </Router>
  )
}

export default App
