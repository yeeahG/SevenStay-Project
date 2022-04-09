import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Layout/Home';
import Nav from './components/Navigation/Nav';
import Calender from './components/Navigation/Calender';
import LoginForm from './components/LoginSignin/LoginForm'
import SigninForm from './components/LoginSignin/SigninForm'
import UserInfo from './components/LoginSignin/UserInfo'
import Place from './components/Layout/Place';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

       <BrowserRouter>
        <Nav>
          <Calender/> 
        </Nav>

        <Routes>
         <Route path="/" element={<Home/>}> </Route> 
         <Route path="/LoginSignin/LoginForm" element={<LoginForm/>}></Route>
         <Route path="/LoginSignin/SigninForm" element={<SigninForm/>}></Route>
         <Route path="/LoginSignin/UserInfo" element={<UserInfo/>}></Route>
         <Route path="/Layout/Place/:id" element={<Place/>}> </Route>
        </Routes>

      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
