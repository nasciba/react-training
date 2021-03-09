import React from 'react';
import { Field } from 'formik';

interface Props {
    name: string,
    label: string,
    type: string   
}

function FormikInput(props: Props) {
    return (
        <>
            <label>{props.label}</label>
            <Field  name={props.name} type={props.type}/>
        </>

    )
}

export default FormikInput