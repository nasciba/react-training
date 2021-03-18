import { shallow } from 'enzyme';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';
import cardStyle from './DogDetails.style';

jest.mock('./DogDetails.style')

describe('DogDetailsView', () => {
    beforeEach(() => {
        (cardStyle as jest.Mock).mockReturnValue({
            root: 'root',
            media: 'media',
            typography: 'typography'
        });
    });

    const onBark = jest.fn();
    const instanceOnBark = onBark()
    const onCountScolds = jest.fn();
    const instanceOnCountScolds = onCountScolds

    it('should render correctly', () => {
        const wrapper = shallow(
            <DogDetailsView scolds={0} image={'anImage'} dogsName={"Adolfo"} onBark={onBark} onCountScolds={onCountScolds} />
        )
        expect(wrapper.matchesElement(
            <Card className='root'>
                <CardMedia
                    component="img"
                    alt='dog'
                    height='150'
                    image='anImage'
                    className='media'>
                </CardMedia>
                <Typography variant='h6' className='typography'>
                    Adolfo
                </Typography>
                <Box justifyContent='center' display='flex' flexWrap='wrap'>
                    <Button type="button" onClick={instanceOnBark}>Bark</Button>
                    <Button type="button" onClick={instanceOnCountScolds}>Scold</Button>
                </Box>
                <Typography variant="body1" component='p' className='typography'>This dog has already been scolded {0} time(s)!</Typography>
            </Card>
        )).toBe(true)
    })

})
