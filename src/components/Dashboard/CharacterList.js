import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import CharacterCard from "components/CharacterCard/CharacterCard";
import useCountRenders from "hooks/useCountRenders";

const CharacterList = ({isLoading, characters}) => {
    useCountRenders()

    if (isLoading) {
      // show a grid of character loading
      return (
        <>
          {
            Array.from(Array(4).keys()).map((item, index) => (
              <Grid key={index} item xs={12} md={6} lg={3}>
                <CharacterCard isLoading/>
              </Grid>))
          }
        </>
      )
    }

    return (
      <>
        {characters.results.map((character) => (
          <Grid key={character.id} item xs={12} md={6} lg={3}>
            <CharacterCard
              character={character}
            />
          </Grid>
        ))}
      </>
    );
  }
;

CharacterList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  characters: PropTypes.object,
};

// Memoize to avoid re render the pagination on dark mode switch change, or other changes
export default memo(CharacterList);
