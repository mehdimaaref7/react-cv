import React from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>   
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/competences" element={<Knowledges/>}/>
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;