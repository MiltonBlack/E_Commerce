import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import Game from './Game'

function Racing() {

    const [games, setGames] = useContext(DataContext)

    let racin = []
    racin = games.filter(race => {
        return race.genre === "Racing"
    })
    console.log(racin)
    const raceList = racin.map(rac => {
        return <Game key={rac.id} name={rac.name} img={rac.img} genre={rac.genre}/>
    })

  return (
    <div><p className="text2">Racing games</p>
         <div className="category" >
               {raceList}
            </div>
    </div>
  )
}

export default Racing