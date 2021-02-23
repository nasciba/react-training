import React from 'react';
import DogDetailsView from './DogDetailsView';

interface Props {
    image: string,
    dogsName: string,
}


const DogDetails = (props: Props) => {
    
    const makeDogBark = () => {
        alert ('auauauau')
    }

    return (
            <DogDetailsView image={props.image} dogsName={props.dogsName} bark={makeDogBark}/>
    )
}

export default DogDetails