import { ReactNode } from 'react';
import buttonStyle from './Button.styles';
import Button from '@material-ui/core/Button'

interface Props {
    onClick: () => void,
    children: ReactNode,
    type: "button" | "reset" | "submit" | undefined
}

function ButtonView({ type, children, onClick }: Props) {
    const classes = buttonStyle()
    return (
        <Button size='small' color='primary' type={type} className={classes.root} onClick={onClick}>
            {children}
        </Button>
    )
}

export default ButtonView