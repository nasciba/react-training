import TextField from '@material-ui/core/TextField';
import fieldStyle from './fieldStyle.styles';
import { FormikTouched, FormikErrors, FormikState, FormikValues } from 'formik';

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

function FormikInput({ name, label, value, errors, touched, onBlur, onChange }: Props) {
    const classes = fieldStyle();
    return (
        <TextField
            value={value}
            name={name}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            helperText={touched && errors}
            error={touched && Boolean(errors)}
            className={classes.root}
            variant='outlined'
        />
    )
}

export default FormikInput