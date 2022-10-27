import styled from "styled-components";

export const Container = styled.div`
background: #000000;
height: 100vh;
width: 100vw;
`
export const Header = styled.h1`
color: #ffffff;

`
export const Section = styled.p`
color: #ffffff;

`
export const Open = styled.h2`
color: #ffffff;
`
export const Add = styled.h4`
color: #ffffff;
font-family: 'Courier New', Courier, monospace;
background: rgba(255, 255, 255, 0.2);
`

export const List = styled.ul`
display: grid;
background: rgba(236,236,236, 0.5); /*grey*/
border: #ffffff solid 3px;
border-radius: 10px;
width: 100vw;
height: 25vh;
margin-left: 2vw;
color: #ffffff;
`
export const Sub = styled.li`
border: solid 1.7px #000000;
background-color: lightblue;
font-family: 'Segoe UI';
margin-left: 10vw ;
margin-right: 10vw;
height: 7vh;
padding-top: 1%;
padding-left:8% ;
padding-right: 8%;
margin: 4%;
padding-bottom: 2%;
border-radius: 8px;
list-style: none;
color: #000000;
:hover{
background-color: rgba(178, 70, 98, 0.2);
color: #ffffff;
cursor: pointer;
border-radius: none;

};
`


