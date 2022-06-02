import styled from 'styled-components'

export const Start = styled.div`
background: rgba(2,2,2,0,3);
background-image: 
  linear-gradient(to right, black, rgba(9, 9, 248, 0.925)), 
   url("./components/Gta5.jpg");
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin:2px;
padding:15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
width:100%;
box-shadow: 2px 2px 7px;
height:5vh;

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
export const Options = styled.ul`
    float:right;
    margin-right:20px;
    top:5px;
    position:relative;

`

export const List = styled.li`
display: inline-block;
align-items: center;
justify-content: space-between;
margin-right:30px;
margin-top:1px;
font-size: medium;
color:white;
height:30px;
width:85px;
padding:4px;
background: rgba(17, 24, 23, 0.747);
text-align:center;
border-radius:1em;

&:hover {background:black;
        border: 1px solid white;
        cursor:pointer;
      transition: .1s ease-in}
`