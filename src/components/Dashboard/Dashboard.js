import React from "react";
import {useQuery, gql} from "@apollo/client";
import usePagination from "../../../src/hooks/usePagination";
import CharacterCard from "../CharacterCard/CharacterCard";
import {Grid} from "@material-ui/core";
import {IconButton} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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

  const handleNextPageClick = () => nextPage();
  const handlePreviousPageClick = () => previousPage();

  return (
    <>
      <Grid container spacing={1} >
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
        <IconButton
          onClick={handlePreviousPageClick}
        >
          <NavigateBeforeIcon/>
        </IconButton>
        <IconButton
          onClick={handleNextPageClick}
        >
          <NavigateNextIcon/>
        </IconButton>
      </Grid>
    </>
  );
}

export default Dashboard;
