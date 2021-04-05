import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';
import CreateBeerFormView from './CreateBeerFormView'

describe('CreateBeerForm', () => {

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

    it('should handle the onSubmit event', () => {
        
        const wrapper = shallow(
            <CreateBeerForm
            />
        )
        console.log = jest.fn();
        wrapper.invoke('handleSubmit')();
        expect(console.log).toHaveBeenCalled()
 
    })
})
