import styled from 'styled-components'

export const Start = styled.div`
background: rgba(2,2,2,0,3);
background-image: 
  linear-gradient(to right, rgba(0, 0, 0, 0), rgba(9, 9, 248, 0.925)), 
   url("./components/Gta5.jpg");
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin:2px;
padding:15px;
position:fixed;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
width:100%;
box-shadow: 2px 2px 7px;
height:10vh;
position:relative;
`


export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin:15px;
  color:rgb(8, 247, 8);
  text-shadow: 2px 3px 4px;
  font-size:35px;
    `
export const Options = styled.div`
    display: flex;
`

export const List = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-around;
margin-right:30px;
font-size: medium;
color:white;
background: rgba(17, 24, 23, 0.747);
height:50px;
width:80px;
padding:3px;
border-radius: 3rem;

&:hover {background:black;
        cursor:pointer;}
`