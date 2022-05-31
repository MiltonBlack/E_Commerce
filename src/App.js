import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameCategories from './components/GameCategories';
import Home from './pages/Home';
import Register from './pages/register.js';
import Login from './pages/login.js';
import { Start, Title, Options, List } from './pages/styles/Start.styled';
import { FaHome, FaGamepad, FaAccessibleIcon, FaLock } from 'react-icons/fa';
import { GiShoppingCart, GiShoppingBag, GiGamepad } from "react-icons/gi"


// import Button from './components/AddToCart';

function App() {
  // const [count, setCount] = useState(0)

  //   function remove() {
  //       setCount(prevCount => prevCount - 1)
  //   }

  //   function add() {
  //       setCount(prevCount => prevCount + 1)
  //   }
    const data = <div className="App">
                <marquee>GAME HUB Inc. Developed by Milton Azibapu, Find and purchase PC Games suitable for you</marquee>
                <GameCategories />
                 <Footer /> 
                       </div>

  return (
   <Router>
     <nav>
     <Start>
        <Title>GAMEHUB</Title>
        <div className="search"><input type="search" /><button className="btn">Search</button></div>
        <Options>
          <Link to="/">
            <List><FaHome size="1.2rem"/><br/>Home</List></Link>
          <Link to="/gamehub">
            <List><GiGamepad size="2rem" color="rgb(8, 247, 8)"/><br/>Game Shop</List></Link>
          <Link to="/login"> 
            <List><FaAccessibleIcon size="1.2rem"/><br/>Login</List></Link>
          <Link to="/register">
            <List><FaLock size="1.2rem"/><br/>Register</List></Link>
            <div className="listClass"><GiShoppingCart size="2rem" color="rgb(8, 247, 8)"/><br/>CART</div>
        </Options>
        </Start>
     </nav>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/gamehub" element={data} />
     </Routes>
   </Router>
  );
}

export default App;

