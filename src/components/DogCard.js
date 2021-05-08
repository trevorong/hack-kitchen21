import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
});

function DogCard(props){
    const classes = useStyles();

    return (
      <Card 
        className={classes.root} 
        raised={true} 
        style={{
            backgroundColor: props.selected ? '#FFED7A' : '#FFE',
        }}>
        <CardActionArea onClick={() => props.onClick(props.beenum)}>
          <CardHeader 
            title={props.name}
            subheader={props.scientific}/>
          <CardMedia
            className={classes.media}
            image={props.picture}
            title={props.name}
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



export default BeeInfo;