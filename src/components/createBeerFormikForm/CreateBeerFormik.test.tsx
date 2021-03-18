import { shallow } from 'enzyme';
import CreateBeerFormik from './CreateBeerFormik';
import CreateBeerFormikView from './CreateBeerFormikView'
import { CreateBeerFormikTypes } from './CreateBeerFormik.types'

describe('CreateBeerFormik', () => {
    it('should render the view with the right props', () => {
        const wrapper = shallow(
            <CreateBeerFormik />
        )
        expect(wrapper.type()).toBe(CreateBeerFormikView);
    })

    it('should log values from the form in console', () => {

        const wrapper = shallow(
            <CreateBeerFormik />
        )
        console.log = jest.fn();
        const formValues: CreateBeerFormikTypes = {
            beerName: '',
            beerType: '',
            hasCorn: false,
            ingredients: ''
        }
        wrapper.invoke('onSubmit')(formValues);
        expect(console.log).toBeCalledWith(formValues)
    })
})