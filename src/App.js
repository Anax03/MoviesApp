
import './App.css';
import './Responsive.css'

import Nav from './components/Nav';
import Movies from './components/Movies'
import MoviesContextProvider from './context/ContextMovies';




const App=()=> {


  
  
  
  return (
    <MoviesContextProvider>
    <div className="App">
    <Nav/>
    <Movies/>
    </div>
    </MoviesContextProvider>
  );
}

export default App;
