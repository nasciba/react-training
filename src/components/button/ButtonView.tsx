import React, { ReactNode } from 'react';
import buttonStyle from './Button.style'

interface Props {
    onClick: () => void,
    children: ReactNode
}

const ButtonView = ({ children, onClick }: Props) => {
    const classes = buttonStyle()
    return (
        <>
            <button className={classes.root} onClick={onClick}>
                {children}
            </button>
        </>
        
    )
}

export default ButtonView