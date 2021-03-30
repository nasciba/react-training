import React, { useState, useCallback } from 'react';
import DogDetailsView from './DogDetailsView';

interface Props {
    image: string,
    name: string,
}

const DogDetails = ({image, name}: Props) => {
    const [count, setCount] = useState(0);

    const onCount = useCallback(() => {
        setCount(count + 1)
    }, [count])
    
    const onBark = useCallback(() => {
        alert ('Woof woof woof!')
    }, [])

    return (
            <DogDetailsView image={image} name={name} scolds={count} onCount={onCount} onBark={onBark}/>
    )
}

export default DogDetails