import Button from './Button';
import ButtonView from './ButtonView';
import { shallow } from 'enzyme'

describe("Button", () => {
  it('should render the view with the right props', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Button type="button" onClick={mockFunction}>
        Children
    </Button>)
    expect(wrapper.type()).toBe(ButtonView)
    expect(wrapper.props()).toMatchObject({
      "children": "Children",
      "onClick": mockFunction,
      "type": "button"
    });
  });

  it('should handle the onClick event', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Button type="button" onClick={mockFunction}>
        Children
    </Button>)
    wrapper.invoke("onClick")(1)
    expect(mockFunction).toHaveBeenCalledWith(1);
    
  })
})