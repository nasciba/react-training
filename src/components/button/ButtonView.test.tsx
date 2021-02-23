import ButtonView from './ButtonView';
import { shallow } from 'enzyme';

describe("ButtonView", () => {     
      it('should render the view with the right props', () => {
      const mockFunction = jest.fn();
      const wrapper = shallow(<button onClick={mockFunction}>Clique aqui!</button>)
      wrapper.find('button').simulate('click');
      expect(mockFunction).toHaveBeenCalled();
      expect(wrapper.text()).toEqual('Clique aqui!')
    });
  
  })