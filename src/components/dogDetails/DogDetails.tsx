import React, { useState, useCallback } from 'react';
import DogDetailsView from './DogDetailsView';

interface Props {
    image: string,
    dogsName: string,
}

const DogDetails = (props: Props) => {
    const [count, setCount] = useState(0);

    const onCount = useCallback(() => {
        setCount(count + 1)
    }, [count])
    
    const onBark = useCallback(() => {
        alert ('Woof woof woof!')
    }, [])

    return (
            <DogDetailsView image={props.image} dogsName={props.dogsName} scolds={count} onCountScolds={onCount} onBark={onBark}/>
    )
}

export default DogDetails