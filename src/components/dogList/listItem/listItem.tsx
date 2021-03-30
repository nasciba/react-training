import React from 'react';
import DogListItemView from './listItemView';

interface Props {
    name: string,
    image: string
}

function DogListItem({ name, image }: Props) {
    return(
        <DogListItemView name={name} image={image}/>
    )
}

export default DogListItem;