import React from 'react';
import { Typography, Box } from '@material-ui/core/';
import Button from '../button/Button';
import { Grid } from '@material-ui/core';
import cardStyle from './style';

interface Props {
    image: string,
    dogsName: string,
    bark: () => void
}

const DogDetailsView = (props: Props) => {
    const classes = cardStyle()
    
    return (
        <Grid  container className={classes.root}>
            <Box display="flex"  flexDirection="column" className={classes.media}>
                <img src={props.image} alt="Dog image" />
            </Box>
            <Typography component='p'>{props.dogsName}</Typography>
            <Button onClick={props.bark}>Bark</Button>
        </Grid>
    )
}

export default DogDetailsView