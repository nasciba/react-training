import { shallow } from 'enzyme';
import Box from '@material-ui/core/Box'
import CreateBeerFormView from './CreateBeerFormView'
import Button from '../button/Button'

describe('CreateBeerForm', () => {
    const mockFunction = jest.fn()
    const instanceMockFunction = mockFunction();

    it('should render elements correctly', () => {
        const wrapper = shallow(
            <CreateBeerFormView
                beerName={'Brahma'}
                beerType='ale'
                ingredients="Water and corn"
                hasCorn={false}
                handleChange={instanceMockFunction}
                handleCheckboxValue={instanceMockFunction}
                handleSelectElement={instanceMockFunction}
                handleSubmit={instanceMockFunction}
            />)
        expect(wrapper.matchesElement(
            <form>
                <Box display="flex" flexDirection="column">
                    <label>Beer name:
                    <input
                            type='text'
                            name="beerName"
                            value='Brahma'
                            onChange={mockFunction}
                        />
                    </label>
                    <label>Type:
                    <select
                            name="beerType" value='ale'
                            onChange={mockFunction}>
                            <option value="ale" > Ale</option>
                            <option value="lager">Lager</option>
                            <option value="stout">Stout</option>
                            <option value="pilsen">Pilsen</option>
                    </select>
                    </label>
                    <label>
                        Ingredients:
                    <textarea
                            value="Water and corn" name='ingredients' onChange={mockFunction}
                        />
                    </label>
                    <label>
                        Has corn?
                    <input type="checkbox" onClick={mockFunction} />
                    </label>
                    <Button type="submit" onClick={mockFunction}>Enviar</Button>
                </Box>
            </form>
        ))
    })
})