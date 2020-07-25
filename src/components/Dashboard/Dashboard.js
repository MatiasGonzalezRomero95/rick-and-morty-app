import React from "react";
import {useQuery, gql} from "@apollo/client";
import CharacterCard from "../CharacterCard/CharacterCard";
import {Grid} from "@material-ui/core";

const CHARACTERS = gql`
  {
  characters(page: 1) {
    results {
      id
      name
      image
      gender
    }
  }
}
`

const Dashboard = () => {
  const {loading, error, data} = useQuery(CHARACTERS);

  if (loading) return <p>loading....</p>
  if (error) return <p>Something goes wrong</p>

  return (
    <>
      <h2>Rick and morty app</h2>
      <Grid container spacing={1}>
        {
          data.characters.results.map((character) => (
            <Grid key={character.id} item xs={12} md={6} lg={3}>
              <CharacterCard
                character={character}
              />
            </Grid>
          ))
        }
      </Grid>

    </>
  );
}

export default Dashboard;

