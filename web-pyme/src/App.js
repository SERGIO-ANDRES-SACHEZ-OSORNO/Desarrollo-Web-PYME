import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
const Home =():Element => <h1>Home</h1> //ok

const SearchPage = ():Element =>{  //ok
  const Tacos = '/Tacos'//ok
  return(  //ok
  <div>

    <h1>SearchPage</h1>
    <Link to={Tacos}>tacos</Link>
  </div>

  )
  
} 
const Tacos = ():Element => <h1>Tacos</h1>  //ok

function App() {
  return (
    <div className="App">
      <header>
        <h1>Inicio</h1>
        <nav>
          <ul>
            <li><Link to='/searchPage'>Search Page</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Tacos</Link></li>
          </ul>
        </nav>
      </header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SearchPage' element={<SearchPage/>}/>
      <Route path='/Tacos' element={<Tacos/>}/>
     </Routes>  
    </div>
  );
}
export default App;
