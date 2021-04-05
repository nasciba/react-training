import React from "react";
import { DogBreed } from "../../../types/DogBreed.type";
import DogListView from "./DogListView";

interface Props {
  dogBreedList: DogBreed[];
  onSelectDog: (dogsName: string) => void;
  selectedBreed: DogBreed;
}

function DogList({ dogBreedList, onSelectDog, selectedBreed }: Props) {
  return (
    <DogListView
      dogBreedList={dogBreedList}
      onSelectDog={onSelectDog}
      selectedBreed={selectedBreed}
    />
  );
}

export default DogList;
