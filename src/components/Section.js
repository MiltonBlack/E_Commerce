import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Boxed, Flex, Text, Info, Card, Advert } from '../pages/styles/Section.styled'
import {Link} from "react-router-dom";
import Pic from "../pages/resident-evil-9.webp"
import {FaFlagCheckered, FaFistRaised, FaGamepad} from "react-icons/fa"


export default function GameCategories() {


    const [games] = useContext(DataContext)
    console.log(games)

    
    return(
        <Boxed>
            <Text>Select a Game Category of your Choice</Text>
            <Flex>
                <Link to="/gamehub/action">
                    <Card>
                        <FaFistRaised size="6rem"/>
                        <Info>Action Games</Info>
                    </Card>
                </Link>
                <Link to="/gamehub/racing">
                    <Card>
                        <FaFlagCheckered size="6rem"/>
                        <Info>Racing Games</Info>
                    </Card>
                </Link>
                <Link to="/gamehub/game" >
                    <Card>
                        <FaGamepad size="6rem"/>
                        <Info>Games</Info>
                    </Card>
                </Link>
            </Flex>
            <Advert src={Pic}/>
        </Boxed>
    )
}