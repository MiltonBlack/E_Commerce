import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import { DataContext } from './DataProvider';


function Details() {

    console.log(useParams())
    const {id} = useParams();
    const [games, setGames] = useContext(DataContext)

    const details = games.filter((game, index) => {
        return game.id === id
    })

        console.log(details)
  return (
    <div>Details{id}</div>
  )
}

export default Details