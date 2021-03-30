import axios from "axios";
import { DogBreed } from "../../types/DogBreed.type";
import { getDogBreedImage } from "./dogImageService";

export async function getAllDogs(): Promise<DogBreed[]> {
  return axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
    const responseApi = response.data.message;
    const dogBreedsList = Object.keys(responseApi);
    if (response.data.status !== "success") {
      throw new Error("Houve um erro na requisição");
    }
    const dogBreedNames = Promise.all(
      dogBreedsList.map(async (breed) => {
        const image = await getDogBreedImage(breed);
        return {
          name: breed,
          image: image,
        } as DogBreed;
      })
    );
    return dogBreedNames;
  });
}
