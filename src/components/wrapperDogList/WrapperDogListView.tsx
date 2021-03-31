import React from "react";
import DogList from "../dogList/dogList/DogList";
import { DogBreed } from "../../types/DogBreed.type";
import Spinner from "../spinner/Spinner";

interface Props {
  dogBreedList: DogBreed[];
  isLoading: boolean;
}
function WrapperDogListView({ dogBreedList, isLoading }: Props) {
  console.log(isLoading)
  return isLoading ? <Spinner /> : <DogList dogBreedList={dogBreedList} />;
}

export default WrapperDogListView;
