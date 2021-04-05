import React from "react";
import { shallow } from "enzyme";
import DogList from "../dogList/dogList/DogList";
import DogDetails from "../dogDetails/DogDetails";
import Spinner from "../spinner/Spinner";
import WrapperDogListView from "./WrapperDogListView";

describe("WrapperDogListView", () => {
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
      { name: "akita", image: "imageUrl" },
      { name: "african", image: "imageUrl" },
    ];
    const selectedBreedMock = {};

    const onSelectDogMock = jest.fn();
    const wrapper = shallow(
      <WrapperDogListView
        isLoading={isLoadingMock}
        dogBreedList={dogBreedListMock}
        selectedBreed={selectedBreedMock}
        onSelectDog={onSelectDogMock}
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
          <p>No breed selected</p>
        </>
      )
    ).toBe(true);
  });
  it("should return DogDetails component if isLoading is false and some breed was selected", () => {
    const isLoadingMock = false;
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
    expect(
      wrapper.matchesElement(
        <>
          <DogList
            dogBreedList={dogBreedListMock}
            selectedBreed={selectedBreedMock}
            onSelectDog={onSelectDogMock}
          />
          <DogDetails
            image={selectedBreedMock?.image}
            name={selectedBreedMock?.name}
          />
        </>
      )
    ).toBe(true);
  });
});
