import React from "react";
import { DogBreed } from "../../../types/DogBreed.type";
import DogListView from "./DogListView";

interface Props {
  dogBreedList: DogBreed[];
}

function DogList({ dogBreedList }: Props) {
  return <DogListView dogBreedList={dogBreedList} />;
}

export default DogList;
