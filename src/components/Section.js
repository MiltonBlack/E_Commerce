import React, { useContext } from "react";
import GameCategory from "./GameCategory";
import { DataContext } from "./DataProvider";
import Racing from "./Racing";
import { Boxed, Flex, Text, Card, Advert } from '../pages/styles/Section.styled'
import {Route, Link} from "react-router-dom";


export default function GameCategories() {


    const [games, setGames] = useContext(DataContext)
    console.log(games)

    
    return(
        <Boxed>
            <Text>hello</Text>
            <Flex>
                <Link to="/gamehub/action">
                    <Card>
                        hello
                        
                    </Card>
                </Link>
                <Link to="/gamehub/racing">
                    <Card>
                        hello
                        
                    </Card>
                </Link>
                <Link to="/gamehub/sports" >
                    <Card>
                        hello
                        
                    </Card>
                </Link>
            </Flex>
            <Advert src="./pcCover/resident-evil-9.webp"/>
{/* 
            <div className="categories">


                <GameCategory />
                <Racing/>
            </div> */}
        </Boxed>
    )
}