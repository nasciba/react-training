import React from "react";
import { DogBreed } from "../../types/DogBreed.type";
import { getAllDogs } from "../../services/dog/dogService";
import WrapperDogListView from "./WrapperDogListView";

function WrapperDogList() {
  const [dogBreedList, setDogBreedList] = React.useState<DogBreed[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selectedBreed, setSelectedBreed] = React.useState<DogBreed>(
    {} as DogBreed
  );

  const getAllDogBreeds = async () => {
    setIsLoading(true);
    try {
      const dogBreedList = await getAllDogs();
      setDogBreedList(dogBreedList);
    } finally {
      setIsLoading(false);
    }
  };

  const onScoldCounter = () => {
    const dogBreeds = dogBreedList.map((dog) => {
      if (dog.name.toLowerCase() === selectedBreed.name.toLowerCase())
        return { ...dog, scolds: dog.scolds + 1 };
      return dog;
    });
    setDogBreedList(dogBreeds);
  };

  const onSelectDog = (dogsName: string) => {
    const selectedBreed = dogBreedList.find(
      (breed) => breed.name.toLowerCase() === dogsName.toLowerCase()
    );
    if (!selectedBreed) return;
    setSelectedBreed(selectedBreed);
  };

  React.useEffect(() => {
    getAllDogBreeds();
  }, []);

  return (
    <WrapperDogListView
      dogBreedList={dogBreedList}
      isLoading={isLoading}
      selectedBreed={selectedBreed}
      onSelectDog={onSelectDog}
      onScoldCounter={onScoldCounter}
    />
  );
}

export default WrapperDogList;
