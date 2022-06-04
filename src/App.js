import React, {useContext} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { DataProvider } from './components/DataProvider'; 
import { DataContext } from './components/DataProvider';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import GameCategory from './components/GameCategory';
import Home from './pages/Home';
import Register from './pages/register.js';
import Login from './pages/login.js';
import { Start, Title, Options, List } from './pages/styles/Start.styled';
import { FaHome, FaGamepad, FaAccessibleIcon, FaLock } from 'react-icons/fa';
import { GiShoppingCart, GiShoppingBag, GiGamepad } from "react-icons/gi"
import Details from './components/Details';
import Game from './components/Game';
import Racing from './components/Racing';


function App() {

    const [games, setGames] = useContext(DataContext);

    const data = <div className="App">
                  <marquee>GAME HUB Inc. Developed by Milton Azibapu, Find and purchase PC Games suitable for you</marquee>
                  <Section />
                 </div>

  return (
  <DataProvider>
   <Router>
     <nav>
     <Start>
        <Title>GAMEHUB</Title>
        <div className="search"><input type="search" /><button className="btn">Search</button></div>
        <Options>
          <Link to="/">
            <List>HOME</List></Link>
          <Link to="/gamehub">
            <List>GAME-HUB</List></Link>
          <Link to="/login"> 
            <List>LOGIN</List></Link>
          <Link to="/register">
            <List>REGISTER</List></Link>
            <List >CART</List>
        </Options>
        </Start>
     </nav>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/gamehub" element={data} />
       <Route path="/gamehub/action" element={<GameCategory/>}/>
       <Route path ={`/gamehub/action/${games.id}`}/>
       <Route path="/gamehub/racing" element={<Racing/>}/>
     </Routes>
     <Footer/>
   </Router>
   </DataProvider>
  );
}

export default App;

