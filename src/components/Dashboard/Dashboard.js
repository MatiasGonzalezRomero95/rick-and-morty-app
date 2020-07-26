import React from "react";
import {useQuery, gql} from "@apollo/client";
import {Grid} from "@material-ui/core";
import usePagination from "hooks/usePagination";
import CharacterCard from "components/CharacterCard/CharacterCard";
import MyPagination from "components/Pagination/MyPagination";

const CHARACTERS = gql`
    query getCharacters($page: Int!){
        characters(page: $page) {
            info {
                pages
                next
                prev
            }
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
                episode {
                    id
                    name
                    air_date
                }
            }
        }
    }
`

const Dashboard = () => {
    const {currentPage, setCurrentPage} = usePagination();
    const {loading, error, data} = useQuery(CHARACTERS, {variables: {page: currentPage}});

    if (error) return <p>Something goes wrong</p>

    if (loading) {
      return (
        <Grid container spacing={1}>
          {
            //show a grid of character loading
            Array.from(Array(30).keys()).map((item, index) => (
              <Grid key={index} item xs={12} md={6} lg={3}>
                <CharacterCard isLoading/>
              </Grid>
            ))
          }
        </Grid>)
    }

    const {characters} = data;
    const {pages: pagesCount} = characters.info;
    return (
      <>
        <Grid container spacing={1}>
          {characters.results.map((character) => (
            <Grid key={character.id} item xs={12} md={6} lg={3}>
              <CharacterCard
                character={character}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <MyPagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        </Grid>
      </>
    );
  }
;

export default Dashboard;
