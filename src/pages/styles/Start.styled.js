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

@media(max-width: 1200px ) {
  height:45vh;
  display:flex;
  flex-direction:column;
  padding:8px;
}

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

  @media(max-width:1400px){
    font-size:25px;
    margin:7px;
    display:flex;
    font-weight:bold;
  }
    `
export const Options = styled.ul`
    float:right;
    margin-right:20px;
    top:5px;
    position:relative;

    @media(max-width:800px) {
      display:flex;
      flex-direction:column;
      margin-top:3px;
    }
`

export const List = styled.li`
display: inline-block;
align-items: center;
justify-content: space-between;
margin-right:30px;
margin-top:1px;
font-size: medium;
font-weight:bold;
color:white;
height:30px;
width:120px;
padding:4px;
background: rgba(17, 24, 23, 0.747);
text-align:center;
border-radius:1em;

&:hover {background:black;
        cursor:pointer;
      transition: .1s ease-in}

@media(max-width: 900px) {
  margin-top:4px;
  width:350px;
}


`
export const Search = styled.input`
  height:35px;
  width:150px;
  border:1px solid blue;
  border-radius:4rem;
  padding-left:20px;
  padding-right:20px;

  @media(max-width:1200px) {
    width:350px;
    border-radius:4rem 0 0 4rem;
  }
`

export const SeacrhBox = styled.div`
  border-radius: 4em;
  margin-right: 20px;
  margin-left:20px;
  margin-top: 0;

  @media(max-width:1400px) {
    margin-right:2px;
    margin-left:5px;
  }
`
export const Flexed = styled.div`
  display:flex;
  flex-direction:center;
  justify-content:space-around;
  align-items:center;
`
export const SearchButton = styled.button`
  position: relative;
  background-color: black;
  color: white;
  border-radius:0 1.5rem 1.5rem 0;
  border:1px solid blue;
  height:35px;
  font-weight: bold;
  font-size:large;
  display:none;

  @media(max-width:1200px) {
    display:inline;
  }
`