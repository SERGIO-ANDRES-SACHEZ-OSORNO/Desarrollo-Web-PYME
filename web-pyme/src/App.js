import React from 'react';
import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './components/header.js';
import StartPage from "./pages/start.js";
import StorePage from "./pages/store.js";

function App() {
  return (
    <Routes>
      <Header/>
      <Router>               
        <Route path="/"  element={<StartPage/>} />
        <Route path="/store" element={<StorePage/>} />
        {/* ...otros routes... */}     
      </Router>
    </Routes>
    
  );
}

export default App;


