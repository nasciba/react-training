import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import DogDetails from './DogDetails';

describe("DogDetails", () => {

    it('should render the view with the right props', () => {
        const wrapper = shallow(
            <DogDetails image={"anImage"}
                dogsName={"Adolfo"}
            />
        );

        expect(wrapper.type()).toBe(DogDetailsView);
        expect(wrapper.props()).toMatchObject({
            "image": "anImage",
            "dogsName": "Adolfo",

        });
    });

    it('should update the counter to a new value', () => {
        const wrapper = shallow(
            <DogDetails image={"anImage"}
                dogsName={"Adolfo"}
            />
        );
        wrapper.invoke('onCountScolds')();

        expect(wrapper.prop('scolds')).toBe(1);

    })

    it('should show an alert when the Bark button is clicked', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        const wrapper = shallow(
            <DogDetails image={"anImage"}
                dogsName={"Adolfo"}
            />
        );
        wrapper.invoke('onBark')();
        expect(window.alert).toBeCalled();

    })


})

