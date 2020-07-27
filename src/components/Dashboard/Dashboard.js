import React from "react";
import {useQuery, gql} from "@apollo/client";
import usePagination from "hooks/usePagination";
import useSearch from "hooks/useSearch";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box'
import MyPagination from "components/Pagination/MyPagination";
import CharacterList from "components/Dashboard/CharacterList";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';

const CHARACTERS = gql`
    query getCharacters($page: Int!, $name: String){
        characters(page: $page, filter:{
            name: $name
        }) {
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

const useStyles = makeStyles((theme) => ({
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: '1000',
    background: theme.palette.background.default,
    transition: 'background 0.8s ease-out'
  }
}));

const Dashboard = () => {
    const classes = useStyles();
    const {currentPage, setCurrentPage} = usePagination();
    const {name, handleNameChange} = useSearch("");

    const {loading, error, data = {}} = useQuery(CHARACTERS, {
      variables: {
        page: currentPage,
        name: name
      }
    });

    const {characters = {info: {}}} = data;
    const {pages: pagesCount = 0} = characters.info;

    return (
      <>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.sticky}
        >
          <Box mb={2} mt={2}>
            <TextField
              label="Search by name"
              onChange={handleNameChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon/>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Grid>
        <Grid container spacing={1}>
          {error && <p> No results to show..</p>}
          {!error && <CharacterList isLoading={loading} characters={characters}/>}
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
