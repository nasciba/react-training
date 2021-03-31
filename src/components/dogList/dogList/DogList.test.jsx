import React from "react";
import { shallow } from "enzyme";
import DogList from "./DogList";
import DogListView from "./DogListView";


describe("DogList", () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(<DogList dogBreedList={[]}/>);

    expect(wrapper.type()).toBe(DogListView);

    expect(wrapper.props()).toMatchObject({
      dogBreedList: []
    });
  });

});
