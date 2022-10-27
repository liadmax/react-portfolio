import styled from "styled-components";

export const Container = styled.div`
background: #000000;
height: 90vh;
width: 100vw;
`
export const Header = styled.h1`
color: #ffffff;
padding-left: 10vw;
padding-right: 10vw;
@media and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-left: 0;
    width: 50vw;
    height: 50vh;
    margin-top: 5vh;
}
`
export const Section = styled.p`
color: #ffffff;
padding-left: 10vw;
padding-right: 10vw;
@media and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-left: 0;
    width: 50vw;
    height: 50vh;
    margin-top: 5vh;
}

`
export const Open = styled.h2`
color: #ffffff;
padding-left: 10vw;
padding-right: 10vw;
@media and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-left: 0;
    width: 50vw;
    height: 50vh;
    margin-top: 5vh;
}
`
export const Add = styled.h4`
color: #ffffff;
padding-left: 10vw;
padding-right: 10vw;
font-family: 'Courier New', Courier, monospace;
background: rgba(255, 255, 255, 0.2);
@media and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-left: 0;
    width: 50vw;
    height: 50vh;
    margin-top: 5vh;
}

:hover{
    background: rgba(255, 255, 0, 0.5);
    transition: all 0.5s ease-in-out;


}
`

export const List = styled.ul`
display: grid;

background: rgba(236,236,236, 0.5); /*grey*/
border: #ffffff solid 3px;
border-radius: 10px;
width: 90vw;
height: 25vh;
margin-left: 2vw;
color: #ffffff;


@media and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-left: 0;
    width: 50vw;
    height: 50vh;
    margin-top: 5vh;
}
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
transform: scale(1.1);
    transition: all 0.5s ease-in-out;

};
`


export const Port = styled.ul`
display: grid;
padding-left: 10vw;
padding-right: 10vw;
background: rgba(236,236,236, 0.5); /*grey*/
border: #ffffff solid 3px;
border-radius: 10px;
margin-right: 2vw;
width: 45vw;
height: 25vh;
margin-left: 2vw;
color: #ffffff;
`

export const Ship = styled.li`
border: solid 1.7px rgb(236,236,236);
background-color: lightblue;
font-family: 'Segoe UI';
margin: 5px;

border-radius: 8px;
list-style: none;
color: #000000;
:hover{
background-color: rgba(178, 70, 98, 0.2);
color: #ffffff;
cursor: pointer;
border-radius: none;
transform: scale(1.01);
    transition: all 0.5s ease-in-out;

};
`

export const Button = styled.button`
background: #ffffff;
color:#000000;
border-radius: 8px;
margin-left: 8vw;
height: 10vh;
width: 20vw;
cursor: pointer;
:hover{
cursor: pointer;
float: right;
margin-right: 8vw;


}


`





