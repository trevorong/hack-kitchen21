import "../App.css";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import { findByLabelText } from "@testing-library/dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56%",
  },
});

function DogCard(props) {
  /*
        MAIN PROPS:
        imageURL
        breed
    */
  const classes = useStyles();

  return (
    <Card
      className="Card"
      raised={true}
    >
      <CardActionArea onClick={() => {}}>
        <CardMedia
          className="CardMedia"
          image={props.imageURL}
          title={props.breed}
        />
        <CardHeader 
          title={props.breed}
          subheader={props.secondaryName}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DogCard;
