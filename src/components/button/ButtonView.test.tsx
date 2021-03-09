import ButtonView from './ButtonView';
import { shallow } from 'enzyme';

describe("ButtonView", () => {     
      it('should render the view with the right props', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<ButtonView type="button" onClick={mockFunction}>Clique aqui!</ButtonView>)
      expect(wrapper.matchesElement(
        <>
            <button type="button" className="aClass" onClick={mockFunction}>
                Children
            </button>
        </>
      ))
    wrapper.find('button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
    });
  
  })