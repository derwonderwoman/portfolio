import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import AboutMe from './components/AboutMe';
import CV from './components/CV';
import Projects from './components/Projects';
import ContactMe from './components/Contacts';

function App() {

  return (
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<AboutMe/>}/>
      <Route path = "/cv" element = {<CV/>}/>
      <Route path = "/projects" element = {<Projects/>}/>
      <Route path = "/contacts" element = {<ContactMe/>}/>
    </Routes>
  )
}
export default App
