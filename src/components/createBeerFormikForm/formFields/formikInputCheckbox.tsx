import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import fieldStyle from './fieldStyle.styles'

interface Props {
    name: string,
    label: string,
    value: boolean,
    onChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }

}

function FormikInputCheckbox(props: Props) {
    const classes = fieldStyle();

    return (
        <FormControlLabel
            label={props.label}
            labelPlacement='end'
            className={classes.root}
            control={
                <Checkbox
                    name={props.name}
                    onChange={props.onChange}
                    checked={props.value}
                    color='primary'
                />
            }
        />
    )
}


export default FormikInputCheckbox;