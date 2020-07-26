import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from "@material-ui/core/Card";
import Box from '@material-ui/core/Box';
import {Grid} from '@material-ui/core'

const ANIMATION = "wave";

const LoadingCharacterCard = () => {
  return (
    <Card>
      {/* name and status*/}
      <Box mt={3} ml={2} mr={2} mb={2}>
        {/* name*/}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Skeleton animation={ANIMATION} width={100} variant="rect"/>
          <Skeleton animation={ANIMATION} variant="circle" width={20} height={20}/>
        </Grid>
      </Box>
      {/* gender*/}
      <Box mt={1} ml={2}>
        <Skeleton animation={ANIMATION} width={50} variant="text"/>
      </Box>
      {/* image */}
      <Box mt={2}>
        <Skeleton animation={ANIMATION} height={300} variant="rect"/>
      </Box>
      {/* character description */}
      <Box mt={1} ml={2} mr={2} mb={2}>
        <Skeleton animation={ANIMATION} variant="text"/>
      </Box>
      <Box ml={2} mr={2} mb={2}>
        <Skeleton animation={ANIMATION} width={50} variant="text"/>
      </Box>
    </Card>
  );
};

export default LoadingCharacterCard;
