import React from "react";
import { shallow } from "enzyme";
import { once } from "lodash";
import { getAllDogs } from "../../../services/dog/dogService";
import DogList from "./DogList";
import DogListView from "./DogListView";

jest.mock("../../../services/dog/dogService");

describe("DogList", () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(<DogList />);

    expect(wrapper.type()).toBe(DogListView);

    expect(wrapper.props()).toMatchObject({
      dogBreedsList: [],
    });
  });

  it("should get a list of dog breeds", () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => once(f)());

    shallow(<DogList />);

    expect(getAllDogs).toBeCalled();
  });
});
