import { shallow } from 'enzyme';
import formStyle from './CreateBeerFormView.style'
import CreateBeerFormView from './CreateBeerFormView';
import Button from '../button/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

jest.mock('./CreateBeerFormView.style')

describe('CreateBeerFormView', () => {

    beforeEach(() => {
        (formStyle as jest.Mock).mockReturnValue({
            root: 'root',
            margins: 'margins'
        })
    })


    it('should render correctly', () => {
        const mockHandleChange = jest.fn();
        const mockHandleCheckboxValue = jest.fn();
        const mockHandleSelectElement = jest.fn();
        const mockHandleSubmit = jest.fn();
        const mockBeername = 'Brahma';
        const mockHasCorn = false;
        const mockIngredients = "Water and corn."
        const mockBeerType = 'ale'


        const wrapper = shallow(
            <CreateBeerFormView
                beerName={mockBeername}
                beerType={mockBeerType}
                ingredients={mockIngredients}
                hasCorn={mockHasCorn}
                handleChange={mockHandleChange}
                handleCheckboxValue={mockHandleCheckboxValue}
                handleSelectElement={mockHandleSelectElement}
                handleSubmit={mockHandleSubmit}
            />)

        expect(wrapper.matchesElement(
            <FormControl
                className='root'
            >
                <TextField
                    label='Beer name'
                    name='beerName'
                    variant='outlined'
                    onChange={mockHandleChange}
                    className='margins'
                    value={mockBeername}
                />
                <TextField
                    select={true}
                    variant='outlined'
                    className='margins'
                    label='Beer type'
                    name='beerType'
                    onChange={mockHandleChange}
                    value={mockBeerType}
                >
                    <MenuItem color='primary' key='ale' value='ale'>
                        Ale
                    </MenuItem>
                    <MenuItem color='primary' key='lager' value='lager'>
                        Lager
                    </MenuItem>
                    <MenuItem color='primary' key='stout' value='stout'>
                        Stout
                    </MenuItem>
                    <MenuItem color='primary' key='pilsen' value='pilsen'>
                        Pilsen
                </MenuItem>
                </TextField>
                <TextField
                    label='Ingredients'
                    name='ingredients'
                    variant='outlined'
                    className='margins'
                    onChange={mockHandleChange}
                    value={mockIngredients}
                    multiline
                    rows={4}
                />
                <FormControlLabel
                    label='Contains corn'
                    labelPlacement='end'
                    className='margins'
                    control={
                        <Checkbox
                            onClick={mockHandleCheckboxValue}
                            name='hasCorn'
                            color='primary'
                            checked={mockHasCorn}
                        />
                    }
                />
                <Button type='submit' onClick={mockHandleSubmit}>Save</Button>
            </FormControl>

        )).toBe(true)
    })
})