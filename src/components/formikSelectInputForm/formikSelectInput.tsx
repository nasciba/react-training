import React from 'react';
import { Field } from 'formik';
import { createBeerFormikStyles } from '../createBeerFormikForm/CreateBeerFormikStyle.styles'


interface Props {
    name: string,
    label: string,
    children: {
        key: string,
        value: string
    } [],
}

function FormikSelectInput({ name, label, children }: Props) {
    const classes = createBeerFormikStyles();

    return (
        <div className={classes.root}>
            <label> {label} </label>
            <Field as='select' name={name} >
                {
                    children &&
                    children.map((typeOfBeer: { key: string, value: string }) => {
                        return (
                            <option value={typeOfBeer.value} key={typeOfBeer.key}> {typeOfBeer.value} </option>
                        )
                    })}
            </Field>
        </div>
    )
}

export default FormikSelectInput