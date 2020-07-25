import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import Status from "components/CharacterCard/Status"
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    mainWidth: 345
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const CharacterCard = ({character}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {
    name,
    species,
    image,
    status,
    location,
    gender,
    origin
  } = character;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              {name}
            </Typography>
            <Status
              name={name}
              status={status}
            />
          </Grid>
        }
        subheader={gender}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={`${name}-image`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${gender} ${species} from ${origin.name} currently located at ${location.name}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Episode list goes here</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
}

export default CharacterCard;
