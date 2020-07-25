import React from "react";
import {useQuery, gql} from "@apollo/client";
import {Grid} from "@material-ui/core";
import usePagination from "hooks/usePagination";
import CharacterCard from "components/CharacterCard/CharacterCard";
import Pagination from "components/Pagination/Pagination";

const CHARACTERS = gql`
    query getCharacters($page: Int!){
        characters(page: $page) {
            results {
                id
                name
                image
                gender
                status
                species
                location {
                    name
                }
                origin {
                    name
                }
            }
        }
    }
`

const Dashboard = () => {
  const {currentPage, nextPage, previousPage} = usePagination();
  const {loading, error, data} = useQuery(CHARACTERS, {variables: {page: currentPage}});

  if (loading) return <p>loading....</p>
  if (error) return <p>Something goes wrong</p>

  const {characters} = data;
  return (
    <>
      <Grid container spacing={1}>
        {
          characters.results.map((character) => (
            <Grid key={character.id} item xs={12} md={6} lg={3}>
              <CharacterCard
                character={character}
              />
            </Grid>
          ))
        }
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </Grid>
    </>
  );
}

export default Dashboard;
