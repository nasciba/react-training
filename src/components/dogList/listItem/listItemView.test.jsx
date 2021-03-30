import { shallow } from 'enzyme';
import DogListItemView from './listItemView';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { capitalize } from 'lodash'


describe('DogListItemView', () => {
    it('should render correctly', () => {
        const dog = {
            name: 'Affenpinscher',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Borismindre.jpg/170px-Borismindre.jpg'
        }
        const wrapper = shallow(
            <DogListItemView name={dog.name} image={dog.image}/>
        )

        expect(wrapper.matchesElement(
            <ListItem>
            <ListItemAvatar>
            <Avatar
                alt='Dog Image'
                src={dog.image}
              />
            </ListItemAvatar>
            <ListItemText>{capitalize(dog.name)}</ListItemText>
            
        </ListItem>
        )).toBe(true)
    })
})