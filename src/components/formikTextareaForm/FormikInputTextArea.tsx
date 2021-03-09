import React from 'react';
import { Field } from 'formik';
import { createBeerFormikStyles } from '../createBeerFormikForm/CreateBeerFormikStyle.styles'


interface Props {
    name: string,
    label: string,
    type: string
}

function FormikInputTextarea(props: Props) {
    const classes = createBeerFormikStyles();
    return (
        <div className={classes.root}>
            <label>{props.label}</label>
            <Field as='textarea' name={props.name} type={props.type} />
        </div>

    )
}

export default FormikInputTextarea