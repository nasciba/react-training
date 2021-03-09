import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';
import CreateBeerFormView from './CreateBeerFormView'

describe('CreateBeerForm', () => {
    const mockFunction = jest.fn()
    const instanceMockFunction = mockFunction();

    it('should render the view with the right props', () => {
        const wrapper = shallow(
            <CreateBeerForm />
        )
        expect(wrapper.type()).toBe(CreateBeerFormView)
        expect(wrapper.props()).toMatchObject({
                beerName: "",
                beerType: "",
                ingredients: "",
                hasCorn: false,
                
        })
    })
})
