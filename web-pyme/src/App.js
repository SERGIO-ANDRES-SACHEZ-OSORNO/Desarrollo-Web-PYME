import React from 'react';
import './App.css';
import Header from './components/header'
import Inicio from './pages/start'
import Store from './pages/store'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App(){
  return (
    <Router>      
      <Header/>      
      <Routes>
        <Route path="./pages" element={<Inicio/>}> Inicio </Route>
        <Route path="./pages" element={<Store/>}> Tienda </Route>
      </Routes>
    </Router>  
  );
}
export default App;
