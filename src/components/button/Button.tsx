import React, { ReactNode } from 'react';
import ButtonView from './ButtonView'

interface Props {
    onClick: () => void,
    children: ReactNode,
    type: "button" | "reset" | "submit" | undefined
}

const Button = ({type, children, onClick} : Props) => {
    return(
        <ButtonView type={type} onClick={onClick}>{children}</ButtonView>
    )
}

export default Button