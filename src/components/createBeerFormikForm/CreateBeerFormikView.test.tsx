import { shallow } from 'enzyme';
import CreateBeerFormikView from './CreateBeerFormikView';
import { createBeerFormikStyles } from './CreateBeerFormikStyle.styles'
import { Formik, Form, ErrorMessage, FormikValues, FormikHelpers, FormikState, FormikHandlers, FormikTouched, FormikErrors, FormikComputedProps } from 'formik';
import FormikInput from '../formikInputTextForm/FormikInputText';
import FormikSelectInput from '../formikSelectInputForm/formikSelectInput';
import FormikInputTextarea from '../formikTextareaForm/FormikInputTextArea'
import { typesOfBeer } from './typesOfBeer';
import Button from '@material-ui/core/Button';
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
        const mock = jest.fn();

        const propsHelpersFormik = {
            setStatus: mock(),
            setErrors: mock(),
            setSubmitting: mock(),
            setTouched: mock(),
            setValues: mock(),
            setFieldValue: mock(),
            setFieldError: mock(),
            setFieldTouched: mock(),
            validateForm: mock(),
            validateField: mock(),
            resetForm: mock(),
            submitForm: mock(),
            setFormikState: mock()
        } as FormikHelpers<FormikValues>

        const formikHandlers = {
            getFieldHelpers: mock(),
            getFieldMeta: mock(),
            getFieldProps: mock(),
            handleBlur: mock(),
            handleChange: mock(),
            handleReset: mock(),
            handleSubmit: mock(),
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

        const computedProps: FormikComputedProps<FormikValues> = {
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

        const propsRegisteredField = {
            registerField: mock(),
            unregisterField: mock()
        }

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

        wrapper.find(Formik).invoke("onSubmit")(propsStateFormik.values,
            { ...propsHelpersFormik.setSubmitting, ...propsHelpersFormik.resetForm } as FormikHelpers<FormikValues>);
        expect(onSubmitMock).toHaveBeenCalledWith(propsStateFormik.values);
        expect(propsHelpersFormik.setSubmitting).toHaveBeenCalledWith(false);
        expect({...propsHelpersFormik.resetForm}).toHaveBeenCalled()
        const formWrapper = wrapper.find(Formik).renderProp('children')
            ({ ...propsStateFormik, ...propsHelpersFormik, ...formikHandlers, ...computedProps, ...propsRegisteredField })
        //     
        //console.log(formWrapper.find(FormikInput).debug())
        // wrapper.find(Formik).invoke("onSubmit")(propsStateFormik.values,
        //     { ...propsHelpersFormik.setSubmitting } as FormikHelpers<FormikValues>)
        //expect(propsStateFormik.values.beerName).toEqual(computedProps.initialValues.beerName)
        //wrapper.find(Formik).invoke("onSubmit")(propsStateFormik.values, { propsHelpersFormik.setSubmitting, resetFormMock });

        //

    })


})