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
import { Start, Title, Options, List, Search, SeacrhBox, Flexed, SearchButton } from './pages/styles/Start.styled';
import { FaHome, FaAccessibleIcon, FaKey, FaTimes } from 'react-icons/fa';
import { GiShoppingCart, GiGamepad } from "react-icons/gi"
import Racing from './components/Racing';


function App() {

    // const [games] = useContext(DataContext);
    // console.log(games.id)

    const data = <div className="App">
                  {/* <marquee>GAME HUB Inc. Developed by Milton Azibapu, Find and purchase PC Games suitable for you</marquee> */}
                  <Section />
                 </div>

  return (
  <DataProvider>
   <Router>
     <nav>
     <Start>
       <div><FaTimes className='times' size="2rem" color="white"/></div>
        <Title>GAMEHUB</Title>
        <SeacrhBox>
          <Search type="search" placeholder='Search for a game' />
          <SearchButton >Search</SearchButton>
        </SeacrhBox>
        <Options>
          <Link to="/">
            <List><Flexed><FaHome size="2rem" />HOME</Flexed></List></Link>
          <Link to="/gamehub">
            <List><Flexed><GiGamepad size="2rem"/>GAME-HUB</Flexed></List></Link>
          <Link to="/login"> 
            <List><Flexed><FaKey size="2rem"/>LOGIN</Flexed></List></Link>
          <Link to="/register">
            <List><Flexed><FaAccessibleIcon size="2rem"/>REGISTER</Flexed></List></Link>
            <List ><Flexed><GiShoppingCart size="2rem"/>CART</Flexed></List>
        </Options>
        </Start>
     </nav>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/gamehub" element={data} />
       <Route path="/gamehub/action" element={<GameCategory/>}/>
       <Route path="/gamehub/racing" element={<Racing/>}/>
     </Routes>
     <Footer/> 
   </Router>
   </DataProvider>
  );
}

export default App;

