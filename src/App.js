import React, {useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameCategories from './components/GameCategories';
// import Button from './components/AddToCart';

function App() {
  // const [count, setCount] = useState(0)

  //   function remove() {
  //       setCount(prevCount => prevCount - 1)
  //   }

  //   function add() {
  //       setCount(prevCount => prevCount + 1)
  //   }


  return (
    <div className="App">
      <Header />
      <marquee>GAME HUB Inc. Developed by Milton Azibapu, Find and purchase PC Games suitable for you</marquee>
      <GameCategories />
      <Footer />
      {/* <Button 
        remove={remove}
        add={add}
        counter={count}
      /> */}
    </div>
  );
}

export default App;
