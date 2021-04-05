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
  onSelectDog: (dogsName: string) => void;
}
function DogListItemView({ name, image, onSelectDog, selectedBreed }: Props) {
  return (
    <ListItem
      button
      selected={selectedBreed?.name === name}
      onClick={() => onSelectDog(name)}
    >
      <ListItemAvatar>
        <Avatar alt="Dog Image" src={image} />
      </ListItemAvatar>
      <ListItemText>{capitalize(name)}</ListItemText>
    </ListItem>
  );
}

export default DogListItemView;
