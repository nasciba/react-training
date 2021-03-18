import { shallow } from 'enzyme';
import FormikInputText from './FormikInputText';
import fieldStyle from './fieldStyle.styles';
import TextField from '@material-ui/core/TextField'

jest.mock('./fieldStyle.styles');

describe('FormikInputText', () => {

    beforeEach(() => {
        (fieldStyle as jest.Mock).mockReturnValue({
            root: 'root'
        })
    })

    it('should render the right props', () => {
        const mockName = '';
        const mockLabel = 'Beer name';
        const mockValue = '';
        const mockErrors = '';
        const mockTouched = false;
        const mockOnChange = jest.fn()
        const mockOnBlur = jest.fn()
        const wrapper = shallow(
            <FormikInputText
                label={mockLabel}
                name={mockName}
                onChange={mockOnChange}
                value={mockValue}
                errors={mockErrors}
                touched={mockTouched}
                onBlur={mockOnBlur}

            />
        )

        expect(wrapper.props()).toMatchObject({
            value: '',
            name: '',
            label: 'Beer name',
            error: mockTouched && Boolean(mockErrors),
            onBlur: mockOnBlur,
            onChange: mockOnChange,
            helperText: mockTouched && mockErrors,
            variant: 'outlined',
            className: 'root'
            
        })
        expect(wrapper.type()).toBe(TextField);
    })

    
    it('should render correctly', () => {
        const mockName = '';
        const mockLabel = 'Beer name';
        const mockValue = '';
        const mockError = '';
        const mockTouched = false;
        const mockOnChange = jest.fn()
        const mockOnBlur = jest.fn()

        const wrapper = shallow(
            <FormikInputText
                label={mockLabel}
                name={mockName}
                onChange={mockOnChange}
                value={mockValue}
                errors={mockError}
                touched={mockTouched}
                onBlur={mockOnBlur}

            />
        )

        expect(wrapper.matchesElement(
            <TextField
                value={mockValue}
                name={mockName}
                label={mockLabel}
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                helperText={mockTouched && mockError}
                error={mockTouched && Boolean(mockError)}
                className='root'
                variant='outlined'
            />
        ))

    })

})