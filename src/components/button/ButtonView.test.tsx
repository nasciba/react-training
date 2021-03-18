import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button'
import ButtonView from './ButtonView';

describe("ButtonView", () => {
  it('should render the view with the right props', () => {
    const mockFunction = jest.fn();
    
    const wrapper = shallow(<ButtonView type="button" onClick={mockFunction}>Clique aqui!</ButtonView>)
    expect(wrapper.matchesElement(

    
        <Button size='small' color='primary' type='submit' className='aClass' onClick={mockFunction}>
          Children
        </Button>
      
    ))
    wrapper.find(Button).simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

})