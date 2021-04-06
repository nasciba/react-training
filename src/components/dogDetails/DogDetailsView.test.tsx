import { shallow } from 'enzyme';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';
import cardStyle from './DogDetails.styles';
import { capitalize } from 'lodash';

jest.mock('./DogDetails.styles')

describe('DogDetailsView', () => {
    beforeEach(() => {
        (cardStyle as jest.Mock).mockReturnValue({
            root: 'root',
            media: 'media',
            typography: 'typography'
        });
    });

    const onBarkMock = jest.fn();
    const onScoldCounterMock = jest.fn();
    const nameMock = 'adolfo';
    const imageMock = 'anImage';
    it('should render correctly', () => {
        const wrapper = shallow(
            <DogDetailsView  image={imageMock} name={nameMock} onBark={onBarkMock} onScoldCounter={onScoldCounterMock} />
        )
        expect(wrapper.matchesElement(
            <Card className='root'>
                <CardMedia
                    component="img"
                    alt='dog'
                    image={imageMock}
                    className='media'>
                </CardMedia>
                <Typography variant='h6' className='typography'>
                    {capitalize(nameMock)}
                </Typography>
                <Box justifyContent='center' display='flex' flexWrap='wrap'>
                    <Button type="button" onClick={onBarkMock}>Bark</Button>
                    <Button type="button" onClick={onScoldCounterMock}>Scold</Button>
                </Box>
            </Card>
        )).toBe(true)
    })

})
