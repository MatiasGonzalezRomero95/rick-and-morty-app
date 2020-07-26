import React, {useCallback} from "react";
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
import {pluralize, prefix} from 'utils/pluralize'

const useStyles = makeStyles(theme => ({
  card: {
    transition: 'all 0.8s ease-out'
  },
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
    origin,
    episode
  } = character;

  const handleExpandClick = useCallback(() => {
    setExpanded((expanded) => !expanded);
  }, [setExpanded]);

  return (
    <Card className={classes.card} data-testid='character-card'>
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
          <Typography variant="body2" component="p">
            {`${name} was present in ${episode.length} ${pluralize({ count: episode.length, noun: 'episode'})}. `}
            {`The ${prefix({ count: episode.length, prefixOne: 'first', prefixTwo: 'unique'})} episode of this character was `}
            <b>{episode[0].name}</b>
            {` emitted  ${episode[0].air_date}.`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
