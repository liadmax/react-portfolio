import React from 'react'
import { Container, Dis, Header, Role, Roller } from './ProjectsElements'

const Projects = () => {
  return (
    <Container>
        <Header>short project list</Header>
        <Dis> a short list of my latest projects</Dis>
        <Roller>
          <Role>img face ai</Role>
          <Role>img pizza website</Role>
          <Role>img scroll animation</Role>
          <Role>img car ai</Role>
          <Role>node registration</Role>
        </Roller>
    </Container>
  )
}

export default Projects