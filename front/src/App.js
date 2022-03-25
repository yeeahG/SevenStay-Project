import './App.css';
import Footer from './components/Layout/Footer';
import Home from './components/Layout/Home';
import Nav from './components/Navigation/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Place from './components/Layout/Place';
import Calender from './components/Navigation/Calender';

function App() {
  return (
    <div className="App">

       <BrowserRouter>

        <Nav>
          <Calender/> 
        </Nav>
        <Routes>
         <Route path="/" element={<Home/>}> </Route> 
         
         <Route path="/Layout/Place/:id" element={<Place/>}> </Route>
        </Routes>

      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
