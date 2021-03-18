import Box from '@material-ui/core/Box';
import Button from '../button/Button';
import cardStyle from './DogDetails.style';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface Props {
    image: string,
    dogsName: string,
    scolds: number,
    onBark: () => void,
    onCountScolds: () => void
}

function DogDetailsView(props: Props) {
    const classes = cardStyle()

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt='dog'
                height='150'
                image={props.image}
                className={classes.media}>
            </CardMedia>
            <Typography variant='h6' className={classes.typography}>
                {props.dogsName}
            </Typography>
            <Box justifyContent='center' display='flex' flexWrap='wrap'>
                <Button type="button" onClick={props.onBark}>Bark</Button>
                <Button type="button" onClick={props.onCountScolds}>Scold</Button>
            </Box>
            <Typography variant="body1" component='p' className={classes.typography}>This dog has already been scolded {props.scolds} time(s)!</Typography>
        </Card>
    )
}

export default DogDetailsView