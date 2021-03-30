import { shallow } from "enzyme";
import DogListView from "./DogListView";
import List from "@material-ui/core/List";
import DogListItem from "../listItem/listItem";

describe("DogListView", () => {
  it("should render correctly", () => {
    const breeds = [
      { name: "akita", image: "someImageUrl" },
      { name: "african", image: "someImageUrl" },
    ];
    const wrapper = shallow(<DogListView dogBreedsList={breeds} />);

    expect(
      wrapper.matchesElement(
        <List>
          {breeds.map((item) => {
            return (
              <DogListItem
                key={item.name}
                name={item.name}
                image={item.image}
              />
            );
          })}
        </List>
      )
    ).toEqual(true);
  });
});
