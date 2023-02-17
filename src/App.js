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
          <Route exact path="/react-cv/" element={<Home/>} />
          <Route path="/react-cv/home" element={<Home/>} />
          <Route path="/react-cv/competences" element={<Knowledges/>}/>
          <Route path="/react-cv/portfolio" element={<Portfolio/>} />
          <Route path="/react-cv/contact" element={<Contact/>} />
          <Route path="/react-cv/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;