import { shallow } from 'enzyme';
import DogListItem from './listItem';
import DogListItemView from './listItemView';

describe('DogListItem', () => {
    it('should render correctly', () => {
        const dog = {
            name: '',
            image: ''
        }
        const wrapper = shallow(
            <DogListItem name={dog.name} image={dog.image}/>
        )

        expect(wrapper.props()).toMatchObject({
            name: '',
            image: ''
        })

        expect(wrapper.type()).toBe(DogListItemView)
    })
})