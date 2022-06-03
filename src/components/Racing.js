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
        return <Game key={rac.id} name={rac.name} img={rac.img}/>
    })

  return (
    <div>Racing
         <div className="category" >
                <p className="text2">Racing games</p>
               {raceList}
            </div>
    </div>
  )
}

export default Racing