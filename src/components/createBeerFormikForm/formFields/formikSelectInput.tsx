import MenuItem from '@material-ui/core/MenuItem';
import fieldStyle from './fieldStyle.styles';
import TextField from '@material-ui/core/TextField';
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
    },
    children: {
        key: string,
        value: string
    }[],
}

function FormikSelectInput({ name, label, errors, children, value, touched, onChange, onBlur }: Props) {
    const classes = fieldStyle();
    return (
        <TextField
            select={true}
            variant='outlined'
            className={classes.root}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={touched && errors}
            error={touched && Boolean(errors)}
        >
            {
                children &&
                children.map((typeOfBeer: { key: string, value: string }) => {
                    return (
                        <MenuItem value={typeOfBeer.value} key={typeOfBeer.key}> {typeOfBeer.value} </MenuItem>
                    )
                })}

        </TextField>
    )
}

export default FormikSelectInput