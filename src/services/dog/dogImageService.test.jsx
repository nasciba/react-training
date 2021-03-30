import axios from "axios";
import { getDogBreedImage } from "./dogImageService";
jest.mock("axios");

describe("DogImageService", () => {
  it("should return a string with an image url", async () => {
    const mockPromise = { data: { message: "url", status: "success" } };
    axios.get.mockImplementationOnce(() => Promise.resolve(mockPromise));
    const dogBreedName = "akita";
    const image = await getDogBreedImage(dogBreedName);
    expect(image).toEqual("url");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://dog.ceo/api/breed/${dogBreedName}/images/random`
    );
  });

  it("should throw an error if status is not success", async () => {
    const mockPromise = { data: { message: 'url', status: "" } };
    const dogBreedName = "akita";
    axios.get.mockImplementation(() => Promise.resolve(mockPromise));
    try {
      await getDogBreedImage(dogBreedName);
    } catch (error) {
      expect(error).toEqual(Error('Não foi possível recuperar a imagem dessa raça.'));
    }
  });
});
