import React, { useState } from 'react';
import DogDetailsView from './DogDetailsView';

interface Props {
    image: string,
    dogsName: string,
}


const DogDetails = (props: Props) => {
    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1)
    }
    
    const makeDogBark = () => {
        alert ('au au au au')
    }

    return (
            <DogDetailsView image={props.image} dogsName={props.dogsName} scolds={count} countScolds={counter} bark={makeDogBark}/>
    )
}

export default DogDetails