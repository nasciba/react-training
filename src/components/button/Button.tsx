import React, { ReactNode } from 'react';
import ButtonView from './ButtonView'

interface Props {
    onClick: () => void,
    children: ReactNode
}

const Button = ({children, onClick} : Props) => {
    return(
        <ButtonView onClick={onClick}>{children}</ButtonView>
    )
}

export default Button