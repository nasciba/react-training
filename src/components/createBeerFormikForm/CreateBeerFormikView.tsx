import React, { isValidElement, useCallback, useMemo } from 'react';
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik';
import { CreateBeerFormikViewTypes } from './CreateBeerFormikView.types';
import { typesOfBeer } from './typesOfBeer';
import Button from '@material-ui/core/Button';
import FormikInput from './formFields/FormikInputText';
import FormikInputTextarea from './formFields/formikInputTextArea';
import FormikSelectInput from './formFields/formikSelectInput';
import formStyle from './CreateBeerFormikStyle.styles';
import FormikInputCheckbox from './formFields/formikInputCheckbox';

interface Props {
    onSubmit: (values: CreateBeerFormikViewTypes) => void,
}

function CreateBeerFormikView(props: Props) {
    const classes = formStyle()
    const initialValues: CreateBeerFormikViewTypes = useMemo(
        () => ({
            beerName: '',
            beerType: '',
            hasCorn: false,
            ingredients: ''
        }), [])


    const handleSubmit = useCallback(
        (values: CreateBeerFormikViewTypes, { setSubmitting, resetForm }) => {
            props.onSubmit(values);
            setSubmitting(false);
            resetForm()
        },
        [props.onSubmit]
    )

    const validationSchema = useMemo(
        () => {
            return Yup.object({
                beerName: Yup.string()
                    .required('Required')
                    .max(15, 'Must be 15 characters or less')
                    .min(2, 'Must be 2 characters or more'),
                beerType: Yup.string()
                    .required('Required'),
                ingredients: Yup.string()
                    .required('Required')
                    .max(200, 'Must be 200 characters or less')
                    .min(10, 'Must be 10 characters or more'),
            })
        }, []
    )

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            { ({ values, handleChange, isValid, errors, touched, dirty, handleBlur }) => (
                <Form className={classes.root}>
                    <FormikInput
                        label='Beer name'
                        name='beerName'
                        onChange={handleChange}
                        value={values.beerName}
                        errors={errors.beerName}
                        touched={touched.beerName}
                        onBlur={handleBlur}
                    />

                    <FormikSelectInput
                        label="Beer type"
                        name="beerType"
                        onChange={handleChange}
                        value={values.beerType}
                        errors={errors.beerType}
                        touched={touched.beerType}
                        onBlur={handleBlur}
                    >
                        {typesOfBeer}
                    </FormikSelectInput>
                    <FormikInputTextarea
                        label={'Ingredients'}
                        name={'ingredients'}
                        value={values.ingredients}
                        onChange={handleChange}
                        errors={errors.ingredients}
                        touched={touched.ingredients}
                        onBlur={handleBlur}

                    />
                    <FormikInputCheckbox
                        label={'Contains corn'}
                        onChange={handleChange}
                        value={values.hasCorn}
                        name={'hasCorn'}
                    />
                    <Button
                        color='primary'
                        type='submit'
                        disabled={!(isValid && dirty)}
                    >
                        Save
                        </Button>
                </Form>
            )}
        </Formik>
    )
}

export default CreateBeerFormikView