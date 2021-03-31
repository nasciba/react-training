import React from "react";
import { shallow } from "enzyme";
import { once } from "lodash";
import { getAllDogs } from "../../services/dog/dogService";
import WrapperDogList from "./WrapperDogList";
import WrapperDogListView from "./WrapperDogListView";

jest.mock("../../services/dog/dogService");

describe("DogList", () => {
  /* it("should render the view with the right props", () => {
    const wrapper = shallow(<WrapperDogList />);

    expect(wrapper.type()).toBe(WrapperDogListView);

    expect(wrapper.props()).toMatchObject({
      dogBreedList: [],
    });
  }); */
  it("should get a list of dog breeds", () => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => once(f)());

    shallow(<WrapperDogList />);

    expect(getAllDogs).toBeCalled();
  });

  
});
