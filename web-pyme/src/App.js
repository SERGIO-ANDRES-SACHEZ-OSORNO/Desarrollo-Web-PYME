import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppComponent } from './app.component';
import {inde}
import './App.css';
import { Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <browserRouter>
        <Routes>
          <Route path="/" element={<Principal />} ></Route>
          <Route path="/Formulario" element={<Formulario />}> </Route>
        </Routes>
      </browserRouter>
    </div>
  );
}

export default App;
