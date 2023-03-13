import React from "react"
import { Link, Outlet } from "react-router-dom"
import people from "../assets/people.jpeg"
import planets from "../assets/planets.jpeg"
import movies from "../assets/movies.jpeg"
import { Container } from "@chakra-ui/react"
import { Card, Image, SimpleGrid, Text, CardBody } from "@chakra-ui/react"

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200} textAlign={"center"}>
        <Card>
        <Link to="/star-wars/people" style={{margin:"20px"}}>People</Link>
        </Card>
        <Card>
        <Link to="/star-wars/planets" style={{margin:"20px"}}>Planets</Link>
        </Card>
        <Card>
        <Link to="/star-wars/movies" style={{margin:"20px"}}>Movies</Link>
        </Card>
        {/* <Link to="/star-wars/planets">Planets</Link>
        <Link to="/star-wars/movies">Movies</Link> */}
        {/* TODO: answer here */}
      </SimpleGrid>
    </Container>
  )
}

export default Home
