import React, { ReactNode } from 'react';
import buttonStyle from './Button.style'

interface Props {
    onClick: () => void,
    children: ReactNode,
    type: "button" | "reset" | "submit" | undefined
}

const ButtonView = ({ type, children, onClick }: Props) => {
    const classes = buttonStyle()
    return (
        <>
            <button type={type} className={classes.root} onClick={onClick}>
                {children}
            </button>
        </>
        
    )
}

export default ButtonView