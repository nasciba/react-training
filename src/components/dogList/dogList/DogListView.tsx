import React from 'react';
import { DogBreed } from '../../../types/DogBreed.type';
import List from '@material-ui/core/List';
import DogListItem from '../listItem/listItem';

interface Props {
    dogBreedList: DogBreed[]
} 

function DogListView({ dogBreedList }: Props) {
    return(
        <List>
            {dogBreedList.map((item) => {
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