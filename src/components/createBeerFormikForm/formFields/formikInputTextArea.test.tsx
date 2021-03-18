import { shallow } from 'enzyme';
import FormikInputTextArea from './formikInputTextArea';
import fieldStyle from './fieldStyle.styles';
import TextField from '@material-ui/core/TextField'

jest.mock('./fieldStyle.styles');

describe('FormikInputTextArea', () => {

    beforeEach(() => {
        (fieldStyle as jest.Mock).mockReturnValue({
            root: 'root'
        })
    })

    it('should render correctly', () => {
        const mockName = 'ingredients';
        const mockLabel = 'Ingredients'
        const mockValue = ''
        const mockOnChange = jest.fn()
        const mockTouched = false
        const mockOnBlur = jest.fn()
        const mockErrors = ''

        const wrapper = shallow(
            <FormikInputTextArea
                name={mockName}
                label={mockLabel}
                value={mockValue}
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                touched={mockTouched}
                errors=''
            />
        )
        expect(wrapper.matchesElement(
            <TextField
                label={mockLabel}
                name={mockName}
                variant='outlined'
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                value={mockValue}
                multiline
                className='root'
                rows={4}
                helperText={mockTouched && mockErrors}
                error={mockTouched && Boolean(mockErrors)}
            />
        ))
    })
})