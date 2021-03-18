import { shallow } from 'enzyme';
import FormikInputCheckbox from './formikInputCheckbox';
import fieldStyle from './fieldStyle.styles';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

jest.mock('./fieldStyle.styles');

describe('FormikInputCheckBox', () => {

    beforeEach(() => {
        (fieldStyle as jest.Mock).mockReturnValue({
            root: 'root'
        })
    })
    it('should render correctly', () => {
        const mockName = 'hasCorn';
        const mockLabel = 'Contains corn'
        const mockValue = false
        const mockOnChange = jest.fn()

        const wrapper = shallow(
            <FormikInputCheckbox
                name={mockName}
                label={mockLabel}
                value={mockValue}
                onChange={mockOnChange}
            />
        )
        expect(wrapper.matchesElement(
            <FormControlLabel
                label={mockLabel}
                labelPlacement='end'
                className='root'
                control={
                    <Checkbox
                        name={mockName}
                        onChange={mockOnChange}
                        checked={mockValue}
                        color='primary'
                    />
                }
            />
        ))
    })
})