import React from 'react';
import './App.css';
import Inicio from './pages/start'
import Store from './pages/store'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Headers from './components/header'
function App(){
  return (
    <Router>      
      <Headers/>      
      <Routes>
        <Route path="./pages" element={<Inicio/>}> Inicio </Route>
        <Route path="./pages" element={<Store/>}> Tienda </Route>
      </Routes>
    </Router>  
  );
}
export default App;
