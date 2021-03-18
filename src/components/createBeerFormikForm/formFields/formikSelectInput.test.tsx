import { shallow } from 'enzyme';
import FormikSelectInput from './formikSelectInput'
import MenuItem from '@material-ui/core/MenuItem';
import fieldStyle from './fieldStyle.styles';
import TextField from '@material-ui/core/TextField';

jest.mock('./fieldStyle.styles');

describe('FormikSelectInput', () => {

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
        const mockChildren = [{
            'key': 'ale',
            'value': 'ale'

        }]

        const wrapper = shallow(
            <FormikSelectInput
                name={mockName}
                label={mockLabel}
                value={mockValue}
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                touched={mockTouched}
                errors={mockErrors}
                children={mockChildren}
            />
        )
        expect(wrapper.matchesElement(
            <TextField
                select={true}
                variant='outlined'
                className='root'
                label={mockLabel}
                name={mockName}
                value={mockLabel}
                onChange={mockOnChange}
                onBlur={mockOnBlur}
                helperText={mockTouched && mockErrors}
                error={mockTouched && Boolean(mockErrors)}
            >
                {
                    mockChildren &&
                    mockChildren.map((typeOfBeer: { key: string, value: string }) => {
                        return (
                            <MenuItem value={typeOfBeer.value} key={typeOfBeer.key}> {typeOfBeer.value} </MenuItem>
                        )
                    })}

            </TextField>
        ))
    })
})