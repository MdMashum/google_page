import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

import Home from './components/home'
import Googlesearch from './components/googlesearch'
import Feelinggood from './components/feelinggood'
import ChangeToUppercase from './components/assigmentTwo'

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home/>} />
     <Route exact path='/Googlesearch' element={<Googlesearch/>} />
     <Route exact path='/Feelinggood' element={<Feelinggood/>} />
     <Route exact path='/changeToUppercase' element={<ChangeToUppercase/>}/>
     
    </Routes>

  </>
  );
}

export default App;
