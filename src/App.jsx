import React from 'react'
import { Toaster } from "react-hot-toast";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from './pages/Home';
import Main from './pages/main';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
    </Routes>
    <Toaster position="bottom-center" />
   </Router>
  )
}

export default App