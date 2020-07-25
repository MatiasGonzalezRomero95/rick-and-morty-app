import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import {red, grey} from "@material-ui/core/colors";
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';

const ALIVE_STATUS = "Alive";
const DEAD_STATUS = "Dead";
const UNKNOWN_STATUS = "unknown";

const useStyles = makeStyles(theme => ({
  alive: {
    color: red.A400
  },
  dead: {
    color: grey.A100
  }
}));

const Status = ({name, status}) => {
  const classes = useStyles();
  const isAlive = status === ALIVE_STATUS;
  const isDead = status === DEAD_STATUS;
  const isUnknown = status === UNKNOWN_STATUS;

  if (isUnknown) {
    return (
      <Tooltip
        title={`We don't know if ${name} is dead or still alive`}
        placement="top"
      >
        <IconButton aria-label="">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </Tooltip>
    );
  }

  const statusClasses = clsx(classes.animatedItem, {
    [classes.alive]: isAlive,
    [classes.dead]: isDead
  });

  return (
    <Tooltip
      title={`${name} is ${status}`}
      placement="top"
    >
      <IconButton aria-label="">
        <FavoriteIcon className={statusClasses}/>
      </IconButton>
    </Tooltip>
  );
};

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
