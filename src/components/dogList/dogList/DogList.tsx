import React from 'react';
import { DogBreed } from '../../../types/DogBreed.type';
import { getAllDogs } from '../../../services/dog/dogService';
import DogListView from './DogListView'

function DogList () {
  const [list, setList] = React.useState<DogBreed[]>([]);
  
  const getAllDogBreeds = async () => {
      const list = await getAllDogs();
      setList(list)
  }
  React.useEffect(() => {
      getAllDogBreeds()
  })

  return(
      <DogListView dogBreedsList={list}/>
  )
}

export default DogList;