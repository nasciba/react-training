import React from "react";
import { shallow } from "enzyme";
import { once } from "lodash";
import { getAllDogs } from "../../services/dog/dogService";
import WrapperDogList from "./WrapperDogList";
import WrapperDogListView from "./WrapperDogListView";

jest.mock("../../services/dog/dogService");

describe("WrapperDogList", () => {
  afterEach(() => {
    const useStateMock = jest.spyOn(React, "useState");
    useStateMock.mockRestore();
  });

  it("should render the view with the right props", () => {
    const wrapper = shallow(<WrapperDogList />);

    expect(wrapper.type()).toBe(WrapperDogListView);

    expect(wrapper.props()).toMatchObject({
      dogBreedList: [],
    });
  });
  it("should get a list of dog breeds", () => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => once(f)());

    shallow(<WrapperDogList />);

    expect(getAllDogs).toBeCalled();
  });
  it("should find a dog breed in dogBreedList when onSelectDog is called", () => {
    const useState = React.useState;
    const dogBreedListStateMock = [
      { name: "african", image: "url" },
      { name: "akita", image: "url" },
    ];
    const selectedBreedMock = dogBreedListStateMock[1];
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => useState(dogBreedListStateMock));
    const wrapper = shallow(<WrapperDogList />);
    wrapper.invoke("onSelectDog")("akita");
    expect(wrapper.prop("selectedBreed")).toEqual(selectedBreedMock);
  });
  it("should return if there's no selected value", () => {
    const useState = React.useState;
    const dogBreedListStateMock = [
      { name: "african", image: "url" },
      { name: "akita", image: "url" },
    ];

    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => useState(dogBreedListStateMock));
    const wrapper = shallow(<WrapperDogList />);
    wrapper.invoke("onSelectDog")("");
    expect(wrapper.prop("selectedBreed")).toEqual({});
  });
});
