import React from "react";
import DogListItemView from "./listItemView";
import { DogBreed } from '../../../types/DogBreed.type';

interface Props {
  name: string;
  image: string;
  selectedBreed: DogBreed;
  onSelectDog: (dogsName: string) => void;
}

function DogListItem({ name, image, selectedBreed, onSelectDog }: Props) {
  return <DogListItemView name={name} image={image} selectedBreed={selectedBreed} onSelectDog={onSelectDog}/>;
}

export default DogListItem;
