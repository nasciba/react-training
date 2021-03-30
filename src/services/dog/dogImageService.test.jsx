import axios from "axios";
import { getDogBreedImage } from "./dogImageService";
jest.mock("axios");

describe("DogImageService", () => {
  it("should return a string with an image url", async () => {
    const mockPromise = { data: { message: "url" } };
    axios.get.mockImplementation(() => Promise.resolve(mockPromise));
    await expect(getDogBreedImage('akita')).resolves.toEqual(mockPromise)
    expect(axios.get).toHaveBeenCalledWith(
        'https://dog.ceo/api/breed/akita/images/random')
    
    })
});
