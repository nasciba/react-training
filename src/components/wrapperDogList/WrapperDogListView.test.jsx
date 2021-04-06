import React from "react";
import { shallow } from "enzyme";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import DogList from "../dogList/dogList/DogList";
import DogDetails from "../dogDetails/DogDetails";
import Spinner from "../spinner/Spinner";
import Typography from "@material-ui/core/Typography";
import WrapperDogListView from "./WrapperDogListView";
import { wrapperDogListStyle } from "./WrapperDogList.styles";

jest.mock("./WrapperDogList.styles.ts");

describe("WrapperDogListView", () => {
  beforeEach(() => {
    wrapperDogListStyle.mockReturnValue({
      root: "root",
      card: "card",
      media: "media",
    });
  });
  it("should return a Spinner component if isLoading prop is true", () => {
    const isLoadingMock = true;
    const dogBreedListMock = [
      { name: "akita", image: "imageUrl" },
      { name: "african", image: "imageUrl" },
    ];
    const selectedBreedMock = { name: "akita", image: "imageUrl" };

    const onSelectDogMock = jest.fn();
    const wrapper = shallow(
      <WrapperDogListView
        isLoading={isLoadingMock}
        dogBreedList={dogBreedListMock}
        selectedBreed={selectedBreedMock}
        onSelectDog={onSelectDogMock}
      />
    );

    expect(wrapper.matchesElement(<Spinner />)).toBe(true);
  });
  it("should return a message if isLoading is false and no breed was selected", () => {
    const isLoadingMock = false;
    const dogBreedListMock = [
      { name: "akita", image: "imageUrl", scolds: 0 },
      { name: "african", image: "imageUrl", scolds: 0 },
    ];
    const selectedBreedMock = {};
    const onScoldCounterMock = jest.fn();
    const onSelectDogMock = jest.fn();
    const wrapper = shallow(
      <WrapperDogListView
        isLoading={isLoadingMock}
        dogBreedList={dogBreedListMock}
        selectedBreed={selectedBreedMock}
        onSelectDog={onSelectDogMock}
        onScoldCounter={onScoldCounterMock}
      />
    );
    expect(
      wrapper.matchesElement(
        <>
          <DogList
            dogBreedList={dogBreedListMock}
            selectedBreed={selectedBreedMock}
            onSelectDog={onSelectDogMock}
          />

          <Box className="root">
            <Card className="card">
              <CardMedia
                component="img"
                alt="dog"
                image="data:image/jpeg;base64,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"
                className="media"
              />
              <Typography variant="h5">Choose a dog breed!</Typography>
            </Card>
          </Box>
        </>
      )
    ).toBe(true);
  });
  it("should return DogDetails component if isLoading is false and some breed was selected", () => {
    const isLoadingMock = false;
    const dogBreedListMock = [
      { name: "akita", image: "imageUrl", scolds: 0 },
      { name: "african", image: "imageUrl", scolds: 0 },
    ];
    const selectedBreedMock = { name: "akita", image: "imageUrl", scolds: 0 };
    const onScoldCounterMock = jest.fn();
    const onSelectDogMock = jest.fn();
    const wrapper = shallow(
      <WrapperDogListView
        isLoading={isLoadingMock}
        dogBreedList={dogBreedListMock}
        selectedBreed={selectedBreedMock}
        onSelectDog={onSelectDogMock}
        onScoldCounter={onScoldCounterMock}
      />
    );
    expect(
      wrapper.matchesElement(
        <>
          <DogList
            dogBreedList={dogBreedListMock}
            selectedBreed={selectedBreedMock}
            onSelectDog={onSelectDogMock}
          />
          <Box className="root">
            <DogDetails
              image={selectedBreedMock.image}
              name={selectedBreedMock.name}
              onScoldCounter={onScoldCounterMock}
            />
          </Box>
        </>
      )
    ).toBe(true);
  });
});
