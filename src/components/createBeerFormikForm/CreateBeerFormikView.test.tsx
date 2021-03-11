import { shallow } from 'enzyme';
import { CreateBeerFormikTypes } from './CreateBeerFormik.types'
import CreateBeerFormikView from './CreateBeerFormikView';
import { createBeerFormikStyles } from './CreateBeerFormikStyle.styles';
import { Formik, Form, ErrorMessage, FormikValues, FormikHelpers, FormikState, FormikHandlers, FormikTouched, FormikErrors, FormikComputedProps } from 'formik';
import FormikInput from '../formikInputTextForm/FormikInputText';
import FormikSelectInput from '../formikSelectInputForm/formikSelectInput';
import FormikInputTextarea from '../formikTextareaForm/FormikInputTextArea'
import { typesOfBeer } from './typesOfBeer';
import Button from '@material-ui/core/Button';
import * as Yup from "yup";

jest.mock('./CreateBeerFormikStyle.styles.tsx')


describe("CreateBeerFormikView", () => {

    beforeEach(() => {
        (createBeerFormikStyles as jest.Mock).mockReturnValue({
            root: 'root',
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

        const propsFormik: any = {
            onSubmit: onSubmitMock,
            initialValues: {},
            validationSchema: validationSchemaMock
        }

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const formWrapper = wrapper.find(Formik).renderProp('children')({ ...propsFormik });

        expect(formWrapper.matchesElement(
            <Form className={'root'}>
                <FormikInput
                    label={"Beer name:"}
                    type={'text'}
                    name={'beerName'}
                />
                <ErrorMessage name="beerName" />
                <FormikSelectInput name="beerType" label="Type:">
                    {typesOfBeer}
                </FormikSelectInput>
                <ErrorMessage name="beerType" />
                <FormikInput
                    label={"Has corn?"}
                    type={'checkbox'}
                    name={'hasCorn'} />
                <FormikInputTextarea
                    name={'ingredients'}
                    label={'Ingredients:'}
                    type={'text'} />
                <ErrorMessage name="ingredients" />
                <Button variant="contained" color="primary" type='submit'>Save</Button>
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

        // const computedProps: FormikComputedProps<FormikValues> = {
        //     dirty: false,
        //     isValid: false,
        //     initialValues: {
        //         beerName: '',
        //         beerType: '',
        //         hasCorn: false,
        //         ingredients: ''
        //     },
        //     initialErrors: error,
        //     initialTouched: touch,
        // }

        // const propsRegisteredField = {
        //     registerField: jest.fn(),
        //     unregisterField: jest.fn()
        // }

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
            console.log(error.errors)
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
            console.log(error.errors)
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
            console.log(error.errors)
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
            console.log(error.errors)
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
            console.log(error.errors)
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
            console.log(error.errors)
            expect(error.errors).toEqual(['Must be 2 characters or more'])
        }
    })

    it.only('should render the correct error message if the user submits the form without the beer name', () => {
        const onSubmitMock = jest.fn();

        const formValues: CreateBeerFormikTypes = {
            beerName: '',
            beerType: 'ale',
            hasCorn: true,
            ingredients: 'Water and corn.'
        }
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

        const wrapper = shallow(
            <CreateBeerFormikView onSubmit={onSubmitMock} />
        )

        const propsFormik: any = {
            onSubmit: onSubmitMock,
            initialValues: {},
            validationSchema: jest.fn()
        }

        wrapper.invoke('onSubmit')(formValues, propsHelpersFormik);
        expect(propsHelpersFormik.resetForm).toHaveBeenCalled()
        const formWrapper = wrapper.find(Formik).renderProp('children')({ ...propsFormik}).find(ErrorMessage).at(0)
        expect(formWrapper.prop('name')).toEqual('beerName');
        expect(formWrapper.text()).toEqual("<ErrorMessage name='beerName' />Required")
        console.log(formWrapper.debug())

    
    })

})