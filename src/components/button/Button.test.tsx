import Button from './Button';
import { shallow } from 'enzyme'

describe("Button", () => {
  it('should render the view with the right props', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Button onClick={mockFunction}>
        Children
    </Button>)
    wrapper.find('ButtonView').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
    expect(wrapper.text()).toEqual('<ButtonView />')
  });
})