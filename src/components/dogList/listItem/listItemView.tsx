import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { capitalize } from "lodash";
import { DogBreed } from "../../../types/DogBreed.type";

interface Props {
  name: string;
  image: string;
  selectedBreed: DogBreed;
  scolds: number,
  onSelectDog: (dogsName: string) => void;
}
function DogListItemView({ name, image, onSelectDog, scolds, selectedBreed }: Props) {
  return (
    <ListItem
      button
      selected={selectedBreed?.name === name}
      onClick={() => onSelectDog(name)}
    >
      <ListItemAvatar>
        <Avatar alt="Dog Image" src={image} />
      </ListItemAvatar>
      <ListItemText primary={capitalize(name)} secondary={scolds}/>
    </ListItem>
  );
}

export default DogListItemView;
