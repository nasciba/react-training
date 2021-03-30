import axios from "axios";
import { getAllDogs, getDogBreedImage } from "./dogService";

jest.mock("axios");

describe("DogService", () => {
  it("should make the request to the correct urls", async () => {
    const mockJsonPromise = { data: { message: [], status: "success" } };
    axios.get.mockImplementation(() => Promise.resolve(mockJsonPromise));
    await getAllDogs();
    expect(axios.get).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/list/all"
    );
    
  });

  it("should return a list with all dog breeds", async () => {
    const mockPromise = { data: { message: [], status: "success" } };
    axios.get.mockImplementation(() => Promise.resolve(mockPromise));
    const result = await getAllDogs();
    expect(result).toEqual([]);
  });

  it("should throw an error if status is not success", async () => {
    const mockPromise = { data: { message: [], status: "" } };
    axios.get.mockImplementation(() => Promise.resolve(mockPromise));
    try {
      await getAllDogs();
    } catch (error) {
      expect(error).toEqual(Error("Houve um erro na requisição"));
    }
  });

  it("should return an object with the breed name and an image url", async () => {
    const mockBreeds = [{ name: "akita", image: "someUrl" }];
    const mockPromise = { data: { message: "someUrl", status: "success" } };
    axios.get.mockImplementation(() => Promise.resolve(mockPromise));
    await getAllDogs();
    mockBreeds.map(async (breed) => {
      const dogBreedName = breed.name
      const image = await getDogBreedImage(breed.name);
      expect(image).toEqual(mockPromise);
      expect(axios.get).toHaveBeenCalledWith(
        `https://dog.ceo/api/breed/${dogBreedName}/images/random`
      );
      expect(axios.get).toHaveBeenCalledTimes(1);
      return {
        name: breed.name,
        image: image,
      };
    });
  });
});
