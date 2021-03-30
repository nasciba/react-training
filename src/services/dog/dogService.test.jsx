import axios from "axios";
import { getAllDogs } from "./dogService";
jest.mock("axios");

describe("DogService", () => {
  it("should make the request to the correct urls", async () => {
    const mockJsonPromise = { data: { message: [] } };
    axios.get.mockImplementation(() => Promise.resolve(mockJsonPromise));
    await getAllDogs();
    expect(axios.get).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/list/all"
    );
  });

  it("should return a list with all dog breeds", async () => {
    const mockPromise = { data: { message: [] } };
    axios.get.mockImplementation(() => Promise.resolve(mockPromise));
    const result = await getAllDogs();
    expect(result).toEqual([]);
  });
});
