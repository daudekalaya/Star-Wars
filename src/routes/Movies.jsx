import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moviesThumbnail from "../assets/movies.jpeg";
import BackButton from "../components/BackButton";
import { Card, SimpleGrid, Text, Box, Image, HStack, Container, Heading } from "@chakra-ui/react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films");
      const data = await response.json();
      setMovies(data.results)
      // TODO: answer here
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getID = (url) => {
    const parsed = url?.split("/");
    return parsed[parsed.length - 2];
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Image src={moviesThumbnail} width="40px"/>
        <Heading as="h1" size="xl">Movies</Heading>
      </HStack>

      {!loading ? (
        <SimpleGrid columns={2} spacing={4}>
          {movies.length &&
            movies.map((movie, index) => (
              <Box>
                <Card height={"10"} textAlign={"center"}>
                  <Link to={"/star-wars/movies/" + getID(movie.url)}>{movie.title}</Link>
                </Card>
              </Box>
              // <div/> // TODO: replace this
            ))}
        </SimpleGrid>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default Movies;
