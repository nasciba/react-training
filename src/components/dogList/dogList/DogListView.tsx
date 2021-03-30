import React from 'react';
import { DogBreed } from '../../../types/DogBreed.type';
import List from '@material-ui/core/List';
import DogListItem from '../listItem/listItem';

interface Props {
    dogBreedsList: DogBreed[]
} 

function DogListView({ dogBreedsList }: Props) {
    return(
        <List>
            {dogBreedsList.map((item) => {
               return <DogListItem 
                key={item.name}
                name={item.name} 
                image={item.image}
                />
            })}
        </List>
    )
}

export default DogListView;