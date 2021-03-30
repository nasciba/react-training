import Box from '@material-ui/core/Box';
import Button from '../button/Button';
import cardStyle from './DogDetails.styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface Props {
    image: string,
    name: string,
    scolds: number,
    onBark: () => void,
    onCount: () => void
}

function DogDetailsView({image, name, scolds, onBark, onCount}: Props) {
    const classes = cardStyle()

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt='dog'
                height='150'
                image={image}
                className={classes.media}>
            </CardMedia>
            <Typography variant='h6' className={classes.typography}>
                {name}
            </Typography>
            <Box justifyContent='center' display='flex' flexWrap='wrap'>
                <Button type='button' onClick={onBark}>Bark</Button>
                <Button type='button' onClick={onCount}>Scold</Button>
            </Box>
            <Typography variant="body1" component='p' className={classes.typography}>This dog has already been scolded {scolds} time(s)!</Typography>
        </Card>
    )
}

export default DogDetailsView