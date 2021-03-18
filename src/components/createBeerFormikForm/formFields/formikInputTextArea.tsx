import React from 'react';
import TextField from '@material-ui/core/TextField';
import fieldStyle from './fieldStyle.styles';
import { FormikTouched, FormikErrors } from 'formik';

interface Props {
    name: string,
    label: string,
    value: string,
    errors: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined,
    touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined,
    onBlur: (e: any) => void,
    onChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
}

function FormikInputTextarea({ name, errors, label, value, touched, onChange, onBlur }: Props) {
    const classes = fieldStyle();
    return (
        <TextField
            label={label}
            name={name}
            variant='outlined'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            multiline
            className={classes.root}
            rows={4}
            helperText={touched && errors}
            error={touched && Boolean(errors)}
        />
    )
}

export default FormikInputTextarea