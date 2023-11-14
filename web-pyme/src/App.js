import './App.css';
import { Route, Routes } from 'react-router-dom';
const Home =():Element => <h1>Home</h1>
const SearchPage = ():Element => <h1>SearchPage</h1>
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SearchPage' element={<SearchPage/>}/>
     </Routes>  
    </div>
  );
}
export default App;
