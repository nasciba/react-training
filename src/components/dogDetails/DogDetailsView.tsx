import Box from "@material-ui/core/Box";
import Button from "../button/Button";
import cardStyle from "./DogDetails.styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { capitalize } from "lodash";

interface Props {
  image: string;
  name: string;
  onBark: () => void;
  onScoldCounter: () => void;
}

function DogDetailsView({ image, name, onBark, onScoldCounter }: Props) {
  const classes = cardStyle();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="dog"
        image={image}
        className={classes.media}
      />
      <Typography variant="h6" className={classes.typography}>
        {capitalize(name)}
      </Typography>
      <Box justifyContent="center" display="flex" flexWrap="wrap">
        <Button type="button" onClick={onBark}>
          Bark
        </Button>
        <Button type="button" onClick={onScoldCounter}>
          Scold
        </Button>
      </Box>
    </Card>
  );
}

export default DogDetailsView;
