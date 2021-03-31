import React from "react";
import { DogBreed } from "../../types/DogBreed.type";
import { getAllDogs } from "../../services/dog/dogService";
import WrapperDogListView from "./WrapperDogListView";

function WrapperDogList() {
  const [dogBreedList, setDogBreedList] = React.useState<DogBreed[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getAllDogBreeds = async () => {
    setIsLoading(true);
    try {
      const dogBreedList = await getAllDogs();
      setDogBreedList(dogBreedList);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getAllDogBreeds();
  }, []);

  return (
    <WrapperDogListView dogBreedList={dogBreedList} isLoading={isLoading} />
  );
}

export default WrapperDogList;
