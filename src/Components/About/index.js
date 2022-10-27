import React from 'react'
import { Container, Header, Section, List, Open, Sub, Add, Port, Ship, Button } from './AboutElements'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const About = () => {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  function pullOne(){
    console.log('raect')
    
   
  };
  function pullTwo(){
    console.log('javascript')
  }
  function pullThree(){
    console.log('native')
  }
  function pullFour(){
    console.log('face ai')
  }
  function pullFive(){
    console.log('node.js')
    
  }


  function Nice(){
   console.log('look for the secret message somewhere')
 
      alert('ther is somthing you need to see.... copy this url and paste it in the browser: https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    
  }



  return (
  <>
  <Container>
    <Header>shorty CV</Header>
    <Section> Hi, I'm a full-stack developer from Israel,but currently i am traveling to world!</Section>
    <br />
    
    <List>
      <Open>a short list of my skill's</Open>
      <Add>i am constantly leaning and increasing this list!</Add>
      <Carousel responsive={responsive}>
  <div> <Sub onClick={pullOne}>specializing in REACT </Sub></div>
  <div> <Sub onClick={pullTwo}>javascript/TypeScript</Sub></div>
  <div><Sub onClick={pullThree}>REACT-native</Sub></div>
  <div><Sub onClick={pullFour}>AI face recognition</Sub></div>
  <div><Sub onClick={pullFive}> server side with node.js</Sub></div>
  <div><Sub onClick={pullFive}>ANGULAR</Sub></div>
</Carousel>
    </List>
    <Section>
     somting about the frameworks im working in and the projects i have done
    
    </Section>
    <Open>INCLUDING:</Open>
    
    <Port>
      <Ship>react.js</Ship>
      <Ship>react-native</Ship>
      <Ship>angular</Ship>
      
    </Port>
    <Button onClick={Nice} >click me !</Button>
   

    
  </Container>
   </>
  )
}

export default About