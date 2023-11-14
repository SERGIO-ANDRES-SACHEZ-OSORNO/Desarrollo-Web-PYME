import { name } from 'tar/lib/types';
import './App.css';
import {Link, Route, Routes, useParams } from 'react-router-dom';



const Home =():Element => <h1>Home</h1> //ok

const SearchPage = ():Element =>{  //ok
  const Tacos = [
    'Cochinita',
    'Chili',
    'Carnita',
    'Quesadilla'
  ]

  return(  //ok
  <section>
    <h1>SearchPage</h1>
    <ul>
      {Tacos.map(Tacos =>(
      <li key={name}><Link to={`/Tacos/${Tacos}`}>{Tacos}</Link></li>))}      
    </ul>  
  </section>
  )  
} 
const Tacos = ():Element => {
  const {name}= useParams()
  return(
    <section>
    <h1>Tacos</h1>
    {name}
    
  </section> 
  )  
}
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
      <Route path='/Tacos/:name' element={<Tacos/>}/>
     </Routes>  
    </div>
  );
}
export default App;
