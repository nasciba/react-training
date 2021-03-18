import { shallow } from 'enzyme';
import { CreateBeerFormikTypes } from './CreateBeerFormik.types'
import CreateBeerFormikView from './CreateBeerFormikView';
import createBeerFormikStyles from './CreateBeerFormikStyle.styles';
import { Formik, Form, ErrorMessage, FormikValues, FormikComputedProps, FormikHelpers, FormikState, FormikHandlers, FormikTouched, FormikErrors } from 'formik';
import FormikInput from './formFields/FormikInputText';
import FormikInputCheckbox from './formFields/formikInputCheckbox';
import FormikSelectInput from './formFields/formikSelectInput';
import FormikInputTextarea from './formFields/formikInputTextArea'
import { typesOfBeer } from './typesOfBeer';
import Button from '@material-ui/core/Button';

jest.mock('./CreateBeerFormikStyle.styles.tsx')

describe("CreateBeerFormikView", () => {

    beforeEach(() => {
        (createBeerFormikStyles as jest.Mock).mockReturnValue({
            root: 'root',
            margins: 'margins'
        });
    });

    it('should render correctly', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmit} />
        )
        const formikWrapper = wrapper.find(Formik);
        expect(formikWrapper).toBeDefined();
        expect(formikWrapper.props()).toMatchObject({
            initialValues: {
                beerName: '',
                beerType: '',
                hasCorn: false,
                ingredients: ''
            }
        });
    })

    it('should render the form correctly', () => {
        const onSubmitMock = jest.fn();
        const validationSchemaMock = jest.fn();

        const mockPropsFormik: any = {
            onSubmit: onSubmitMock,
            initialValues: {
                beerName: '',
                beerType: '',
                hasCorn: false,
                ingredients: ''
            },

            validationSchema: validationSchemaMock
        }

        const mockFormikHandlers = {
            getFieldHelpers: jest.fn(),
            getFieldMeta: jest.fn(),
            getFieldProps: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleReset: jest.fn(),
            handleSubmit: jest.fn(),
        } as FormikHandlers;

        const touch: FormikTouched<FormikValues> = {
            beerName: false,
            beerType: false,
            hasCorn: false,
            ingredients: false,
        };

        const error: FormikErrors<FormikValues> = {
            beerName: '',
            beerType: '',
            hasCorn: '',
            ingredients: '',
        };

        const mockComputedProps: FormikComputedProps<FormikValues> = {
            dirty: false,
            isValid: false,
            initialValues: {
                beerName: '',
                beerType: '',
                hasCorn: false,
                ingredients: ''
            },
            initialErrors: error,
            initialTouched: touch,
        }
        const mockRegisteredField = {
            registerField: jest.fn(),
            unregisterField: jest.fn()
        }

        const mockPropsStateFormik = {
            touched: touch,
            errors: error,
            values: { beerName: 'Brahma', beerType: 'pilsen', hasCorn: true, ingredients: 'Water, corn.' },
            isSubmitting: false,
            isValidating: false,
            submitCount: 1,
        } as FormikState<FormikValues>

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const formWrapper = wrapper.find(Formik).renderProp('children')({ ...mockPropsFormik, ...mockPropsStateFormik, ...mockFormikHandlers })

        expect(formWrapper.matchesElement(
            <Form className={'root'}>
                <FormikInput
                    label='Beer name'
                    name='beerName'
                    errors={mockPropsStateFormik.errors.beerName}
                    touched={mockPropsStateFormik.touched.beerName}
                    value={mockPropsStateFormik.values.beerName}
                    onChange={mockFormikHandlers.handleChange}
                    onBlur={mockFormikHandlers.handleBlur}
                />
                <FormikSelectInput
                    label="Beer type"
                    name="beerType"
                    errors={mockPropsStateFormik.errors.beerName}
                    touched={mockPropsStateFormik.touched.beerName}
                    value={mockPropsStateFormik.values.beerType}
                    onChange={mockFormikHandlers.handleChange}
                    onBlur={mockFormikHandlers.handleBlur}
                >
                    {typesOfBeer}
                </FormikSelectInput>
                <FormikInputTextarea
                    label={'Ingredients'}
                    name={'ingredients'}
                    errors={mockPropsStateFormik.errors.beerName}
                    touched={mockPropsStateFormik.touched.beerName}
                    value={mockPropsStateFormik.values.ingredients}
                    onChange={mockFormikHandlers.handleChange}
                    onBlur={mockFormikHandlers.handleBlur}
                />
                <FormikInputCheckbox
                    label={'Contains corn'}
                    onChange={mockFormikHandlers.handleChange}
                    value={mockPropsStateFormik.values.hasCorn}
                    name={'hasCorn'}
                />
                <Button
                    color='primary'
                    type='submit'
                    disabled={!(mockComputedProps.isValid && mockComputedProps.dirty)}
                >
                    Save
                        </Button>
            </Form>
        )).toBe(true)
    })

    it('should handle the onSubmit event', () => {

        const propsHelpersFormik = {
            setStatus: jest.fn(),
            setErrors: jest.fn(),
            setSubmitting: jest.fn(),
            setTouched: jest.fn(),
            setValues: jest.fn(),
            setFieldValue: jest.fn(),
            setFieldError: jest.fn(),
            setFieldTouched: jest.fn(),
            validateForm: jest.fn(),
            validateField: jest.fn(),
            resetForm: jest.fn(),
            submitForm: jest.fn(),
            setFormikState: jest.fn(),
        } as FormikHelpers<FormikValues>;

        const formikHandlers = {
            getFieldHelpers: jest.fn(),
            getFieldMeta: jest.fn(),
            getFieldProps: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleReset: jest.fn(),
            handleSubmit: jest.fn(),
        } as FormikHandlers;

        const touch: FormikTouched<FormikValues> = {
            beerName: false,
            beerType: false,
            hasCorn: false,
            ingredients: false,
        };

        const error: FormikErrors<FormikValues> = {
            beerName: '',
            beerType: '',
            hasCorn: '',
            ingredients: '',
        };

        const propsStateFormik = {
            touched: touch,
            errors: error,
            values: { beerName: 'Brahma', beerType: 'pilsen', hasCorn: true, ingredients: 'Water, corn.' },
            isSubmitting: false,
            isValidating: false,
            submitCount: 1,
        } as FormikState<FormikValues>

        const onSubmitMock = jest.fn()

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        wrapper.invoke("onSubmit")(propsStateFormik.values, propsHelpersFormik);
        expect(propsHelpersFormik.setSubmitting).toHaveBeenCalledWith(false);
        expect(propsHelpersFormik.resetForm).toHaveBeenCalledTimes(1);

    })

    it('should throw a validation error if beerName is empty', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: '',
            beerType: 'ale',
            hasCorn: true,
            ingredients: 'Water and corn.'
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {
            expect(error.errors).toEqual(['Required'])
        }
    })

    it('should throw a validation error if beerType is empty', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: 'Nome Teste',
            beerType: '',
            hasCorn: true,
            ingredients: 'Water and corn.'
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {
            expect(error.errors).toEqual(['Required'])
        }
    })

    it('should throw a validation error if ingredients is empty', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: 'Nome Teste',
            beerType: 'ale',
            hasCorn: true,
            ingredients: ''
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {
            expect(error.errors).toEqual(['Required'])
        }
    })

    it('should throw a validation error if there are more than 200 characters in the Ingredients field', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: 'Cerveja de Teste',
            beerType: 'ale',
            hasCorn: true,
            ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique aliquet dolor et elementum. Etiam vel erat eu mi convallis consectetur et ut massa. Nullam ultricies dapibus suscipitac luctus nisi.'
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {

            expect(error.errors).toEqual(['Must be 200 characters or less'])
        }
    })

    it('should throw a validation error if there are less than 10 characters in the Ingredients field', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: 'Cerveja de Teste',
            beerType: 'ale',
            hasCorn: true,
            ingredients: 'Water.'
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {
            expect(error.errors).toEqual(['Must be 10 characters or more'])
        }
    })

    it('should throw a validation error if there are more than 15 characters in the Beer Name field', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: 'Cerveja com o Maior Nome do Mundo',
            beerType: 'ale',
            hasCorn: true,
            ingredients: 'Water and corn.'
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {
            expect(error.errors).toEqual(['Must be 15 characters or less'])
        }
    })


    it('should throw a validation error if there are less than 2 characters in the Beer Name field', () => {
        const onSubmitMock = jest.fn()

        const formValues: CreateBeerFormikTypes = {
            beerName: 'T',
            beerType: 'ale',
            hasCorn: true,
            ingredients: 'Water and corn.'
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const validationSchema = wrapper.prop('validationSchema');

        try {
            validationSchema.validateSync(formValues)
            fail()
        }
        catch (error) {
            expect(error.errors).toEqual(['Must be 2 characters or more'])
        }
    })

})
