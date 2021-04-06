import React from "react";
import DogListItemView from "./listItemView";
import { DogBreed } from '../../../types/DogBreed.type';

interface Props {
  name: string;
  image: string;
  scolds: number
  selectedBreed: DogBreed;
  onSelectDog: (dogsName: string) => void;
}

function DogListItem({ name, image, selectedBreed, scolds, onSelectDog }: Props) {
  return <DogListItemView name={name} image={image} scolds={scolds} selectedBreed={selectedBreed} onSelectDog={onSelectDog}/>;
}

export default DogListItem;
