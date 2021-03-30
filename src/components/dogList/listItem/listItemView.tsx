import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { capitalize } from 'lodash'

interface Props {
    name: string,
    image: string,
}
function DogListItemView ({ name, image} : Props) {
    return(
        <ListItem>
            <ListItemAvatar>
            <Avatar
                alt='Dog Image'
                src={image}
              />
            </ListItemAvatar>
            <ListItemText>{capitalize(name)}</ListItemText>
            
        </ListItem>
    )
}

export default DogListItemView;