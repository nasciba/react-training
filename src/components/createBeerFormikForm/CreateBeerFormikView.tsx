import React, { useCallback, useMemo } from 'react';
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik';
import { CreateBeerFormikViewTypes } from './CreateBeerFormikView.types';
import { typesOfBeer } from './typesOfBeer';
import Button from '@material-ui/core/Button';
import FormikInput from '../formikInputTextForm/FormikInputText';
import FormikInputTextarea from '../formikTextareaForm/FormikInputTextArea';
import FormikSelectInput from '../formikSelectInputForm/formikSelectInput';
import { createBeerFormikStyles } from './CreateBeerFormikStyle.styles';

interface Props {
    onSubmit: (values: CreateBeerFormikViewTypes) => void,
}

function CreateBeerFormikView(props: Props) {
    const classes = createBeerFormikStyles()
    const initialValues: CreateBeerFormikViewTypes = useMemo(
        () => ({
            beerName: '',
            beerType: '',
            hasCorn: false,
            ingredients: ''
        }), [])

    const onClearForm = useCallback(
        ({ resetForm }) => {
            resetForm();
        },
        [initialValues]
    )

    const onSetSubmitting = useCallback(
        ( { setSubmitting }) => {
            setSubmitting(false)
        },
        [initialValues]
    )

    const handleSubmit = useCallback(
        (values: CreateBeerFormikViewTypes, { setSubmitting, resetForm }) => {
            props.onSubmit(values);
            console.log('aqui setSubmitting', typeof setSubmitting)
            onSetSubmitting({ setSubmitting });
            onClearForm({ resetForm });
        },
        [props.onSubmit]
    )



    const validationSchema = useMemo(
        () => {
            return Yup.object({
                beerName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .min(2, 'Must be 2 characters or more')
                    .required('Required'),
                beerType: Yup.string()
                    .required('Required'),
                ingredients: Yup.string()
                    .max(200, 'Must be 200 characters or less')
                    .min(10, 'Must be 10 characters or more')
                    .required('Required'),
            })
        }, []
    )

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            { () => (
                <Form className={classes.root}>
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
            )}
        </Formik>
    )
}

export default CreateBeerFormikView