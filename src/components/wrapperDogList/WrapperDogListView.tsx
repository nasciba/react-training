import React from "react";
import DogList from "../dogList/dogList/DogList";
import { DogBreed } from "../../types/DogBreed.type";
import Spinner from "../spinner/Spinner";
import DogDetails from "../dogDetails/DogDetails"


interface Props {
  dogBreedList: DogBreed[];
  isLoading: boolean;
  selectedBreed: DogBreed;
  onSelectDog: (dogsName: string) => void;
}
function WrapperDogListView({
  dogBreedList,
  isLoading,
  selectedBreed,
  onSelectDog,
}: Props) {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <DogList
        dogBreedList={dogBreedList}
        selectedBreed={selectedBreed}
        onSelectDog={onSelectDog}
      />

      {selectedBreed.name ? (
        <DogDetails image={selectedBreed?.image} name={selectedBreed?.name} />
      ) : (
        <p>No breed selected</p>
      )}
    </>
  );
}

export default WrapperDogListView;
