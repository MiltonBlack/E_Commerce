import React from 'react'
import { Container } from '../pages/styles/Home.styled'
import GameCategories from '../components/Section'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <Container>
      <GameCategories/>
      <Footer/>
    </Container>
  )
}

export default Home